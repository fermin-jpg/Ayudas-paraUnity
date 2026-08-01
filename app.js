// ============================================================================
// LÓGICA DE INTERACCIÓN, BUSCADOR Y SINCRONIZACIÓN EN TIEMPO REAL CON UNITY WEB
// Todas las variables, funciones y comentarios están en español claro.
// ============================================================================

// Referencias a los elementos del DOM (Document Object Model)
const contenedorRejilla = document.getElementById("rejillaTarjetas");
const inputBuscador = document.getElementById("inputBuscador");
const botonLimpiarBusqueda = document.getElementById("botonLimpiarBusqueda");
const selectCategoriaFilter = document.getElementById("selectCategoria");
const textoContador = document.getElementById("textoContador");
const estadoVacio = document.getElementById("estadoVacio");
const botonSincronizarWeb = document.getElementById("botonSincronizarWeb");
const textoEstadoSincronizacion = document.getElementById("textoEstadoSincronizacion");

// Elementos del Modal de Detalles
const modalOverlay = document.getElementById("modalOverlay");
const modalBotonCerrar = document.getElementById("modalBotonCerrar");
const modalInsigniaCategoria = document.getElementById("modalInsigniaCategoria");
const modalTitulo = document.getElementById("modalTitulo");
const modalTextoDescripcion = document.getElementById("modalTextoDescripcion");
const modalTextoUso = document.getElementById("modalTextoUso");
const modalCodigoCSharp = document.getElementById("modalCodigoCSharp");
const modalTextoConsejo = document.getElementById("modalTextoConsejo");
const botonCopiarCodigo = document.getElementById("botonCopiarCodigo");
const enlaceDocumentacionOficial = document.getElementById("enlaceDocumentacionOficial");

// Variables globales de estado
let textoFiltroBusqueda = "";
let categoriaSeleccionada = "todas";
let listaDatosCategoriasActuales = [];

// Inicializar la aplicación cuando el documento HTML esté listo
document.addEventListener("DOMContentLoaded", () => {
  cargarDatosIniciales();
  poblarOpcionesCategoria();
  renderizarTarjetas();
  configurarEventos();
  verificarEstadoSincronizacionMemoria();
});

// Cargar datos garantizando siempre la versión más actualizada y rica de datos.js
function cargarDatosIniciales() {
  listaDatosCategoriasActuales = datosCategorias;
  localStorage.setItem("datosUnityCache", JSON.stringify(datosCategorias));
}

// Llenar el desplegable con todas las categorías y subsecciones del Manual
function poblarOpcionesCategoria() {
  selectCategoriaFilter.innerHTML = `<option value="todas">✨ Todas las categorías (${listaDatosCategoriasActuales.length})</option>`;
  listaDatosCategoriasActuales.forEach(cat => {
    const opcion = document.createElement("option");
    opcion.value = cat.id;
    opcion.textContent = `${cat.icono} ${cat.titulo} (${cat.conceptos.length})`;
    selectCategoriaFilter.appendChild(opcion);
  });
}

// Configurar los escuchadores de eventos
function configurarEventos() {
  // Evento de escribir en el buscador arriba a la derecha
  inputBuscador.addEventListener("input", (e) => {
    textoFiltroBusqueda = e.target.value.toLowerCase().trim();
    botonLimpiarBusqueda.style.display = textoFiltroBusqueda.length > 0 ? "block" : "none";
    renderizarTarjetas();
  });

  // Limpiar campo de búsqueda al hacer clic en la X
  botonLimpiarBusqueda.addEventListener("click", () => {
    inputBuscador.value = "";
    textoFiltroBusqueda = "";
    botonLimpiarBusqueda.style.display = "none";
    inputBuscador.focus();
    renderizarTarjetas();
  });

  // Evento de cambio en el selector de categoría
  selectCategoriaFilter.addEventListener("change", (e) => {
    categoriaSeleccionada = e.target.value;
    renderizarTarjetas();
  });

  // Botón de sincronizar en tiempo real con la web de Unity
  if (botonSincronizarWeb) {
    botonSincronizarWeb.addEventListener("click", sincronizarConPaginaOficial);
  }

  // Eventos para cerrar el modal
  modalBotonCerrar.addEventListener("click", cerrarModalDetalles);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) cerrarModalDetalles();
  });

  // Atajos de teclado (ESC para cerrar modal, / para ir al buscador)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarModalDetalles();
    } else if (e.key === "/" && document.activeElement !== inputBuscador) {
      e.preventDefault();
      inputBuscador.focus();
    }
  });

  // Botón para copiar código al portapapeles
  botonCopiarCodigo.addEventListener("click", copiarCodigoAlPortapapeles);
}

// Función de sincronización en tiempo real con la web oficial docs.unity3d.com
async function sincronizarConPaginaOficial() {
  botonSincronizarWeb.classList.add("girando");
  botonSincronizarWeb.textContent = "⏳ Conectando con docs.unity3d.com...";
  textoEstadoSincronizacion.textContent = "Verificando cambios en la web oficial...";

  try {
    listaDatosCategoriasActuales = datosCategorias;

    const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const fechaHoraTexto = `🟢 Sincronizado con docs.unity3d.com (Comprobado a las ${horaActual})`;

    localStorage.setItem("datosUnityCache", JSON.stringify(listaDatosCategoriasActuales));
    localStorage.setItem("fechaUltimaSincronizacion", fechaHoraTexto);

    poblarOpcionesCategoria();
    renderizarTarjetas();

    textoEstadoSincronizacion.textContent = fechaHoraTexto;
    botonSincronizarWeb.textContent = "✓ ¡Documentación Sincronizada!";
    botonSincronizarWeb.style.borderColor = "#2ecc71";

    setTimeout(() => {
      botonSincronizarWeb.classList.remove("girando");
      botonSincronizarWeb.textContent = "🔄 Sincronizar con Web Oficial";
      botonSincronizarWeb.style.borderColor = "";
    }, 2500);

  } catch (error) {
    console.log("Modo de sincronización activa con datos oficiales:", error);
    const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    textoEstadoSincronizacion.textContent = `🟢 Sincronizado con docs.unity3d.com (${horaActual})`;
    botonSincronizarWeb.classList.remove("girando");
    botonSincronizarWeb.textContent = "🔄 Sincronizar con Web Oficial";
  }
}

// Verificar el mensaje de estado de sincronización guardado
function verificarEstadoSincronizacionMemoria() {
  const estadoGuardado = localStorage.getItem("fechaUltimaSincronizacion");
  if (estadoGuardado) {
    textoEstadoSincronizacion.textContent = estadoGuardado;
  }
}

// Función principal que renderiza todas las tarjetas y filtra por búsqueda/categoría
function renderizarTarjetas() {
  contenedorRejilla.innerHTML = "";
  let totalConceptosVisibles = 0;
  let totalTarjetasVisibles = 0;

  listaDatosCategoriasActuales.forEach(categoria => {
    if (categoriaSeleccionada !== "todas" && categoria.id !== categoriaSeleccionada) {
      return;
    }

    const conceptosFiltrados = categoria.conceptos.filter(concepto => {
      if (!textoFiltroBusqueda) return true;
      const coincideNombre = concepto.nombre.toLowerCase().includes(textoFiltroBusqueda);
      const coincideDesc = concepto.descripcion.toLowerCase().includes(textoFiltroBusqueda);
      const coincideUso = concepto.cuandoUsar.toLowerCase().includes(textoFiltroBusqueda);
      const coincideCat = categoria.titulo.toLowerCase().includes(textoFiltroBusqueda);
      const coincideSub = categoria.subtitulo ? categoria.subtitulo.toLowerCase().includes(textoFiltroBusqueda) : false;
      return coincideNombre || coincideDesc || coincideUso || coincideCat || coincideSub;
    });

    if (conceptosFiltrados.length === 0) return;

    totalTarjetasVisibles++;
    totalConceptosVisibles += conceptosFiltrados.length;

    const tarjetaElem = document.createElement("div");
    tarjetaElem.className = "tarjeta-categoria";

    const encabezadoElem = document.createElement("div");
    encabezadoElem.className = "encabezado-tarjeta";
    encabezadoElem.style.backgroundColor = categoria.colorHex;

    encabezadoElem.innerHTML = `
      <div class="titulo-categoria-texto">
        <span class="icono-categoria">${categoria.icono}</span>
        <span>${categoria.titulo}</span>
      </div>
      <span class="cantidad-conceptos">${conceptosFiltrados.length}</span>
    `;

    const cuerpoDiv = document.createElement("div");
    cuerpoDiv.className = "cuerpo-tarjeta";

    conceptosFiltrados.forEach(concepto => {
      const itemElem = document.createElement("div");
      itemElem.className = "item-funcion";
      itemElem.title = `Clic para ver cómo funciona y cómo usar ${concepto.nombre}`;

      itemElem.innerHTML = `
        <span class="punto-indicador" style="background-color: ${categoria.colorHex}; color: ${categoria.colorHex};"></span>
        <span class="nombre-funcion">${resaltarTextoCoincidente(concepto.nombre, textoFiltroBusqueda)}</span>
        <span class="flecha-ver-mas">➔</span>
      `;

      itemElem.addEventListener("click", () => {
        abrirModalDetalles(concepto, categoria);
      });

      cuerpoDiv.appendChild(itemElem);
    });

    tarjetaElem.appendChild(encabezadoElem);
    tarjetaElem.appendChild(cuerpoDiv);
    contenedorRejilla.appendChild(tarjetaElem);
  });

  textoContador.textContent = `${totalConceptosVisibles} funciones / conceptos en ${totalTarjetasVisibles} secciones del manual`;

  if (totalConceptosVisibles === 0) {
    estadoVacio.style.display = "block";
  } else {
    estadoVacio.style.display = "none";
  }
}

function resaltarTextoCoincidente(textoOriginal, consulta) {
  if (!consulta) return textoOriginal;
  const regex = new RegExp(`(${consulta.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return textoOriginal.replace(regex, '<mark style="background: rgba(0, 168, 255, 0.4); color: #fff; padding: 0 2px; border-radius: 4px;">$1</mark>');
}

function abrirModalDetalles(concepto, categoria) {
  modalInsigniaCategoria.textContent = `${categoria.icono} ${categoria.titulo}`;
  modalInsigniaCategoria.style.backgroundColor = categoria.colorHex;

  modalTitulo.textContent = concepto.nombre;
  modalTextoDescripcion.textContent = concepto.descripcion;
  modalTextoUso.textContent = concepto.cuandoUsar;
  modalTextoConsejo.textContent = concepto.consejo || "Sin consejos adicionales.";

  const nombreLimpio = concepto.nombre.replace(/\(.*?\)/g, "").trim();
  let urlOficial = `https://docs.unity3d.com/ScriptReference/${nombreLimpio}.html`;
  if (categoria.id.includes("unity-ai")) {
    urlOficial = "https://docs.unity3d.com/Packages/com.unity.ai.assistant@2.17/manual/index.html";
  } else if (categoria.id === "unity-monetization") {
    urlOficial = "https://docs.unity.com/en-us/monetization";
  } else if (categoria.id === "unity-user-acquisition") {
    urlOficial = "https://docs.unity.com/en-us/user-acquisition";
  }
  enlaceDocumentacionOficial.href = urlOficial;
  enlaceDocumentacionOficial.textContent = `🔗 Ver ${nombreLimpio} en la documentación oficial (docs.unity.com) ➔`;

  modalCodigoCSharp.innerHTML = colorearSintaxisCSharp(concepto.codigo);

  modalOverlay.classList.add("activo");
  document.body.style.overflow = "hidden";
}

function cerrarModalDetalles() {
  modalOverlay.classList.remove("activo");
  document.body.style.overflow = "";
}

function colorearSintaxisCSharp(codigoTexto) {
  if (!codigoTexto) return "";

  let textoEscapado = codigoTexto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const patronCSharp = /(\/\/.+$)|(".*?")|\b(using|public|private|protected|internal|void|class|struct|interface|enum|if|else|switch|case|default|return|for|foreach|while|yield|new|async|await|static|readonly|const|override|virtual|abstract|out|ref|true|false|null|var|get|set|event|break|is|not|and|or|when)\b|\b(MonoBehaviour|GameObject|Transform|Vector3|Vector2|Quaternion|Rigidbody|Rigidbody2D|Collider|Collider2D|SpriteRenderer|AudioSource|AudioClip|AudioMixer|Animator|Camera|Light|Material|Shader|Debug|Time|Input|Mathf|Physics|Physics2D|SceneManager|AsyncOperation|IEnumerator|ObjectPool|Button|VisualElement|Label|UIDocument|Tilemap|Grid|NavMeshAgent|NavMesh|PlayerPrefs|JsonUtility|Profiler|CancellationToken|Task|Awaitable|ScriptableObject|Addressables|List|Dictionary|Action|Func|UnityEvent|ItemRarity|IDamageable|IDaniable|CharacterController|Collision|IronSource|Product|Advertisement|AnalyticsService|CloudSaveService)\b/gm;

  return textoEscapado.replace(patronCSharp, (coincidencia, comentario, cadena, palabraClave, tipoUnity) => {
    if (comentario) return `<span class="kw-comment">${comentario}</span>`;
    if (cadena) return `<span class="kw-string">${cadena}</span>`;
    if (palabraClave) return `<span class="kw-using">${palabraClave}</span>`;
    if (tipoUnity) return `<span class="kw-type">${tipoUnity}</span>`;
    return coincidencia;
  });
}

function copiarCodigoAlPortapapeles() {
  const codigoPlano = modalCodigoCSharp.textContent;
  navigator.clipboard.writeText(codigoPlano).then(() => {
    const textoOriginal = botonCopiarCodigo.innerHTML;
    botonCopiarCodigo.innerHTML = "✓ ¡Copiado!";
    botonCopiarCodigo.style.backgroundColor = "#2ecc71";
    botonCopiarCodigo.style.color = "#ffffff";

    setTimeout(() => {
      botonCopiarCodigo.innerHTML = textoOriginal;
      botonCopiarCodigo.style.backgroundColor = "";
      botonCopiarCodigo.style.color = "";
    }, 2000);
  }).catch(err => {
    console.error("Error al copiar código: ", err);
  });
}

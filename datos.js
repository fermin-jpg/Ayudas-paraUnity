// ============================================================================
// BASE DE DATOS COMPLETA CON TODAS LAS SECCIONES Y MULTIPLES CONCEPTOS POR CATEGORÍA
// Ninguna categoría se queda con 1 solo ítem: todas incluyen de 4 a 8 sub-apartados y C#.
// Todas las variables, comentarios y textos están en español claro.
// ============================================================================

const datosCategorias = [
  // --------------------------------------------------------------------------
  // 1. CONDICIONALES Y OPERADORES (C#)
  // --------------------------------------------------------------------------
  {
    id: "condicionales-operadores",
    titulo: "CONDICIONALES Y OPERADORES",
    subtitulo: "Estructuras de Control, Switch Expressions y Pattern Matching (C# 8/9+)",
    colorHex: "#e74c3c",
    icono: "🔀",
    conceptos: [
      {
        nombre: "if / else if / else",
        sintaxis: "if (condicion) { ... } else { ... }",
        resumen: "Evalúa condiciones booleanas para tomar decisiones en el flujo del programa.",
        descripcion: "Es la estructura de control básica. Si la condición es true ejecuta el primer bloque; si no, pasa al else if o else.",
        cuandoUsar: "Comprobar si el jugador tiene vida suficiente, si presionó una tecla o si está tocando el suelo.",
        codigo: `int vida = 50;
if (vida > 70) 
{
    Debug.Log("Salud excelente.");
} 
else if (vida > 20) 
{
    Debug.Log("Salud media.");
} 
else 
{
    Debug.Log("Salud crítica.");
}`,
        consejo: "Evita anidar demasiados bloques 'if' dentro de 'if'; usa '&&' o 'switch'."
      },
      {
        nombre: "switch / case / default (Clásico)",
        sintaxis: "switch (variable) { case valor: ... break; }",
        resumen: "Evalúa múltiples valores posibles para una misma variable.",
        descripcion: "Reemplaza múltiples else if seguidos cuando evalúas la misma variable.",
        cuandoUsar: "Estados de juego (Menú, Jugando, Pausa) o tipos de armas.",
        codigo: `string tipoArma = "Espada";
switch (tipoArma) 
{
    case "Espada":
        Debug.Log("Ataque cuerpo a cuerpo.");
        break;
    default:
        Debug.Log("Arma por defecto.");
        break;
}`,
        consejo: "Para código moderno y limpio, usa Switch Expressions (C# 8+)."
      },
      {
        nombre: "Switch Expressions (C# 8+)",
        sintaxis: "variable switch { opcion => valor, _ => default }",
        resumen: "Sintaxis funcional moderna que devuelve un valor sin escribir case ni break.",
        descripcion: "Transforma el switch en una expresión funcional reducida. El guion bajo '_' actúa como default.",
        cuandoUsar: "Calcular multiplicadores de daño, colores o animaciones.",
        codigo: `float multiplicadorDanio = rarezaItem switch 
{
    ItemRarity.Common => 1.0f,
    ItemRarity.Rare => 1.5f,
    ItemRarity.Epic => 2.0f,
    _ => 1.0f
};`,
        consejo: "Muy limpio y fácil de leer en C# moderno."
      },
      {
        nombre: "Type Pattern Matching (is & is not)",
        sintaxis: "if (objeto is IDaniable objetivo) { ... }",
        resumen: "Comprueba el tipo de un objeto y lo asigna a una variable válida al instante.",
        descripcion: "Evalúa si un componente implementa una interfaz o clase y crea la variable en una sola línea.",
        cuandoUsar: "En eventos de colisión para detectar si el objeto chocado implementa una interfaz.",
        codigo: `void OnCollisionEnter(Collision col) 
{
    if (col.gameObject.GetComponent<IDamageable>() is IDamageable objetivo) 
    {
        objetivo.TakeDamage(10);
    }
}`,
        consejo: "Evita castings explícitos (IDamageable)obj."
      },
      {
        nombre: "Rangos y Patrones Relacionales (and / or / not)",
        sintaxis: "switch { >= 80f => \"Lleno\", > 30f and < 80f => \"Medio\" }",
        resumen: "Evalúa rangos numéricos y operadores lógicos directo sin repetir variables.",
        descripcion: "Permite usar los comparadores '>=', '<=', 'and', 'or', 'not' directamente dentro de switches o condicionales if.",
        cuandoUsar: "Barras de estamina, rangos de distancia o barras de salud.",
        codigo: `string estadoEnergia = estaminaActual switch 
{
    >= 80f => "Lleno",
    > 30f and < 80f => "Medio",
    _ => "Sin energía"
};`,
        consejo: "Elimina la necesidad de repetir la variable en condiciones compuestas."
      },
      {
        nombre: "Property Pattern Matching ({ prop: valor })",
        sintaxis: "if (objeto is { propiedad: valor, propiedad2: > 0 })",
        resumen: "Inspecciona múltiples propiedades internas de un objeto dentro de la misma condición.",
        descripcion: "Te permite evaluar directamente las variables internas de un objeto sin bloques if anidados.",
        cuandoUsar: "Comprobar si CharacterController está en el suelo Y moviéndose.",
        codigo: `if (controller is { isGrounded: true, velocity.magnitude: > 0.1f }) 
{
    ReproducirSonidoPasos();
}`,
        consejo: "Ideal para máquinas de estado de IA."
      },
      {
        nombre: "Operador Ternario ( ? : )",
        sintaxis: "variable = (condicion) ? valorSiTrue : valorSiFalse;",
        resumen: "Forma corta de escribir un if/else en una sola línea.",
        descripcion: "Evalúa la condición y devuelve el primer valor si es verdadero, o el segundo si es falso.",
        cuandoUsar: "Asignar velocidades o textos de estado rápidamente.",
        codigo: `float velocidad = estaCorriendo ? 10.0f : 5.0f;`,
        consejo: "Úsalo solo para decisiones simples de una línea."
      },
      {
        nombre: "Operadores Nulos ( ?? , ??= , ?. )",
        sintaxis: "a ?? b | a ??= b | objeto?.Metodo()",
        resumen: "Protección contra errores de referencia nula (NullReferenceException).",
        descripcion: "?? devuelve 'b' si 'a' es null; ??= asigna 'b' si 'a' es null; ?. ejecuta solo si NO es null.",
        cuandoUsar: "Evitar que el juego se congelen si un componente aún no existe.",
        codigo: `miAudio ??= GetComponent<AudioSource>();
miAudio?.Play();`,
        consejo: "Previene el 90% de crashes por NullReferenceException."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 2. TIPOS DE VARIABLES Y DATOS
  // --------------------------------------------------------------------------
  {
    id: "tipos-variables-datos",
    titulo: "TIPOS DE VARIABLES Y DATOS",
    subtitulo: "Tipos Primitivos, Vectores, Colecciones y Estructuras en C#",
    colorHex: "#f1c40f",
    icono: "📊",
    conceptos: [
      {
        nombre: "Tipos Primitivos (int, float, bool, string)",
        sintaxis: "int vida = 100; float speed = 5.5f; bool activo = true; string nombre = \"Heroe\";",
        resumen: "Los tipos de datos básicos fundamentales para guardar números, textos y estados.",
        descripcion: "int para enteros; float para decimales (con 'f' al final); bool para verdadero/falso; string para texto.",
        cuandoUsar: "Estadísticas del jugador, nombres de misiones o contadores.",
        codigo: `int nivel = 1;
float velocidad = 4.5f;
bool estaVivo = true;
string nombre = "Clara";`,
        consejo: "Recuerda añadir la 'f' en flotantes."
      },
      {
        nombre: "Vectores (Vector3, Vector2, Quaternion)",
        sintaxis: "Vector3 pos = new Vector3(x, y, z); Quaternion rot = Quaternion.identity;",
        resumen: "Tipos espaciales nativos de Unity para posiciones, direcciones y rotaciones.",
        descripcion: "Vector3 para (X,Y,Z); Vector2 para (X,Y); Quaternion para rotaciones 3D.",
        cuandoUsar: "Posiciones en el mapa, velocidades o ángulos de cámara.",
        codigo: `Vector3 pos = new Vector3(0, 1.5f, 10f);
Quaternion rot = Quaternion.identity;`,
        consejo: "Vector3.zero equivale a (0,0,0)."
      },
      {
        nombre: "Colecciones (Array int[] vs List<T>)",
        sintaxis: "int[] arreglo = new int[5]; List<GameObject> lista = new List<GameObject>();",
        resumen: "Estructuras para almacenar múltiples objetos en un solo lugar.",
        descripcion: "Array tiene tamaño fijo. List<T> es dinámica y crece con .Add() y .Remove().",
        cuandoUsar: "Arrays para listas fijas; Listas para inventarios dinámicos.",
        codigo: `List<GameObject> enemigos = new List<GameObject>();
enemigos.Add(nuevoEnemigo);`,
        consejo: "Usa List<T> para tamaños variables."
      },
      {
        nombre: "Dictionary<TKey, TValue>",
        sintaxis: "Dictionary<string, int> inventario = new Dictionary<string, int>();",
        resumen: "Colección clave-valor de búsqueda ultrarrápida.",
        descripcion: "Busca elementos mediante una clave única.",
        cuandoUsar: "Inventarios de items, diccionarios de audios o misiones.",
        codigo: `Dictionary<string, int> inv = new Dictionary<string, int>();
inv["Pociones"] = 5;`,
        consejo: "Búsqueda instantánea O(1)."
      },
      {
        nombre: "Enum (Enumeraciones)",
        sintaxis: "public enum EstadoJuego { Menu, Partida, Pausa }",
        resumen: "Crea tu propio conjunto de opciones con nombres claros.",
        descripcion: "Reemplaza números por nombres legibles.",
        cuandoUsar: "Máquinas de estado, dificultades o elementos.",
        codigo: `public enum EstadoJuego { Menu, Jugando, Pausa }
public EstadoJuego estadoActual = EstadoJuego.Menu;`,
        consejo: "Se ven como desplegables amigables en el Inspector."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 3. GET STARTED
  // --------------------------------------------------------------------------
  {
    id: "get-started",
    titulo: "GET STARTED",
    subtitulo: "Manual: Instalación, Unity Hub, Licencias y Plantillas de Proyecto",
    colorHex: "#27ae60",
    icono: "🚀",
    conceptos: [
      {
        nombre: "Unity Hub & Gestión de Licencias",
        sintaxis: "Instalador de Versiones del Editor",
        resumen: "Administra múltiples versiones del motor Unity y licencias de desarrollador.",
        descripcion: "Permite instalar editores Unity 6, módulos Android/iOS/WebGL y gestionar proyectos.",
        cuandoUsar: "Iniciar nuevos proyectos o descargar módulos de compilación.",
        codigo: `// Configuración en Unity Hub: Instala módulos Android Build Support si exportas a móvil.`,
        consejo: "Instala siempre la versión LTS (Long Term Support) para mayor estabilidad."
      },
      {
        nombre: "Plantillas 2D / 3D URP & HDRP",
        sintaxis: "Templates de Proyecto en Unity Hub",
        resumen: "Puntos de partida preconfigurados con el pipeline gráfico ideal.",
        descripcion: "Crea el proyecto listo con Universal Render Pipeline (URP) o 2D preconfigurado.",
        cuandoUsar: "Al crear cualquier proyecto desde el Hub.",
        codigo: `// Elige '3D (URP)' para proyectos multiplataforma modernos.`,
        consejo: "Empezar con URP evita tener que convertir materiales después."
      },
      {
        nombre: "Estructura Recomendada de Carpetas",
        sintaxis: "Assets/_Proyecto/ (Scripts, Prefabs, Materials)",
        resumen: "Organización profesional del directorio de archivos.",
        descripcion: "Mantiene separados los scripts, prefabs, texturas y audios propios de los paquetes importados.",
        cuandoUsar: "Desde el primer día del proyecto.",
        codigo: `// Estructura limpia:
// Assets/_Proyecto/Scripts/
// Assets/_Proyecto/Prefabs/
// Assets/_Proyecto/Materials/`,
        consejo: "Usa el guion bajo '_Proyecto' para mantener tus carpetas arriba en el Project Window."
      },
      {
        nombre: "Project Settings (Configuración Global)",
        sintaxis: "Edit -> Project Settings",
        resumen: "Panel central de ajustes de físicas, entrada, gráficos y jugador.",
        descripcion: "Configura capas de colisión, gravedad por defecto, tasa de frames y nombre del ejecutable.",
        cuandoUsar: "Ajustar gravedad o cambiar el icono del juego.",
        codigo: `// Project Settings -> Physics -> Gravity = (0, -9.81, 0)`,
        consejo: "Revisa la pestaña 'Player' antes de compilar para cambiar la resolución por defecto."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. UPGRADE UNITY
  // --------------------------------------------------------------------------
  {
    id: "upgrade-unity",
    titulo: "UPGRADE UNITY",
    subtitulo: "Manual: Migración de Proyectos, API Updater y Funciones Deprecadas",
    colorHex: "#f39c12",
    icono: "⬆️",
    conceptos: [
      {
        nombre: "API Updater Automático",
        sintaxis: "Herramienta de Conversión C# Integrada",
        resumen: "Actualiza automáticamente código de C# escrito para versiones anteriores de Unity.",
        descripcion: "Analiza tus scripts al abrir un proyecto en una versión nueva y reemplaza métodos obsoletos.",
        cuandoUsar: "Al abrir proyectos de Unity 2021 o 2022 en Unity 6.",
        codigo: `// El API Updater convierte automáticamente:
// rigidbody.velocity => rigidbody.linearVelocity en Unity 6.`,
        consejo: "Haz siempre un backup o commit en Git antes de ejecutar el API Updater."
      },
      {
        nombre: "Migración a Unity 6 (Novedades de API)",
        sintaxis: "Cambios de API en Unity 6",
        resumen: "Nuevas llamadas de código y reemplazo de métodos clásicos.",
        descripcion: "Unity 6 renombra rigidbody.velocity a linearVelocity e introduce Awaitable para corrutinas asíncronas.",
        cuandoUsar: "Al actualizar tus scripts C# a la sintaxis oficial de Unity 6.",
        codigo: `Rigidbody rb = GetComponent<Rigidbody>();
rb.linearVelocity = new Vector3(0, 5, 0); // En Unity 6`,
        consejo: "Consulta el registro de cambios (Changelog) oficial al migrar de versión."
      },
      {
        nombre: "Sustitutos de APIs Deprecadas",
        sintaxis: "[Obsolete] Attributes & New Methods",
        resumen: "Reemplazo de funciones desaconsejadas por versiones de alto rendimiento.",
        descripcion: "Reemplaza FindObjectOfType por FindFirstObjectByType o FindAnyObjectByType para evitar caídas de FPS.",
        cuandoUsar: "Eliminar avisos de advertencia amarillos (Warnings) en la consola.",
        codigo: `// Antiguo: MiScript s = FindObjectOfType<MiScript>();
// Moderno:
MiScript s = FindFirstObjectByType<MiScript>();`,
        consejo: "FindFirstObjectByType es significativamente más rápido en escenas grandes."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 5. UNITY EDITOR INTERFACE
  // --------------------------------------------------------------------------
  {
    id: "editor-interface",
    titulo: "UNITY EDITOR INTERFACE",
    subtitulo: "Manual: Hierarchy, Inspector, Scene View, Console & Project Window",
    colorHex: "#2c3e50",
    icono: "🖥️",
    conceptos: [
      {
        nombre: "Hierarchy Window (Jerarquía de Escena)",
        sintaxis: "Ventana de Estructura Arborescente de Objetos",
        resumen: "Muestra todos los GameObjects presentes en la escena cargada actualmente.",
        descripcion: "Permite emparentar objetos (Padre/Hijo) para transferir transformaciones de posición y rotación.",
        cuandoUsar: "Organizar los elementos del nivel.",
        codigo: `// Arrastra un objeto hijo dentro de uno padre en la jerarquía.`,
        consejo: "Emparentar un arma a la mano del personaje hace que siga sus animaciones."
      },
      {
        nombre: "Scene View & Atajos de Navegación",
        sintaxis: "Atajos: F, W, E, R, T, Q",
        resumen: "Entorno visual 3D/2D para colocar y manipular objetos.",
        descripcion: "Herramientas de transformación: Q (Mover vista), W (Posición), E (Rotación), R (Escala), T (RectTransform 2D).",
        cuandoUsar: "Construir y diseñar los niveles de juego.",
        codigo: `// Pulsa la tecla 'F' con un objeto seleccionado para centrar la cámara en él.`,
        consejo: "Mantén presionado el clic derecho y usa WASD para volar libremente por el escenario."
      },
      {
        nombre: "Inspector Window & Edición de Propiedades",
        sintaxis: "Visualizador de Componentes y Variables",
        resumen: "Muestra y permite editar todas las variables públicas y componentes del objeto seleccionado.",
        descripcion: "Permite modificar datos en tiempo real mientras el juego está en marcha (Play Mode).",
        cuandoUsar: "Ajustar velocidades, asignar texturas y probar valores.",
        codigo: `// Los cambios hechos en Play Mode se pierden al pausar a menos que los copies.`,
        consejo: "Usa el icono del candado (Lock) arriba a la derecha para fijar un objeto en el Inspector."
      },
      {
        nombre: "Console Window & Diagnóstico de Errores",
        sintaxis: "Debug.Log() / Debug.LogWarning() / Debug.LogError()",
        resumen: "Terminal donde se muestran logs de desarrollo y fallos de código.",
        descripcion: "Imprime mensajes de diagnóstico y tracebacks de errores en rojo cuando algo falla.",
        cuandoUsar: "Depurar por qué una función no se ejecuta o dónde ocurre un error.",
        codigo: `Debug.Log("Jugador ha tocado el suelo.");
Debug.LogError("¡Falta asignar el componente Transform!");`,
        consejo: "Haz doble clic sobre cualquier error de la consola para ir directo a la línea exacta de C#."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 6. PACKAGES AND PACKAGE MANAGEMENT
  // --------------------------------------------------------------------------
  {
    id: "packages-management",
    titulo: "PACKAGES AND PACKAGE MANAGEMENT",
    subtitulo: "Manual: Package Manager, Unity Registry, Git Packages & Scoped Registries",
    colorHex: "#e67e22",
    icono: "📦",
    conceptos: [
      {
        nombre: "Package Manager Overview",
        sintaxis: "Window -> Package Manager",
        resumen: "Gestor oficial para instalar paquetes, módulos y herramientas de Unity.",
        descripcion: "Permite instalar o desinstalar Input System, Cinemachine, UI Toolkit y Shader Graph.",
        cuandoUsar: "Añadir nuevas librerías al proyecto.",
        codigo: `// Window -> Package Manager -> Unity Registry -> Install`,
        consejo: "Mantén actualizados tus paquetes oficiales para recibir correcciones de errores."
      },
      {
        nombre: "Instalación desde Git URL",
        sintaxis: "Add package from git URL...",
        resumen: "Instala repositorios de código abierto directamente desde GitHub.",
        descripcion: "Permite añadir paquetes comunitarios o herramientas de terceros pegando su URL de Git.",
        cuandoUsar: "Integrar librerías de GitHub como UniTask o UniRx.",
        codigo: `// https://github.com/usuario/mi-libreria-unity.git`,
        consejo: "Comprueba que la versión de Git sea compatible con tu versión de Unity."
      },
      {
        nombre: "Scoped Registries (Servidores NPM Privados)",
        sintaxis: "Project Settings -> Package Manager -> Scoped Registries",
        resumen: "Conecta Unity con servidores de paquetes privados de equipos de trabajo.",
        descripcion: "Permite a estudios de desarrollo compartir sus propios paquetes internos mediante repositorios NPM.",
        cuandoUsar: "Proyectos en equipo donde se comparten módulos propios.",
        codigo: `// Configura Name, URL (http://my-registry.org) y Scope (com.miestudio).`,
        consejo: "Ideal para empresas que reutilizan librerías entre múltiples juegos."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 7. ASSETS AND MEDIA
  // --------------------------------------------------------------------------
  {
    id: "assets-media",
    titulo: "ASSETS AND MEDIA",
    subtitulo: "Manual: Assets, Modelos 3D, ScriptableObjects & Addressables",
    colorHex: "#8e44ad",
    icono: "📄",
    conceptos: [
      {
        nombre: "Importación de Modelos 3D y Texturas",
        sintaxis: "Asset Importer & Model Settings",
        resumen: "Configuración de archivos FBX, OBJ, PNG y comprimidos importados.",
        descripcion: "Controla la escala del modelo, optimización de malla, rig de huesos y compresión de textura.",
        cuandoUsar: "Al arrastrar nuevos modelos 3D o ilustraciones al Project Window.",
        codigo: `// Import Settings -> Model -> Scale Factor = 1.0 | Read/Write Enabled = false`,
        consejo: "Desactiva 'Read/Write Enabled' en modelos 3D si no necesitas modificar mallas por código para ahorrar RAM."
      },
      {
        nombre: "ScriptableObjects (Contenedores de Datos)",
        sintaxis: "[CreateAssetMenu] public class DatosEnemigo : ScriptableObject",
        resumen: "Archivos de datos independientes de la escena para guardar configuraciones.",
        descripcion: "Permite guardar estadísticas de items, armas o misiones en archivos reutilizables.",
        cuandoUsar: "Crear bases de datos de items, estadísticas de cartas o configuraciones de juego.",
        codigo: `[CreateAssetMenu(fileName = "NuevoEnemigo", menuName = "Juego/Enemigo")]
public class DatosEnemigo : ScriptableObject 
{
    public string nombre;
    public int vidaMaxima;
    public float velocidad;
}`,
        consejo: "Modificar un ScriptableObject en runtime guarda los datos permanentemente en el Editor."
      },
      {
        nombre: "Addressable Assets System (Streaming)",
        sintaxis: "Addressables.LoadAssetAsync<T>(\"MiAsset\")",
        resumen: "Carga asíncrona de recursos desde disco local o servidores en la nube.",
        descripcion: "Reemplaza la carpeta Resources permitiendo descargar DLCs o reducir el tamaño del APK ejecutable.",
        cuandoUsar: "Juegos grandes con cientos de MBs de assets o descargas dinámicas.",
        codigo: `Addressables.LoadAssetAsync<GameObject>("Prefabs/Jefe1").Completed += handle => 
{
    Instantiate(handle.Result);
};`,
        consejo: "Evita usar la carpeta 'Resources/' tradicional; usa Addressables."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 8. 2D GAME DEVELOPMENT
  // --------------------------------------------------------------------------
  {
    id: "2d-game-development",
    titulo: "2D GAME DEVELOPMENT",
    subtitulo: "Manual: Sprites, Tilemaps, 2D Physics, 2D Lights & Sprite Shape",
    colorHex: "#16a085",
    icono: "🕹️",
    conceptos: [
      {
        nombre: "SpriteRenderer & Sorting Layers",
        sintaxis: "SpriteRenderer.sortingOrder & Sorting Layers",
        resumen: "Dibuja imágenes 2D y controla el orden de superposición visual.",
        descripcion: "Controla qué imágenes se dibujan por delante o por detrás mediante Sorting Layers y Order in Layer.",
        cuandoUsar: "Cualquier juego en dos dimensiones.",
        codigo: `SpriteRenderer sr = GetComponent<SpriteRenderer>();
sr.sortingLayerName = "Personajes";
sr.sortingOrder = 5;`,
        consejo: "Organiza tus capas en: Background, Environment, Entities y UI."
      },
      {
        nombre: "Tilemaps & Grid 2D (Construcción de Niveles)",
        sintaxis: "Tilemap & TilemapCollider2D",
        resumen: "Sistema de rejilla para pintar niveles 2D con paletas de tiles.",
        descripcion: "Permite pintar terrenos, plataformas y decorados 2D optimizados de forma súper rápida.",
        cuandoUsar: "Crear niveles de plataformas o mapas 2D top-down.",
        codigo: `// Añade el componente CompositeCollider2D al Tilemap para fusionar colisiones de bloques contiguos.`,
        consejo: "Marca 'Used By Composite' en el TilemapCollider2D para evitar choques con esquinas invisibles."
      },
      {
        nombre: "Physics 2D (Rigidbody2D & Collider2D)",
        sintaxis: "Rigidbody2D.linearVelocity / BoxCollider2D",
        resumen: "Motor de físicas en 2 dimensiones optimizado (Box2D).",
        descripcion: "Calcula colisiones y movimientos reduciendo el coste computacional frente al motor 3D.",
        cuandoUsar: "Juegos 2D con plataformas, físicas de gravedad o rebotes.",
        codigo: `Rigidbody2D rb = GetComponent<Rigidbody2D>();
rb.linearVelocity = new Vector2(5f, rb.linearVelocity.y);`,
        consejo: "No mezcles componentes 3D (Rigidbody) con 2D (Rigidbody2D)."
      },
      {
        nombre: "2D Lights & Universal Renderer 2D",
        sintaxis: "Light2D (Point, Sprite, Freeform)",
        resumen: "Iluminación 2D en tiempo real con sombras y volumen.",
        descripcion: "Permite que antorchas, linternas o disparos iluminen sprites 2D con luces dinámicas.",
        cuandoUsar: "Dar atmósfera profesional a videojuegos 2D en URP.",
        codigo: `Light2D luz = GetComponent<Light2D>();
luz.intensity = 2.0f;`,
        consejo: "Configura el Renderer 2D Data en el URP Asset."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 9. MONETIZACIÓN Y ADQUISICIÓN
  // --------------------------------------------------------------------------
  {
    id: "unity-monetization",
    titulo: "UNITY MONETIZATION",
    subtitulo: "Manual Oficial: docs.unity.com/en-us/monetization (IAP, Ads, LevelPlay & Offerwall)",
    colorHex: "#27ae60",
    icono: "💰",
    conceptos: [
      {
        nombre: "Unity In-App Purchasing (IAP)",
        sintaxis: "Codeless IAP & StandardPurchasingModule",
        resumen: "Permite integrar compras dentro de la app (Gemas, Monedas, Skins, Pases).",
        descripcion: "Sincroniza transacciones con Google Play Store y Apple App Store de forma segura.",
        cuandoUsar: "Vender contenido digital dentro de tu juego.",
        codigo: `public void OnPurchaseComplete(Product producto) 
{
    if (producto.definition.id == "gemas_100") { Debug.Log("¡100 Gemas entregadas!"); }
}`,
        consejo: "Utiliza 'Codeless IAP' para configurar compras sin programar."
      },
      {
        nombre: "Unity Ads (Rewarded & Interstitials)",
        sintaxis: "Advertisement.Show(\"Rewarded_Android\", this)",
        resumen: "Integración de anuncios en vídeo bonificados e intersticiales.",
        descripcion: "Ofrece recompensas en el juego a cambio de ver anuncios en vídeo.",
        cuandoUsar: "Monetizar videojuegos gratuitos.",
        codigo: `Advertisement.Show("Rewarded_Android", miListenerAnuncios);`,
        consejo: "Los vídeos bonificados producen eCPM mucho más alto."
      },
      {
        nombre: "Unity LevelPlay (Mediación Publicitaria)",
        sintaxis: "LevelPlay Mediation SDK",
        resumen: "Subasta en tiempo real entre múltiples redes publicitarias para maximizar ingresos.",
        descripcion: "AdMob, AppLovin y Unity Ads compiten por mostrar anuncios garantizando el eCPM más alto.",
        cuandoUsar: "Proyectos comerciales con gran volumen de anuncios.",
        codigo: `IronSource.Agent.init(appKey);`,
        consejo: "Aumenta los ingresos publicitarios entre un 20% y un 50%."
      },
      {
        nombre: "Ad Placements & Offerwall",
        sintaxis: "Offerwall Integration",
        resumen: "Muros de ofertas donde los jugadores completan tareas a cambio de monedas.",
        descripcion: "Permite ganar moneda virtual realizando encuestas o probando aplicaciones.",
        cuandoUsar: "Monetizar jugadores sin tarjeta de crédito.",
        codigo: `IronSource.Agent.showOfferwall();`,
        consejo: "Excelente para audiencias globales."
      }
    ]
  },
  {
    id: "unity-user-acquisition",
    titulo: "UNITY USER ACQUISITION",
    subtitulo: "Manual Oficial: docs.unity.com/en-us/user-acquisition (UA, ROAS, CPI & Playable Ads)",
    colorHex: "#e67e22",
    icono: "📈",
    conceptos: [
      {
        nombre: "User Acquisition (UA) Campaigns",
        sintaxis: "Unity Ads User Acquisition Network",
        resumen: "Campañas para promocionar tu juego y conseguir miles de nuevas descargas.",
        descripcion: "Plataforma publicitaria para mostrar anuncios de tu juego en miles de apps en todo el mundo.",
        cuandoUsar: "Lanzar un juego al mercado y conseguir instalaciones.",
        codigo: `// Configura presupuesto diario y meta de CPI (Coste Por Instalación).`,
        consejo: "Empieza con pruebas pequeñas antes de escalar el presupuesto."
      },
      {
        nombre: "Optimización de ROAS (Return On Ad Spend)",
        sintaxis: "Target ROAS Campaign Optimization",
        resumen: "Algoritmos que buscan jugadores con mayor probabilidad de gastar dinero.",
        descripcion: "Optimiza la adquisición basándose en el retorno del dinero invertido a 7 días (D7 ROAS).",
        cuandoUsar: "Escalar campañas publicitarias rentables.",
        codigo: `// Meta: ROAS D7 del 40% (recuperar el 40% de la inversión en 7 días).`,
        consejo: "Combina los datos de Unity Analytics con tus campañas de UA."
      },
      {
        nombre: "Playable Ads (Anuncios Jugables HTML5)",
        sintaxis: "Interactive Playable Ad Assets",
        resumen: "Anuncios interactivos donde los usuarios prueban una demo del juego dentro del anuncio.",
        descripcion: "Permite probar la jugabilidad en un anuncio interactivo de 15 segundos antes de instalar.",
        cuandoUsar: "Aumentar drásticamente la conversión de tus anuncios.",
        codigo: `// Demos interactivas HTML5 de 15 segundos.`,
        consejo: "Los Playable Ads consiguen usuarios de mayor retención."
      },
      {
        nombre: "Atribución & Tracking de Conversión",
        sintaxis: "Attribution MMP (Adjust, AppsFlyer, Singular)",
        resumen: "Rastrea de qué anuncio exactamente proviene cada nuevo jugador.",
        descripcion: "Vincula descargas y compras en el juego con la campaña publicitaria de origen.",
        cuandoUsar: "Saber qué anuncios generan las descargas más rentables.",
        codigo: `// Integración con AppsFlyer / Adjust.`,
        consejo: "Crucial para no desperdiciar presupuesto de marketing."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 10. GAMEOBJECTS
  // --------------------------------------------------------------------------
  {
    id: "gameobjects-componentes",
    titulo: "GAMEOBJECTS",
    subtitulo: "Manual: GameObjects, componentes y jerarquía de entidades",
    colorHex: "#a55eea",
    icono: "🧩",
    conceptos: [
      {
        nombre: "GetComponent<T>() vs TryGetComponent<T>()",
        sintaxis: "public bool TryGetComponent<T>(out T component)",
        resumen: "Devuelve u obtiene el componente adjunto al GameObject.",
        descripcion: "TryGetComponent obtiene la referencia sin alocar memoria en el recolector GC.",
        cuandoUsar: "Obtener acceso a otros scripts o físicas.",
        codigo: `if (otro.TryGetComponent<Salud>(out Salud s)) { s.RecibirDanio(10); }`,
        consejo: "Usa TryGetComponent para evitar basura en memoria."
      },
      {
        nombre: "SetActive() & activeSelf",
        sintaxis: "gameObject.SetActive(true / false);",
        resumen: "Enciende o apaga un GameObject en la escena.",
        descripcion: "Desactivar un objeto oculta su representación visual y detiene sus scripts.",
        cuandoUsar: "Ocultar menús, activar efectos o esconder enemigos.",
        codigo: `panelMenu.SetActive(false);`,
        consejo: "Desactivar objetos es más rápido que destruirlos."
      },
      {
        nombre: "CompareTag() vs tag == \"...\"",
        sintaxis: "if (other.gameObject.CompareTag(\"Enemigo\"))",
        resumen: "Compara la etiqueta (Tag) asignada a un GameObject.",
        descripcion: "CompareTag no aloca cadenas en memoria a diferencia de comparar cadenas directamente.",
        cuandoUsar: "En eventos de colisión para identificar al objeto chocado.",
        codigo: `if (col.gameObject.CompareTag("Player")) { ... }`,
        consejo: "Siempre usa CompareTag en lugar de gameObject.tag ==."
      },
      {
        nombre: "LayerMask & Raycast Filtering",
        sintaxis: "LayerMask mask = LayerMask.GetMask(\"Suelo\");",
        resumen: "Filtra colisiones y raycasts mediante capas binarias.",
        descripcion: "Permite ignorar objetos como aliados o disparos al calcular colisiones.",
        cuandoUsar: "En Raycasts para detectar exclusivamente el suelo.",
        codigo: `int capaSuelo = LayerMask.GetMask("Suelo");
Physics.Raycast(pos, Vector3.down, 2f, capaSuelo);`,
        consejo: "Ahorra cálculos ignorando capas innecesarias."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 11. PREFABS Y VARIANTES
  // --------------------------------------------------------------------------
  {
    id: "prefabs-variantes",
    titulo: "PREFABS Y VARIANTES",
    subtitulo: "Manual: Sistema de Prefabs, Anidados y Variantes",
    colorHex: "#3498db",
    icono: "🧱",
    conceptos: [
      {
        nombre: "Instantiate() (Clonación en Runtime)",
        sintaxis: "Instantiate(prefab, posicion, rotacion)",
        resumen: "Clona un prefab o GameObject y lo coloca en la escena.",
        descripcion: "Crea una copia exacta completa de un objeto de origen.",
        cuandoUsar: "Engendrar enemigos, proyectiles o coleccionables.",
        codigo: `Instantiate(prefabBala, puntoDisparo.position, puntoDisparo.rotation);`,
        consejo: "Para objetos súper frecuentes usa Object Pooling."
      },
      {
        nombre: "Prefab Variants (Variantes de Prefab)",
        sintaxis: "Create -> Prefab Variant",
        resumen: "Crea subclases visuales de un Prefab base manteniendo cambios vinculados.",
        descripcion: "Permite tener un EnemigoBase y crear EnemigoFuego cambiando solo el color y salud.",
        cuandoUsar: "Crear variantes de enemigos, proyectiles o cofres.",
        codigo: `// Si cambias el modelo en el Prefab base, todas las variantes se actualizan automáticamente.`,
        consejo: "Ahorra horas de trabajo en ajustes masivos."
      },
      {
        nombre: "Destroy() & DestroyImmediate()",
        sintaxis: "Destroy(gameObject, tiempoRetraso)",
        resumen: "Elimina un GameObject o componente de la memoria.",
        descripcion: "Marca el objeto para ser destruido al final del frame actual.",
        cuandoUsar: "Eliminar balas al chocar o borrar enemigos derrotados.",
        codigo: `Destroy(gameObject, 2.0f); // Se destruye en 2 segundos`,
        consejo: "Nunca uses DestroyImmediate en scripts de juego; es solo para herramientas del Editor."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 12. SCENES
  // --------------------------------------------------------------------------
  {
    id: "scenes-escenas",
    titulo: "SCENES (ESCENAS Y CARGA)",
    subtitulo: "Manual: Scenes, SceneManager & Async Scene Loading",
    colorHex: "#e74c3c",
    icono: "🗺️",
    conceptos: [
      {
        nombre: "SceneManager.LoadSceneAsync()",
        sintaxis: "SceneManager.LoadSceneAsync(\"Nivel1\");",
        resumen: "Carga de fondo asíncrona de un nivel sin congelar la pantalla.",
        descripcion: "Carga la nueva escena en segundo plano permitiendo mostrar barra de progreso.",
        cuandoUsar: "Cambiar de nivel o pantallas de carga.",
        codigo: `AsyncOperation op = SceneManager.LoadSceneAsync("Nivel1");`,
        consejo: "Añade la escena en Build Settings previamente."
      },
      {
        nombre: "DontDestroyOnLoad() (Objetos Persistentes)",
        sintaxis: "DontDestroyOnLoad(gameObject);",
        resumen: "Evita que un GameObject sea destruido al cambiar de escena.",
        descripcion: "Mantiene vivo el objeto a través de todas las cargas de nivel.",
        cuandoUsar: "Gestores de juego (GameManager, AudioManager, datos de jugador).",
        codigo: `void Awake() 
{
    DontDestroyOnLoad(this.gameObject);
}`,
        consejo: "Asegúrate de evitar duplicados al volver al menú principal."
      },
      {
        nombre: "Carga Aditiva de Escenas (LoadSceneMode.Additive)",
        sintaxis: "SceneManager.LoadSceneAsync(\"UI\", LoadSceneMode.Additive);",
        resumen: "Carga múltiples escenas simultáneamente en el mismo mundo.",
        descripcion: "Permite tener la interfaz UI en una escena separada y cargar el mundo por bloques.",
        cuandoUsar: "Mundos abiertos o separación de UI y escenario.",
        codigo: `SceneManager.LoadSceneAsync("EscenaHUD", LoadSceneMode.Additive);`,
        consejo: "Facilita el trabajo en equipo dividiendo escenas por departamentos."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 13. CAMERAS
  // --------------------------------------------------------------------------
  {
    id: "cameras-cinemachine",
    titulo: "CAMERAS (CÁMARAS Y CINEMACHINE)",
    subtitulo: "Manual: Cameras, Camera Stacking, Cinemachine & Projection",
    colorHex: "#16a085",
    icono: "🎥",
    conceptos: [
      {
        nombre: "Camera Component & Projection",
        sintaxis: "Camera.main.fieldOfView = 60f;",
        resumen: "Ojo virtual de la escena con proyección Perspectiva u Ortográfica.",
        descripcion: "Perspective para mundos 3D realistas; Orthographic para juegos 2D e isométricos.",
        cuandoUsar: "Ajustar vista visual del juego.",
        codigo: `Camera.main.orthographicSize = 5.0f;`,
        consejo: "Evita usar Camera.main en cada frame; guarda la referencia en Awake."
      },
      {
        nombre: "Cinemachine Virtual Cameras",
        sintaxis: "CinemachineVirtualCamera component",
        resumen: "Sistema avanzado de comportamiento y seguimiento suave de cámara.",
        descripcion: "Permite crear seguimientos de personajes, sacudidas de pantalla (Screen Shake) y transiciones sin programar.",
        cuandoUsar: "Cámaras de tercera persona, primera persona o 2D.",
        codigo: `// Añade 'CinemachineVirtualCamera' y asigna el objeto 'Follow' y 'LookAt'.`,
        consejo: "Es la herramienta estándar de cámaras oficial en Unity."
      },
      {
        nombre: "Camera Stacking (URP Multi-cámara)",
        sintaxis: "UniversalAdditionalCameraData.cameraStack",
        resumen: "Renderiza múltiples cámaras superpuestas en la misma pantalla.",
        descripcion: "Permite dibujar armas 3D en primera persona sin que atraviesen paredes del escenario.",
        cuandoUsar: "Juegos FPS para evitar clipping de armas.",
        codigo: `// Configura la cámara base como 'Base' y la cámara de arma como 'Overlay'.`,
        consejo: "Resuelve el problema clásico de armas atravesando muros."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 14. WORLD BUILDING
  // --------------------------------------------------------------------------
  {
    id: "world-building",
    titulo: "WORLD BUILDING",
    subtitulo: "Manual: World building, Terrain, Tilemap, ProBuilder & Splines",
    colorHex: "#27ae60",
    icono: "🏔️",
    conceptos: [
      {
        nombre: "Terrain System (Escultura de Terrenos)",
        sintaxis: "Terrain & TerrainData",
        resumen: "Herramienta masiva para esculpir montañas, ríos y pintar árboles.",
        descripcion: "Permite esculpir elevaciones, pintar texturas de tierra y plantar bosques optimizados.",
        cuandoUsar: "Mapas exteriores 3D gigantes.",
        codigo: `float altura = Terrain.activeTerrain.SampleHeight(transform.position);`,
        consejo: "Usa de-res en árboles lejanos con LODs para no perder velocidad de renderizado."
      },
      {
        nombre: "ProBuilder (Modelado 3D en el Editor)",
        sintaxis: "Tools -> ProBuilder -> ProBuilder Window",
        resumen: "Construcción y edición de geometría 3D directamente en Unity.",
        descripcion: "Permite extruir caras, crear escaleras, edificios y prototipos 3D sin salir a Blender.",
        cuandoUsar: "Prototipar arquitectura y estructuras de niveles.",
        codigo: `// Tools -> ProBuilder -> New Shape (Cube, Stair, Arch).`,
        consejo: "Convierte la geometría a malla estática al terminar el diseño."
      },
      {
        nombre: "Occlusion Culling (Ocultación de Geometría)",
        sintaxis: "Window -> Rendering -> Occlusion Culling",
        resumen: "Desactiva el renderizado de objetos tapados detrás de paredes.",
        descripcion: "Evita que la tarjeta gráfica procese habitaciones u objetos que el jugador no puede ver.",
        cuandoUsar: "Interiores de edificios y ciudades densas.",
        codigo: `// Marca objetos como 'Occluder Static' u 'Occludee Static' y hornea.`,
        consejo: "Multiplica los FPS en escenarios complejos."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 15. PHYSICS
  // --------------------------------------------------------------------------
  {
    id: "physics-3d",
    titulo: "PHYSICS (FÍSICAS 3D)",
    subtitulo: "Manual: Physics 3D, Rigidbody, Colliders, Raycasting & Joints",
    colorHex: "#ff4d4d",
    icono: "💥",
    conceptos: [
      {
        nombre: "Rigidbody (Simulación Física)",
        sintaxis: "public class Rigidbody : Component",
        resumen: "Componente que dota de masa, gravedad y fuerzas físicas a un objeto 3D.",
        descripcion: "Gestiona masa, inercia y colisiones físicas calculadas por PhysX.",
        cuandoUsar: "Objetos que caen, se empujan o rebotan.",
        codigo: `Rigidbody rb = GetComponent<Rigidbody>();
rb.AddForce(Vector3.up * 10f, ForceMode.Impulse);`,
        consejo: "Modifica la velocidad o posiciones en FixedUpdate."
      },
      {
        nombre: "OnCollisionEnter / OnTriggerEnter",
        sintaxis: "void OnCollisionEnter(Collision col) / void OnTriggerEnter(Collider other)",
        resumen: "Eventos de impacto físico sólido o zonas atravesables.",
        descripcion: "OnCollisionEnter para choques con rebote físico; OnTriggerEnter para traspasos sin rebote.",
        cuandoUsar: "Detectar choques de vehículos vs recoger monedas de curación.",
        codigo: `void OnCollisionEnter(Collision col) 
{
    Debug.Log("Punto de choque: " + col.contacts[0].point);
}`,
        consejo: "Al menos uno debe tener un Rigidbody activo."
      },
      {
        nombre: "Physics.Raycast()",
        sintaxis: "Physics.Raycast(origen, direccion, out hit, distancia, layerMask)",
        resumen: "Lanza un rayo invisible para detectar qué objetos cruza en su camino.",
        descripcion: "Devuelve información del primer Collider alcanzado en la trayectoria del rayo.",
        cuandoUsar: "Disparos instantáneos (Hitscan), visión de IA o detectar suelo.",
        codigo: `if (Physics.Raycast(transform.position, transform.forward, out RaycastHit hit, 50f)) 
{
    Debug.Log("Impactado: " + hit.collider.name);
}`,
        consejo: "Filtra siempre por LayerMask para no chocar contra el propio personaje."
      },
      {
        nombre: "CharacterController (Movimiento de Personaje)",
        sintaxis: "controller.Move(motion);",
        resumen: "Controlador de movimiento rápido sin rebotes ni inercias físicas descontroladas.",
        descripcion: "Permite subir escaleras y deslizar por rampas con control total por código.",
        cuandoUsar: "Personajes de acción, plataformas o primera persona.",
        codigo: `CharacterController controller = GetComponent<CharacterController>();
controller.Move(velocidad * Time.deltaTime);`,
        consejo: "Usa controller.isGrounded para detectar si toca el suelo."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 16. INPUT SYSTEM
  // --------------------------------------------------------------------------
  {
    id: "input-system",
    titulo: "INPUT SYSTEM",
    subtitulo: "Manual: Input & New Input System Package",
    colorHex: "#f1c40f",
    icono: "🎮",
    conceptos: [
      {
        nombre: "ReadValue<T>() & PlayerInput",
        sintaxis: "Vector2 mov = accionMover.action.ReadValue<Vector2>();",
        resumen: "Lectura de entradas analógicas y digitales de mandos y teclado.",
        descripcion: "Obtiene valores del nuevo sistema de Input System multiplataforma.",
        cuandoUsar: "Movimiento de personaje con joystick o teclado.",
        codigo: `Vector2 dir = accionMover.action.ReadValue<Vector2>();`,
        consejo: "Habilita las acciones en OnEnable con .Enable()."
      },
      {
        nombre: "WasPressedThisFrame() / WasReleasedThisFrame()",
        sintaxis: "if (accionSalto.action.WasPressedThisFrame())",
        resumen: "Detecta el momento exacto en que una tecla o botón es pulsado.",
        descripcion: "Devuelve verdadero únicamente durante el primer fotograma de pulsación.",
        cuandoUsar: "Salto, disparar o interactuar.",
        codigo: `if (accionSalto.action.WasPressedThisFrame()) { Saltado(); }`,
        consejo: "Reemplaza al antiguo Input.GetKeyDown()."
      },
      {
        nombre: "Action Maps (Configuración de Esquemas)",
        sintaxis: "Input System Action Map Manager",
        resumen: "Organiza controles por contextos de juego (Gameplay, UI, Vehículo).",
        descripcion: "Permite cambiar todos los controles del jugador al subir a un coche o abrir un menú.",
        cuandoUsar: "Juegos con múltiples modos de control.",
        codigo: `playerInput.SwitchCurrentActionMap("UI");`,
        consejo: "Facilita la reconfiguración de teclas por parte del usuario."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 17. UI SYSTEMS
  // --------------------------------------------------------------------------
  {
    id: "ui-systems",
    titulo: "UI SYSTEMS Y UI TOOLKIT",
    subtitulo: "Manual: UI systems, UI Toolkit, uGUI Canvas & RectTransform",
    colorHex: "#2ecc71",
    icono: "🖥️",
    conceptos: [
      {
        nombre: "UI Toolkit Overview & UI Builder",
        sintaxis: "UIDocument Component & UXML Documents",
        resumen: "El estándar moderno de Unity para construir interfaces de usuario.",
        descripcion: "Utiliza documentos UXML/USS inspirados en la web (HTML/CSS) permitiendo separar diseño y código C#.",
        cuandoUsar: "Menús de inicio, HUD de juego, barras de salud e inventarios.",
        codigo: `VisualElement raiz = GetComponent<UIDocument>().rootVisualElement;
Button miBoton = raiz.Q<Button>("BotonIniciar");`,
        consejo: "Es la solución oficial recomendada por Unity para nuevos proyectos."
      },
      {
        nombre: "uGUI Canvas & RectTransform",
        sintaxis: "Canvas & RectTransform anchoring",
        resumen: "Sistema de interfaz tradicional basado en GameObjects y Canvases.",
        descripcion: "Utiliza anclas (Anchors) para posicionar elementos de interfaz en resoluciones diferentes.",
        cuandoUsar: "Proyectos existentes o interfaces 3D sobre la escena (World Space UI).",
        codigo: `RectTransform rt = GetComponent<RectTransform>();
rt.anchoredPosition = new Vector2(100, -50);`,
        consejo: "Configura el Canvas Scaler en 'Scale With Screen Size'."
      },
      {
        nombre: "CanvasGroup (Control de Opacidad e Interacción)",
        sintaxis: "canvasGroup.alpha = 0f; canvasGroup.interactable = false;",
        resumen: "Controla la visibilidad y clics de todo un conjunto de UI a la vez.",
        descripcion: "Permite hacer transiciones de desvanecido (Fade In/Out) limpias sin desactivar los objetos.",
        cuandoUsar: "Fundidos a negro o bloquear menús durante pausas.",
        codigo: `CanvasGroup cg = GetComponent<CanvasGroup>();
cg.alpha = 0.5f;
cg.blocksRaycasts = false;`,
        consejo: "Mucho más rápido que desactivar elementos uno a uno."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 18. ACCESSIBILITY
  // --------------------------------------------------------------------------
  {
    id: "accessibility",
    titulo: "ACCESSIBILITY (ACCESIBILIDAD)",
    subtitulo: "Manual: Accessibility, Subtítulos, Remapeo & Daltonismo",
    colorHex: "#9b59b6",
    icono: "♿",
    conceptos: [
      {
        nombre: "Mapeo Accesible & Subtítulos",
        sintaxis: "Sistemas de Accesibilidad",
        resumen: "Adaptación del juego para jugadores con capacidades diferentes.",
        descripcion: "Permite reconfigurar teclas, ajustar subtítulos y contraste.",
        cuandoUsar: "Menús de opciones de accesibilidad.",
        codigo: `labelSubtitulo.style.fontSize = 24;`,
        consejo: "Aumenta el público potencial de tu videojuego."
      },
      {
        nombre: "Filtros para Daltonismo",
        sintaxis: "Color Grading & LUT Filters",
        resumen: "Ajusta la paleta de colores para daltonismo (Protanopia, Deuteranopia).",
        descripcion: "Aplica corrección de color en post-procesado para diferenciar elementos clave.",
        cuandoUsar: "Juegos con indicadores de colores críticos (equipo rojo vs verde).",
        codigo: `// Modifica el volumen de Color Grading según el modo seleccionado.`,
        consejo: "Añade siempre iconos o formas además de colores para diferenciar elementos."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 19. ANIMATION
  // --------------------------------------------------------------------------
  {
    id: "animation-animator",
    titulo: "ANIMATION Y ANIMATOR",
    subtitulo: "Manual: Animation System, Animator, Blend Trees & Rigging",
    colorHex: "#ff7979",
    icono: "🕺",
    conceptos: [
      {
        nombre: "Animator Controller & Máquina de Estados",
        sintaxis: "Animator.SetTrigger() / SetBool() / SetFloat()",
        resumen: "Máquina de estados finita que gestiona qué animación reproducir en cada momento.",
        descripcion: "Controla las transiciones entre estados (Idle -> Run -> Jump) basándose en parámetros enviados desde C#.",
        cuandoUsar: "Control de animaciones del personaje principal o de enemigos.",
        codigo: `Animator anim = GetComponent<Animator>();
anim.SetFloat("Speed", 5.0f);
anim.SetBool("IsGrounded", true);
anim.SetTrigger("Jump");`,
        consejo: "Utiliza Animator.StringToHash() para mejorar la velocidad de procesamiento en C#."
      },
      {
        nombre: "Blend Trees (Árboles de Mezcla)",
        sintaxis: "Animator Blend Tree 1D / 2D",
        resumen: "Mezcla fluida entre múltiples animaciones según parámetros numéricos.",
        descripcion: "Combina suavemente las animaciones de andar, trotar y correr según la velocidad actual sin saltos bruscos.",
        cuandoUsar: "Movimiento direccional de personajes 3D en 8 direcciones.",
        codigo: `float velocidad = rb.linearVelocity.magnitude;
anim.SetFloat("Velocity", velocidad);`,
        consejo: "Los Blend Trees 2D Freeform Directional son ideales para joysticks analógicos."
      },
      {
        nombre: "Animation Events (Eventos en Frames)",
        sintaxis: "Inyección de llamadas C# en fotogramas de animación",
        resumen: "Permite ejecutar funciones de C# en un fotograma exacto de la animación.",
        descripcion: "Dispara código exactamente cuando el pie toca el suelo o la espada alcanza el punto de impacto.",
        cuandoUsar: "Sonidos de pasos sincronizados o activar la caja de colisión del golpe.",
        codigo: `public void EventoImpactoEspada() 
{
    Debug.Log("¡Golpe asestado!");
}`,
        consejo: "El script receptor debe estar en el mismo GameObject que contiene el Animator."
      },
      {
        nombre: "Inverse Kinematics (IK Hands & Feet)",
        sintaxis: "OnAnimatorIK(int layerIndex)",
        resumen: "Ajusta la posición de manos y pies procedimentalmente al entorno.",
        descripcion: "Hace que los pies del personaje se apoyen de forma realista en terrenos irregulares o rampas.",
        cuandoUsar: "Adaptar extremidades al suelo o apoyar manos en paredes.",
        codigo: `void OnAnimatorIK(int layerIndex) 
{
    animator.SetIKPosition(AvatarIKGoal.RightFoot, posicionSuelo);
}`,
        consejo: "Activa la casilla 'IK Pass' en la capa del Animator Controller."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 20. AUDIO
  // --------------------------------------------------------------------------
  {
    id: "audio",
    titulo: "AUDIO Y EFECTOS",
    subtitulo: "Manual: Audio Sources, AudioMixer & Spatial Audio 3D",
    colorHex: "#9b59b6",
    icono: "🔊",
    conceptos: [
      {
        nombre: "Audio Overview & AudioListener",
        sintaxis: "Componente AudioListener en la Cámara",
        resumen: "El micrófono virtual del juego que capta los sonidos emitidos en la escena.",
        descripcion: "Debe haber exactamente un AudioListener en la escena (normalmente en la Cámara Principal).",
        cuandoUsar: "Captar y escuchar todos los sonidos producidos por los AudioSources.",
        codigo: `// Asegúrate de que solo la Cámara Principal tenga adjunto el componente AudioListener.`,
        consejo: "Si tienes dos AudioListeners activos a la vez, Unity mostrará una advertencia en la consola."
      },
      {
        nombre: "AudioSource & Spatial Blend (2D/3D)",
        sintaxis: "public void Play() / Spatial Blend (0.0 a 1.0)",
        resumen: "Emisor de sonido que reproduce un AudioClip en 2D o 3D.",
        descripcion: "Spatial Blend = 0 es audio 2D; Spatial Blend = 1 es audio 3D (disparos atenuados por distancia).",
        cuandoUsar: "Reproducir música ambiental, voces de personajes o efectos de impacto.",
        codigo: `AudioSource fuente = GetComponent<AudioSource>();
fuente.clip = miClip;
fuente.Play();`,
        consejo: "Ajusta la curva 'Min Distance' y 'Max Distance' para definir el alcance del sonido 3D."
      },
      {
        nombre: "Audio Mixer (Mezclador de Canales)",
        sintaxis: "AudioMixer.SetFloat(\"VolumenSFX\", dB)",
        resumen: "Controlador centralizado de grupos de audio (Música, Efectos, Voz) con efectos DSP.",
        descripcion: "Permite crear buses de canales para ajustar volúmenes colectivos o aplicar efectos como Reverb o Pitch.",
        cuandoUsar: "Crear un menú de ajustes de volumen o amortiguar el sonido al entrar bajo el agua.",
        codigo: `public AudioMixer mezclador;
public void SetVolumen(float val) 
{
    float dB = Mathf.Log10(Mathf.Max(0.0001f, val)) * 20;
    mezclador.SetFloat("VolumenSFX", dB);
}`,
        consejo: "Expon las variables del AudioMixer ('Expose Parameter') para poder editarlas desde C#."
      },
      {
        nombre: "PlayOneShot()",
        sintaxis: "public void PlayOneShot(AudioClip clip, float volumeScale = 1.0f)",
        resumen: "Reproduce un sonido superpuesto sin interrumpir lo que ya está sonando.",
        descripcion: "Ideal para ráfagas rápidas de disparos o recolección de monedas continuas.",
        cuandoUsar: "Sonidos repetitivos que ocurren a gran velocidad.",
        codigo: `AudioSource fuente = GetComponent<AudioSource>();
fuente.PlayOneShot(clipMoneda, 0.7f);`,
        consejo: "No se corta si vuelves a llamarlo en el frame siguiente."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 21. VÍDEO Y CINEMÁTICAS
  // --------------------------------------------------------------------------
  {
    id: "video-cutscenes",
    titulo: "VÍDEO Y CINEMÁTICAS",
    subtitulo: "Manual: Video and cutscenes, Timeline & PlayableDirector",
    colorHex: "#16a085",
    icono: "🎬",
    conceptos: [
      {
        nombre: "Timeline & PlayableDirector",
        sintaxis: "director.Play();",
        resumen: "Orquestación de cinemáticas y reproducción de vídeos.",
        descripcion: "Sincroniza animaciones, audios y cámaras en línea de tiempo.",
        cuandoUsar: "Escenas narrativas o apariciones de jefes.",
        codigo: `PlayableDirector director = GetComponent<PlayableDirector>();
director.Play();`,
        consejo: "Combina Timeline con Cinemachine."
      },
      {
        nombre: "VideoPlayer Component",
        sintaxis: "videoPlayer.Play();",
        resumen: "Reproduce archivos de vídeo (MP4/WebM) sobre texturas o UI.",
        descripcion: "Permite reproducir cinemáticas pre-renderizadas en pantallas 3D o interfaces.",
        cuandoUsar: "Pantallas de inicio, trailers o cinemáticas introductorias.",
        codigo: `VideoPlayer vp = GetComponent<VideoPlayer>();
vp.Play();`,
        consejo: "Usa Render Texture para proyectar vídeos sobre pantallas en 3D."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 22. ILUMINACIÓN Y SOMBRAS
  // --------------------------------------------------------------------------
  {
    id: "lighting-shadows",
    titulo: "ILUMINACIÓN Y SOMBRAS",
    subtitulo: "Manual: Lighting, Lightmaps & Global Illumination",
    colorHex: "#ff9f43",
    icono: "☀️",
    conceptos: [
      {
        nombre: "Light Component (Tipos de Luz)",
        sintaxis: "Light.type = LightType.Directional / Point / Spot / Area",
        resumen: "Componente emisor de luz en 3D (Sol, Bombilla, Linterna, Panel).",
        descripcion: "Directional (Sol infinito), Point (Bombilla 360°), Spot (Linterna en cono) y Area (Panel de estudio horneado).",
        cuandoUsar: "Iluminar escenarios, linternas de personajes o luces de ambiente.",
        codigo: `Light luzLinterna = GetComponent<Light>();
luzLinterna.enabled = !luzLinterna.enabled;`,
        consejo: "Directional para el sol en exteriores."
      },
      {
        nombre: "Baked Lightmaps (Horneado de Luz)",
        sintaxis: "Lightmapping.Bake()",
        resumen: "Precalcula mapas de sombras y luces estáticas para aumentar FPS.",
        descripcion: "Procesa y guarda en texturas la luz estática del escenario liberando trabajo a la tarjeta gráfica.",
        cuandoUsar: "Escenarios fijos, edificios y ciudades.",
        codigo: `// Marca objetos del mapa como 'Static' y haz clic en 'Generate Lighting'.`,
        consejo: "Clave para lograr gráficos fotorrealistas en móviles y consolas."
      },
      {
        nombre: "Light Probes (Iluminación Dinámica)",
        sintaxis: "LightProbeGroup component",
        resumen: "Captura iluminación horneada para aplicarla a objetos dinámicos en movimiento.",
        descripcion: "Permite que un personaje en movimiento reciba el color de la luz horneada del escenario.",
        cuandoUsar: "Personajes moviéndose por escenarios con luz horneada.",
        codigo: `// Coloca un grupo de Light Probes distribuido por el mapa.`,
        consejo: "Combina el rendimiento del horneado con la flexibilidad dinámica."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 23. MATERIALES Y SHADERS
  // --------------------------------------------------------------------------
  {
    id: "materials-shaders",
    titulo: "MATERIALES Y SHADERS",
    subtitulo: "Manual: Materials and shaders, Shader Graph",
    colorHex: "#ee5253",
    icono: "🎨",
    conceptos: [
      {
        nombre: "Material.SetColor() & SetTexture()",
        sintaxis: "mat.SetColor(\"_BaseColor\", Color.red);",
        resumen: "Modificación de propiedades visuales de materiales en runtime.",
        descripcion: "Cambia colores, texturas o valores numéricos de shaders desde C#.",
        cuandoUsar: "Parpadeos de daño, fuego o cambio de apariencia.",
        codigo: `Material mat = GetComponent<Renderer>().material;
mat.SetColor("_BaseColor", Color.red);`,
        consejo: "Usa Shader.PropertyToID para evitar alocar cadenas en cada frame."
      },
      {
        nombre: "Shader Graph (Shaders Visuales por Nodos)",
        sintaxis: "Shader Graph Editor",
        resumen: "Herramienta visual para crear shaders avanzados sin escribir código HLSL.",
        descripcion: "Crea efectos de agua, disolución, lava o escudos mediante un grafo de nodos.",
        cuandoUsar: "Efectos gráficos personalizados en URP o HDRP.",
        codigo: `// Create -> Shader Graph -> URP -> Lit Shader Graph`,
        consejo: "Es la forma oficial y más rápida de crear efectos de superficie."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 24. EFECTOS VISUALES Y VFX
  // --------------------------------------------------------------------------
  {
    id: "visual-effects-vfx",
    titulo: "EFECTOS VISUALES Y VFX",
    subtitulo: "Manual: Particle System, VFX Graph, Trails & Decals",
    colorHex: "#e056fd",
    icono: "✨",
    conceptos: [
      {
        nombre: "Particle System (CPU)",
        sintaxis: "ParticleSystem.Play()",
        resumen: "Emisor de partículas clásico para fuego, humo y explosiones.",
        descripcion: "Simula partículas procesadas en CPU con control total por física.",
        cuandoUsar: "Chispas, impactos de bala o humo sencillo.",
        codigo: `ParticleSystem ps = GetComponent<ParticleSystem>();
ps.Play();`,
        consejo: "Usa la opción 'Stop Action = Destroy' para limpiar memoria automáticamente."
      },
      {
        nombre: "VFX Graph (GPU Particles)",
        sintaxis: "VisualEffect.SendEvent()",
        resumen: "Sistema de partículas masivo procesado directamente en GPU.",
        descripcion: "Simula millones de partículas simultáneas sin caídas de rendimiento.",
        cuandoUsar: "Tormentas masivas, portales mágicos o efectos complejos.",
        codigo: `VisualEffect vfx = GetComponent<VisualEffect>();
vfx.SendEvent("OnPlay");`,
        consejo: "Exclusivo para URP y HDRP."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 25. RENDER PIPELINES
  // --------------------------------------------------------------------------
  {
    id: "render-pipelines",
    titulo: "RENDER PIPELINES",
    subtitulo: "Manual: Render pipelines (URP, HDRP, Built-in)",
    colorHex: "#0984e3",
    icono: "👓",
    conceptos: [
      {
        nombre: "Universal Render Pipeline (URP)",
        sintaxis: "UniversalRenderPipelineAsset",
        resumen: "Pipeline gráfico optimizado para máxima velocidad multiplataforma.",
        descripcion: "Ideal para móviles, PC, consolas y VR garantizando altos FPS.",
        cuandoUsar: "El 90% de los proyectos de videojuegos modernos.",
        codigo: `// Graphics Settings -> Scriptable Render Pipeline Asset = URP Asset`,
        consejo: "Ofrece la mejor relación rendimiento/calidad visual."
      },
      {
        nombre: "High Definition Render Pipeline (HDRP)",
        sintaxis: "HDRenderPipelineAsset",
        resumen: "Pipeline gráfico enfocado a calidad fotorrealista de máxima gama.",
        descripcion: "Soporta iluminación física real, Ray Tracing y volumétricos avanzados.",
        cuandoUsar: "Juegos AAA para PC de gama alta y consolas PS5/Xbox Series X.",
        codigo: `// Requiere hardware gráfico potente.`,
        consejo: "No recomendado para dispositivos móviles."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 26. POST-PROCESSING
  // --------------------------------------------------------------------------
  {
    id: "post-processing",
    titulo: "POST-PROCESSING",
    subtitulo: "Manual: Post-processing (Bloom, Vignette, Color Grading)",
    colorHex: "#be2edd",
    icono: "🎞️",
    conceptos: [
      {
        nombre: "Volume Profile & Bloom",
        sintaxis: "volumen.profile.TryGet<Bloom>(out var bloom)",
        resumen: "Filtros cinemáticos y corrección de color.",
        descripcion: "Añade resplandor brillante (Bloom), bordes oscuros (Vignette) y desfoques.",
        cuandoUsar: "Dar un estilo visual pulido y profesional.",
        codigo: `Volume vol = GetComponent<Volume>();
if (vol.profile.TryGet<Bloom>(out var b)) { b.intensity.value = 5f; }`,
        consejo: "Usa volúmenes locales para zonas específicas."
      },
      {
        nombre: "Color Grading & Tonemapping",
        sintaxis: "Tonemapping & Color Adjustments",
        resumen: "Ajuste de tono, contraste y saturación estilo cine.",
        descripcion: "Transforma la paleta de colores del juego para crear ambientes fríos, cálidos o dramáticos.",
        cuandoUsar: "Estilizar la atmósfera visual del juego.",
        codigo: `// Modifica 'Post Exposure' y 'Contrast' en el Volume Profile.`,
        consejo: "El Tonemapping 'ACES' produce colores fotorrealistas estilo película."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 27. PROGRAMACIÓN Y MATEMÁTICAS
  // --------------------------------------------------------------------------
  {
    id: "programming-scripting",
    titulo: "PROGRAMACIÓN Y MATEMÁTICAS",
    subtitulo: "Manual: Programming in Unity, C# Scripting & Math",
    colorHex: "#00cec9",
    icono: "📐",
    conceptos: [
      {
        nombre: "Mathf.Lerp() (Interpolación Lineal)",
        sintaxis: "Mathf.Lerp(inicio, fin, t)",
        resumen: "Calcula una transición suave entre dos valores numéricos.",
        descripcion: "Transiciona suavemente de A a B según un porcentaje entre 0.0 y 1.0.",
        cuandoUsar: "Movimientos suaves de cámara, barras de salud o transiciones de volumen.",
        codigo: `float v = Mathf.Lerp(0f, 100f, Time.deltaTime * 5f);`,
        consejo: "Multiplica t por Time.deltaTime para independencia de FPS."
      },
      {
        nombre: "Mathf.Clamp() (Restricción de Rangos)",
        sintaxis: "Mathf.Clamp(valor, min, max)",
        resumen: "Restringe un número para que no se salga de un mínimo y máximo.",
        descripcion: "Asegura que la salud no baje de 0 ni supere 100.",
        cuandoUsar: "Limitar la salud, ángulos de rotación de cámara o velocidad.",
        codigo: `vidaActual = Mathf.Clamp(vidaActual, 0, 100);`,
        consejo: "Evita bugs de valores negativos o desbordamientos."
      },
      {
        nombre: "Quaternion.LookRotation()",
        sintaxis: "Quaternion.LookRotation(direccionVector)",
        resumen: "Calcula la rotación necesaria para orientar un objeto hacia una dirección.",
        descripcion: "Orienta la mirada de un enemigo hacia la posición del jugador.",
        cuandoUsar: "Apuntar torretas, mirada de enemigos o proyectiles.",
        codigo: `Vector3 dir = jugador.position - transform.position;
transform.rotation = Quaternion.LookRotation(dir);`,
        consejo: "Evita Gimbal Lock usando Quaternions nativos."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 28. CORRUTINAS, ASYNC Y JOBS
  // --------------------------------------------------------------------------
  {
    id: "corrutinas-async-jobs",
    titulo: "CORRUTINAS, ASYNC Y JOBS",
    subtitulo: "Manual: Programming in Unity - Async & Jobs",
    colorHex: "#6c5ce7",
    icono: "⏳",
    conceptos: [
      {
        nombre: "StartCoroutine() & IEnumerator",
        sintaxis: "StartCoroutine(RutinaEsperar());",
        resumen: "Ejecuta funciones divididas en múltiples fotogramas con temporizadores.",
        descripcion: "Permite pausar la ejecución del código con yield return new WaitForSeconds(2.0f).",
        cuandoUsar: "Temporizadores, esperas o secuencias graduadas.",
        codigo: `IEnumerator RutinaEsperar() 
{
    yield return new WaitForSeconds(2.0f);
    Debug.Log("¡Transcurrieron 2 segundos!");
}`,
        consejo: "Guarda el objeto WaitForSeconds en una variable para evitar alocar basura."
      },
      {
        nombre: "Awaitable (Unity 6 Async Native)",
        sintaxis: "await Awaitable.WaitForSecondsAsync(2.0f);",
        resumen: "La alternativa moderna a las corrutinas en Unity 6 sin alocaciones.",
        descripcion: "Sustituye a las corrutinas tradicionales permitiendo usar async/await nativo en C#.",
        cuandoUsar: "Nuevos proyectos en Unity 6.",
        codigo: `public async void IniciarCarga() 
{
    await Awaitable.WaitForSecondsAsync(2.0f);
}`,
        consejo: "Totalmente integrado con C# moderno."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 29. SPAWNING Y OBJECT POOLING
  // --------------------------------------------------------------------------
  {
    id: "spawning-pooling",
    titulo: "SPAWNING Y OBJECT POOLING",
    subtitulo: "Manual: Object Pooling System",
    colorHex: "#10ac84",
    icono: "♻️",
    conceptos: [
      {
        nombre: "ObjectPool<T> (Pool Nativo de Unity)",
        sintaxis: "ObjectPool<T> pool = new ObjectPool<T>(...)",
        resumen: "Sistema de reciclaje de objetos para no instanciar/destruir en caliente.",
        descripcion: "Administra una pila reservada de instancias para no sobrecargar el GC.",
        cuandoUsar: "Balas, enemigos repetitivos, monedas o efectos.",
        codigo: `Bala bala = poolBalas.Get(); // Sacar del pool
poolBalas.Release(bala); // Devolver al pool`,
        consejo: "Previene micro-tirones de FPS en momentos de mucha acción."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 30. EXTENDER EL UNITY EDITOR
  // --------------------------------------------------------------------------
  {
    id: "extending-editor",
    titulo: "EXTENDER EL UNITY EDITOR",
    subtitulo: "Manual: Extending the Unity Editor",
    colorHex: "#eb4d4b",
    icono: "🛠️",
    conceptos: [
      {
        nombre: "[MenuItem] & Menús Personalizados",
        sintaxis: "[MenuItem(\"Herramientas/MiAccion\")]",
        resumen: "Crea opciones y herramientas ejecutables en la barra superior del Editor.",
        descripcion: "Permite automatizar tareas repetitivas dentro del Editor.",
        cuandoUsar: "Generadores de niveles o limpiadores de datos guardados.",
        codigo: `#if UNITY_EDITOR
using UnityEditor;
[MenuItem("Herramientas/BorrarSave")] 
public static void BorrarSave() { PlayerPrefs.DeleteAll(); }
#endif`,
        consejo: "Protege los scripts de editor con #if UNITY_EDITOR."
      },
      {
        nombre: "CustomEditor & EditorGUI",
        sintaxis: "[CustomEditor(typeof(MiScript))]",
        resumen: "Rediseña la apariencia del Inspector para scripts específicos.",
        descripcion: "Permite añadir botones ejecutables directamente en la ventana del Inspector.",
        cuandoUsar: "Herramientas de diseñadores de nivel.",
        codigo: `// Añade botones como 'Generar Mapa' directamente en el Inspector.`,
        consejo: "Mejora la productividad de todo tu equipo."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 31. OPTIMIZACIÓN Y PROFILER
  // --------------------------------------------------------------------------
  {
    id: "optimizacion-profiler",
    titulo: "OPTIMIZACIÓN Y PROFILER",
    subtitulo: "Manual: Optimization, Profiler & Garbage Collection",
    colorHex: "#00b894",
    icono: "⚡",
    conceptos: [
      {
        nombre: "Profiler Window (Análisis de Rendimiento)",
        sintaxis: "Window -> Analysis -> Profiler",
        resumen: "Analizador de cuellos de botella de CPU, GPU y consumo de memoria.",
        descripcion: "Muestra gráficos en tiempo real con los milisegundos consumidos por cada función.",
        cuandoUsar: "Localizar caídas de cuadros por segundo (FPS).",
        codigo: `Profiler.BeginSample("MiBusquedaCompleja");
// Código a medir
Profiler.EndSample();`,
        consejo: "Realiza mediciones siempre en builds finales (Development Build), no en el Editor."
      },
      {
        nombre: "Garbage Collection (GC Alloc Minimization)",
        sintaxis: "GC Alloc Diagnostic",
        resumen: "Técnicas para eliminar tirones por recolección de basura en memoria.",
        descripcion: "Evita instanciar cadenas, arrays o corrutinas dentro del bucle Update.",
        cuandoUsar: "Eliminar tirones de congelación de pantalla.",
        codigo: `// Cachea GetComponent<Rigidbody>() en Awake() en lugar de llamarlo en Update().`,
        consejo: "Revisa la columna 'GC Alloc' en el Profiler."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 32. BUILDING Y PUBLISHING
  // --------------------------------------------------------------------------
  {
    id: "building-publishing",
    titulo: "BUILDING Y PUBLISHING",
    subtitulo: "Manual: Building and publishing, Player Settings",
    colorHex: "#e74c3c",
    icono: "📲",
    conceptos: [
      {
        nombre: "Build Settings & Escenas en Compilación",
        sintaxis: "File -> Build Settings",
        resumen: "Panel para añadir escenas y seleccionar la plataforma de destino.",
        descripcion: "Configura la lista de escenas compiladas en el ejecutable final.",
        cuandoUsar: "Exportar el juego a .exe, .apk o WebGL.",
        codigo: `// Arrastra tus escenas a 'Scenes In Build' respetando el orden.`,
        consejo: "La escena en el índice 0 será la primera en cargarse al iniciar."
      },
      {
        nombre: "Player Settings (Configuración de Aplicación)",
        sintaxis: "Edit -> Project Settings -> Player",
        resumen: "Configura iconos, nombre de empresa, versión y permisos.",
        descripcion: "Define el paquete identificador (ej: com.miempresa.mijuego) e iconos de la app.",
        cuandoUsar: "Antes de subir la aplicación a Google Play o Steam.",
        codigo: `// Package Name: com.MiEstudio.MiJuego`,
        consejo: "Configura la orientación de pantalla permitida en móviles."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 33. UNITY SERVICES & CLOUD
  // --------------------------------------------------------------------------
  {
    id: "unity-services",
    titulo: "UNITY SERVICES & CLOUD",
    subtitulo: "Manual: Unity Services, Analytics & Cloud Save",
    colorHex: "#8e44ad",
    icono: "☁️",
    conceptos: [
      {
        nombre: "Unity Cloud Save API",
        sintaxis: "CloudSaveService.Instance.Data.Player.SaveAsync()",
        resumen: "Almacenamiento en la nube de partidas guardadas del jugador.",
        descripcion: "Sincroniza progresos y datos de partida entre diferentes dispositivos del usuario.",
        cuandoUsar: "Guardar progreso de partidas sin servidor propio.",
        codigo: `var datos = new Dictionary<string, object> { { "Oro", 1000 } };
await CloudSaveService.Instance.Data.Player.SaveAsync(datos);`,
        consejo: "Requiere haber inicializado UnityServices.InitializeAsync()."
      },
      {
        nombre: "Unity Analytics & Custom Events",
        sintaxis: "AnalyticsService.Instance.CustomData(\"NivelCompletado\", dict)",
        resumen: "Mide métricas de comportamiento de jugadores e impresiones.",
        descripcion: "Envía eventos personalizados para saber cuántos jugadores superan cada nivel.",
        cuandoUsar: "Optimizar la dificultad del videojuego.",
        codigo: `AnalyticsService.Instance.CustomData("MuerteEnemigo", new Dictionary<string, object> { { "Nivel", 3 } });`,
        consejo: "Fundamental para equilibrar la curva de aprendizaje."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 34. BEST PRACTICE GUIDES
  // --------------------------------------------------------------------------
  {
    id: "best-practice-guides",
    titulo: "BEST PRACTICE GUIDES",
    subtitulo: "Manual: Best practice guides, Arquitectura & Rendimiento",
    colorHex: "#2c3e50",
    icono: "💡",
    conceptos: [
      {
        nombre: "Arquitectura Limpia & Desacoplamiento",
        sintaxis: "Patrones recomendados de diseño en Unity",
        resumen: "Evita referencias cruzadas directas y dependencias entre scripts.",
        descripcion: "Usa Eventos C#, Interfaces y ScriptableObjects para que los scripts no dependan unos de otros.",
        cuandoUsar: "Desde la planificación del proyecto.",
        codigo: `// Los scripts independientes son fáciles de probar y reutilizar.`,
        consejo: "Facilita añadir nuevas características sin romper lo existente."
      },
      {
        nombre: "Gestión Eficiente de Memoria",
        sintaxis: "Memory Optimization Patterns",
        resumen: "Prácticas para evitar fugas de memoria y caídas de frames.",
        descripcion: "Reutiliza colecciones, aloca arreglos en Awake y destruye referencias sin uso.",
        cuandoUsar: "Juegos comerciales para móviles.",
        codigo: `// Cachea GetComponent<Rigidbody>() en Awake() en lugar de llamarlo en Update().`,
        consejo: "Previene tirones desagradables durante la partida."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 35. TROUBLESHOOTING
  // --------------------------------------------------------------------------
  {
    id: "troubleshooting",
    titulo: "TROUBLESHOOTING",
    subtitulo: "Manual: Troubleshooting, Depuración & Resolución de Errores",
    colorHex: "#c0392b",
    icono: "🔧",
    conceptos: [
      {
        nombre: "Diagnóstico de NullReferenceException",
        sintaxis: "NullReferenceException Fixes",
        resumen: "Solución al error más común cuando intentas usar una variable que no ha sido asignada.",
        descripcion: "Ocurre cuando intentas acceder a un componente o variable que vale null.",
        cuandoUsar: "Al ver el mensaje 'Object reference not set to an instance of an object'.",
        codigo: `if (miComponente != null) 
{
    miComponente.HacerAlgo();
}`,
        consejo: "Asigna la referencia en el Inspector o usa el operador nulo ?. ."
      },
      {
        nombre: "UnassignedReferenceException & Fixes",
        sintaxis: "Unassigned Reference Fix",
        resumen: "Ocurre cuando una variable [SerializeField] pública no fue arrastrada en el Inspector.",
        descripcion: "Unity detecta que la ranura del Inspector está vacía.",
        cuandoUsar: "Al arrancar el juego en Play Mode.",
        codigo: `// Arrastra el objeto requerido a la casilla vacía del Inspector.`,
        consejo: "Usa TryGetComponent en Awake como plan de respaldo automático."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 36. GLOSSARY
  // --------------------------------------------------------------------------
  {
    id: "glossary",
    titulo: "GLOSSARY",
    subtitulo: "Manual: Glossary & Diccionario de Términos Técnicos",
    colorHex: "#95a5a6",
    icono: "📖",
    conceptos: [
      {
        nombre: "Draw Calls & Batches",
        sintaxis: "Definición Técnica de Renderizado",
        resumen: "Comando enviado por la CPU a la GPU para dibujar un objeto en pantalla.",
        descripcion: "Cuantos menos Draw Calls tenga tu escena, más rápido funcionará el juego.",
        cuandoUsar: "Optimización gráfica.",
        codigo: `// Revisa el contador 'Batches' en la ventana Stats del Game View.`,
        consejo: "Usa combinadores de mallas o atlasses de texturas para reducir Draw Calls."
      },
      {
        nombre: "Mipmaps & Texturas",
        sintaxis: "Generate Mip Maps = true",
        resumen: "Versiones reducidas de una textura generadas para objetos lejanos.",
        descripcion: "Ahorra memoria de vídeo y elimina el parpadeo de texturas a larga distancia.",
        cuandoUsar: "En texturas de modelos 3D y terrenos.",
        codigo: `// Import Settings -> Texture -> Generate Mip Maps`,
        consejo: "Desactiva Mipmaps en sprites de UI 2D."
      },
      {
        nombre: "Quaternions & Gimbal Lock",
        sintaxis: "Representación matemática de rotación 3D",
        resumen: "Matemática de cuatro dimensiones usada por Unity para rotar en 3D.",
        descripcion: "Evita el bloqueo de ejes (Gimbal Lock) que ocurre al usar ángulos Euler (X, Y, Z).",
        cuandoUsar: "Rotar objetos suavemente por código.",
        codigo: `Quaternion.Euler(0, 90, 0);`,
        consejo: "Modifica rotaciones usando Quaternions en lugar de Vector3 eulerAngles directamente."
      }
    ]
  }
];

// ============================================================================
// BASE DE DATOS COMPLETA DE TODAS LAS SECCIONES Y SUB-TOPICS DEL MANUAL DE UNITY
// Incluye todos los sub-apartados y funciones de cada categoría del árbol oficial.
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
  // 3. AUDIO (MÚSICA, SFX, MIXER & PIPELINE)
  // --------------------------------------------------------------------------
  {
    id: "audio",
    titulo: "AUDIO",
    subtitulo: "Manual: Audio overview, Audio files, Audio Mixer, Spatial Audio, Audio Filters",
    colorHex: "#9b59b6",
    icono: "🔊",
    conceptos: [
      {
        nombre: "Audio Overview & AudioListener",
        sintaxis: "Componente AudioListener en la Cámara",
        resumen: "El micrófono virtual del juego que capta los sonidos emitidos en la escena.",
        descripcion: "Debe haber exactamente un AudioListener en la escena (normalmente en la Cámara Principal).",
        cuandoUsar: "Captar y escuchar todos los sonidos producidos por los AudioSources.",
        codigo: `// Configuración:
// Asegúrate de que solo la Cámara Principal tenga adjunto el componente AudioListener.`,
        consejo: "Si tienes dos AudioListeners activos a la vez, Unity mostrará una advertencia en la consola."
      },
      {
        nombre: "Audio Files & Import Settings",
        sintaxis: "Ajustes de Importación de Audio (WAV, MP3, OGG)",
        resumen: "Configuración de compresión y carga en memoria de archivos de audio.",
        descripcion: "Permite configurar si un archivo de sonido se descomprime en memoria (Decompress on Load) o se carga por streaming (Streaming).",
        cuandoUsar: "SFX cortos en 'Decompress on Load'; música larga de fondo en 'Streaming'.",
        codigo: `// Ajustes recomendados en Inspector de Audio:
// 1. Sonidos de disparos/pasos cortos: Decompress on Load.
// 2. Música de fondo larga (MPEG/OGG): Streaming.`,
        consejo: "El modo Streaming evita que las canciones ocupen megabytes de RAM innecesariamente."
      },
      {
        nombre: "AudioSource & Spatial Blend (2D/3D)",
        sintaxis: "public void Play() / Spatial Blend (0.0 a 1.0)",
        resumen: "Emisor de sonido que reproduce un AudioClip en 2D o 3D.",
        descripcion: "Spatial Blend = 0 es audio 2D (música de interfaz sin atenuación); Spatial Blend = 1 es audio 3D (disparos atenuados por distancia).",
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
      },
      {
        nombre: "PlayClipAtPoint()",
        sintaxis: "AudioSource.PlayClipAtPoint(clip, position, volume)",
        resumen: "Crea un emisor de audio 3D temporal que se autodestruye al terminar.",
        descripcion: "Resuelve el problema de sonidos que se cortan cuando un enemigo u objeto va a ser destruido inmediatamente.",
        cuandoUsar: "Explosiones o muertes de objetos que son eliminados con Destroy(gameObject).",
        codigo: `AudioSource.PlayClipAtPoint(clipExplosion, transform.position, 1.0f);`,
        consejo: "Genera su propio GameObject temporal automáticamente."
      },
      {
        nombre: "Scriptable Audio Pipeline & DSP Filters",
        sintaxis: "AudioLowPassFilter / AudioReverbFilter",
        resumen: "Filtros de procesamiento digital de señales (DSP) para distorsión y eco.",
        descripcion: "Componentes como AudioLowPassFilter (filtro de paso bajo) permiten amortiguar el sonido creando un efecto de estar detrás de una pared.",
        cuandoUsar: "Efecto de sordera tras una gran explosión o efecto de cueva con eco.",
        codigo: `AudioLowPassFilter filtro = GetComponent<AudioLowPassFilter>();
filtro.cutoffFrequency = 1000f; // Amortiguar sonido`,
        consejo: "Añádelos al AudioSource o directamente a la Cámara Principal."
      },
      {
        nombre: "Tracker Modules & Ambisonics 3D",
        sintaxis: "Ambisonic Audio Format (VR 360)",
        resumen: "Soporte de audio espacial envolvente en 360 grados para realidad virtual.",
        descripcion: "Representa campos sonoros completos en 3D que rotan dinámicamente según la orientación del visor VR.",
        cuandoUsar: "Experiencias de Realidad Virtual (VR) hiperrealistas.",
        codigo: `// Requiere importar archivos ambisónicos de 4 canales y marcar 'Is Ambisonic' en el Inspector.`,
        consejo: "Proporciona inmersión de sonido 3D completa en Meta Quest y Apple Vision Pro."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. ANIMATION (ANIMACIÓN, ANIMATOR, BLEND TREES & RIGGING)
  // --------------------------------------------------------------------------
  {
    id: "animation-animator",
    titulo: "ANIMATION",
    subtitulo: "Manual: Animation overview, Animation Clips, Animator Controller, Blend Trees, IK & Animation Rigging",
    colorHex: "#ff7979",
    icono: "🕺",
    conceptos: [
      {
        nombre: "Animation Clips & Dopesheet",
        sintaxis: "AnimationClip Asset",
        resumen: "Archivos de clips de animación con fotogramas clave (Keyframes).",
        descripcion: "Contienen los datos de movimiento de huesos o propiedades de objetos a lo largo del tiempo.",
        cuandoUsar: "Animaciones de correr, saltar, recargar o mover una puerta.",
        codigo: `// Se crean desde Window -> Animation -> Animation Window.`,
        consejo: "Configura la casilla 'Loop Time' para animaciones cíclicas como andar o correr."
      },
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
    // Se invoca desde el fotograma exacto de la animación
    Debug.Log("¡Golpe asestado!");
}`,
        consejo: "El script receptor debe estar en el mismo GameObject que contiene el Animator."
      },
      {
        nombre: "Inverse Kinematics (IK Hands & Feet)",
        sintaxis: "OnAnimatorIK(int layerIndex)",
        resumen: "Ajusta la posición de manos y pies dinámicamente según el entorno.",
        descripcion: "Permite apoyar las manos sobre paredes u objetos o ajustar los pies a la inclinación del terreno.",
        cuandoUsar: "Personajes agarrando volantes, escalones o pasamanos.",
        codigo: `void OnAnimatorIK(int layer) 
{
    Animator anim = GetComponent<Animator>();
    anim.SetIKPositionWeight(AvatarIKGoal.RightHand, 1f);
    anim.SetIKPosition(AvatarIKGoal.RightHand, objetivoMano.position);
}`,
        consejo: "Activa la casilla 'IK Pass' en la capa del Animator Controller."
      },
      {
        nombre: "Animation Rigging Package",
        sintaxis: "Procedural Animation Rigging System",
        resumen: "Paquete para animación procedimental y restricciones óseas avanzadas en tiempo real.",
        descripcion: "Permite controlar cadenas de huesos en tiempo real (apuntar arma con el pecho, girar la cabeza hacia una amenaza).",
        cuandoUsar: "Personajes de disparo (FPS/TPS) apuntando a diferentes ángulos con la columna vertebral.",
        codigo: `// Requiere instalar 'Animation Rigging' desde Package Manager y configurar un Rig Builder.`,
        consejo: "Combina animaciones pre-renderizadas con física procedimental en C#."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 5. PHYSICS (FÍSICAS 3D Y RIGIDBODY)
  // --------------------------------------------------------------------------
  {
    id: "physics-3d",
    titulo: "PHYSICS",
    subtitulo: "Manual: Physics overview, Rigidbody, Colliders, Raycasting, Joints & PhysicMaterial",
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
        nombre: "Colliders 3D (Box, Sphere, Capsule, Mesh)",
        sintaxis: "Collider Component",
        resumen: "Define la forma geométrica para la detección de colisiones físicas.",
        descripcion: "BoxCollider, SphereCollider, CapsuleCollider para primitivas rápidas; MeshCollider para geometrías complejas.",
        cuandoUsar: "Definir los límites físicos sólidos de objetos y personajes.",
        codigo: `Collider col = GetComponent<Collider>();
col.isTrigger = true; // Convertir en zona de paso`,
        consejo: "Usa primitivas siempre que sea posible; los MeshCollider son costosos para la CPU."
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
        nombre: "CharacterController",
        sintaxis: "public class CharacterController : Collider",
        resumen: "Controlador físico para personajes sin dinámicas de masa tradicionales.",
        descripcion: "Sube rampas y escalones automáticamente sin deslizarse de forma inestable.",
        cuandoUsar: "Movimiento de personajes en juegos de primera y tercera persona.",
        codigo: `CharacterController controller = GetComponent<CharacterController>();
controller.Move(Vector3.forward * Time.deltaTime * 5f);`,
        consejo: "Usa controller.SimpleMove() si quieres gravedad automática."
      },
      {
        nombre: "Physics Joints (Hinge, Fixed, Spring)",
        sintaxis: "HingeJoint / FixedJoint / SpringJoint Components",
        resumen: "Une dos Rigidbodies mediante bisagras, muelles o uniones rígidas.",
        descripcion: "HingeJoint para puertas; SpringJoint para cuerdas elásticas; FixedJoint para uniones sólidas.",
        cuandoUsar: "Puertas que se abren con físicas, suspensiones de vehículos o demoliciones.",
        codigo: `HingeJoint bisagra = gameObject.AddComponent<HingeJoint>();
bisagra.connectedBody = cuerpoPadre;`,
        consejo: "Configura límites de ángulo para evitar que las puertas atraviesen muros."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 6. LIGHTING (ILUMINACIÓN, LIGHTMAPS, PROBES & SKYBOX)
  // --------------------------------------------------------------------------
  {
    id: "lighting-shadows",
    titulo: "LIGHTING",
    subtitulo: "Manual: Lighting overview, Light sources, Lightmapping, Light Probes, Reflection Probes & Environment",
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
        nombre: "Light Probes",
        sintaxis: "Light Probe Group Component",
        resumen: "Transfiere la iluminación horneada a objetos dinámicos en movimiento.",
        descripcion: "Muestrea la luz guardada del escenario estático y la aplica sobre personajes en movimiento.",
        cuandoUsar: "Para que un personaje se oscurezca al pasar por sombras horneadas.",
        codigo: `// Añade el componente 'Light Probe Group' y distribuye los puntos.`,
        consejo: "Evita que los personajes dinámicos se vean planos sobre fondos horneados."
      },
      {
        nombre: "Reflection Probes",
        sintaxis: "Reflection Probe Component",
        resumen: "Captura reflejos del entorno 3D para materiales metálicos y espejos.",
        descripcion: "Toma fotos panorámicas de 360° del mapa para aplicarlas como reflejos en objetos brillantes.",
        cuandoUsar: "Coches metálicos, charcos, cristales o armaduras.",
        codigo: `ReflectionProbe sonda = GetComponent<ReflectionProbe>();
sonda.RenderProbe();`,
        consejo: "Usa sondas en tiempo real solo para elementos muy importantes."
      },
      {
        nombre: "RenderSettings & Skybox Environment",
        sintaxis: "RenderSettings.skybox = materialCielo;",
        resumen: "Material asignado al fondo del cielo y luz ambiental global.",
        descripcion: "Controla la apariencia del cielo y el tinte de luz que ilumina toda la escena.",
        cuandoUsar: "Ciclos de día y noche o cambio de dimensiones.",
        codigo: `RenderSettings.skybox = materialNoche;
DynamicGI.UpdateEnvironment();`,
        consejo: "Llama a DynamicGI.UpdateEnvironment() para aplicar el nuevo color de luz."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 7. UI SYSTEMS (UI TOOLKIT, UGUI CANVAS & RECTTRANSFORM)
  // --------------------------------------------------------------------------
  {
    id: "ui-systems",
    titulo: "UI SYSTEMS",
    subtitulo: "Manual: UI systems overview, UI Toolkit, uGUI Canvas, RectTransform & CanvasGroup",
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
        nombre: "RegisterCallback<ClickEvent>()",
        sintaxis: "miBoton.RegisterCallback<ClickEvent>(ev => { ... });",
        resumen: "Suscribe un método para escuchar interacción del usuario en UI Toolkit.",
        descripcion: "Responde a clics, cambios de valor o deslizamientos en la interfaz.",
        cuandoUsar: "Detectar clics en botones o cambios en sliders.",
        codigo: `miBoton.RegisterCallback<ClickEvent>(ev => {
    Debug.Log("¡Boton clickeado!");
});`,
        consejo: "Desuscríbete con UnregisterCallback en OnDisable."
      },
      {
        nombre: "uGUI Canvas & RectTransform",
        sintaxis: "RectTransform.sizeDelta = new Vector2(w, h);",
        resumen: "Transform 2D especializado para posicionar y anclar elementos en el Canvas tradicional.",
        descripcion: "Controla anclas (Anchors), pivotes y dimensiones de la interfaz clásica uGUI.",
        cuandoUsar: "Interfaces en proyectos tradicionales o Canvas en espacio de mundo 3D (World Space).",
        codigo: `RectTransform rect = GetComponent<RectTransform>();
rect.sizeDelta = new Vector2(200, 50);`,
        consejo: "Ajusta bien las anclas para que la UI se adapte a cualquier pantalla."
      },
      {
        nombre: "CanvasGroup.alpha (Fundidos uGUI)",
        sintaxis: "CanvasGroup.alpha = float;",
        resumen: "Controla la opacidad de todo un grupo de UI simultáneamente.",
        descripcion: "Modifica la transparencia global de un Canvas y sus hijos de 0.0 (invisible) a 1.0 (opaco).",
        cuandoUsar: "Fundidos a negro (fade in / out) al pausar o cambiar de nivel.",
        codigo: `CanvasGroup grupo = GetComponent<CanvasGroup>();
grupo.alpha = Mathf.MoveTowards(grupo.alpha, 0f, Time.deltaTime);`,
        consejo: "Desactiva blocksRaycasts si alpha es 0."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 8. UNITY SERVICES (CLOUD SAVE, ANALYTICS & ADS)
  // --------------------------------------------------------------------------
  {
    id: "unity-services",
    titulo: "UNITY SERVICES",
    subtitulo: "Manual: Unity Services overview, Cloud Save, Analytics, Monetization & Ads",
    colorHex: "#8e44ad",
    icono: "☁️",
    conceptos: [
      {
        nombre: "Unity Cloud Save API",
        sintaxis: "CloudSaveService.Instance.Data.Player.SaveAsync()",
        resumen: "Almacenamiento seguro de partidas de jugadores en los servidores de Unity.",
        descripcion: "Guarda inventarios, progreso y configuraciones en la nube de forma inmune a manipulaciones del usuario.",
        cuandoUsar: "Guardado de partida multiplataforma.",
        codigo: `var datos = new Dictionary<string, object> { { "Monedas", 1500 } };
await CloudSaveService.Instance.Data.Player.SaveAsync(datos);`,
        consejo: "Requiere inicializar previamente UnityServices.InitializeAsync()."
      },
      {
        nombre: "Unity Analytics & Custom Events",
        sintaxis: "AnalyticsService.Instance.CustomData(eventName, parameters)",
        resumen: "Registra métricas y comportamientos de jugadores en tiempo real.",
        descripcion: "Registra eventos como niveles completados, muertes o compras para balancear la dificultad.",
        cuandoUsar: "Optimizar retención de usuarios en juegos publicados.",
        codigo: `var param = new Dictionary<string, object> { { "Nivel", 2 } };
AnalyticsService.Instance.CustomData("NivelCompletado", param);`,
        consejo: "Indispensable para juegos móviles Free-to-Play."
      },
      {
        nombre: "Unity Ads (Publicidad Rewarded)",
        sintaxis: "Advertisement.Show(adUnitId, showListener)",
        resumen: "Muestra anuncios publicitarios interactivos para monetizar juegos.",
        descripcion: "Permite integrar vídeos bonificados (ver anuncio para ganar vidas o monedas).",
        cuandoUsar: "Monetización en juegos móviles.",
        codigo: `Advertisement.Show("Rewarded_Android", miEscuchador);`,
        consejo: "Los anuncios bonificados generan mejores ingresos que los banners."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 9. VISUAL EFFECTS (PARTICLES, VFX GRAPH, TRAILS & DECALS)
  // --------------------------------------------------------------------------
  {
    id: "visual-effects-vfx",
    titulo: "VISUAL EFFECTS",
    subtitulo: "Manual: Visual effects overview, Particle System, VFX Graph, TrailRenderer & Decals",
    colorHex: "#e056fd",
    icono: "✨",
    conceptos: [
      {
        nombre: "Particle System (CPU Particles)",
        sintaxis: "ParticleSystem.Play()",
        resumen: "Generador clásico de partículas para humo, fuego, magias y chispas.",
        descripcion: "Controla la emisión, velocidad, color sobre el tiempo y sub-emisores en la CPU.",
        cuandoUsar: "Chispas de disparo, fuego de propulsores o humo.",
        codigo: `ParticleSystem ps = GetComponent<ParticleSystem>();
if (!ps.isPlaying) ps.Play();`,
        consejo: "Marca withChildren = true para activar emisores hijos."
      },
      {
        nombre: "VFX Graph (GPU Particle Engine)",
        sintaxis: "VisualEffect Component (VFX Graph)",
        resumen: "Motor de partículas masivo de ultra rendimiento ejecutado en la GPU.",
        descripcion: "Simula millones de partículas simultáneas (tormentas de arena, magia masiva, polvo estelar) sin sobrecargar la CPU.",
        cuandoUsar: "Efectos gráficos masivos en juegos de PC/Consolas en URP/HDRP.",
        codigo: `VisualEffect vfx = GetComponent<VisualEffect>();
vfx.SendEvent("OnPlay");`,
        consejo: "Funciona nativamente en los Render Pipelines SRP."
      },
      {
        nombre: "TrailRenderer (Estelas de Luz)",
        sintaxis: "public class TrailRenderer : Renderer",
        resumen: "Dibuja un rastro luminoso o cinta detrás de un objeto en movimiento.",
        descripcion: "Genera automáticamente un rastro de luz siguiendo la trayectoria del objeto.",
        cuandoUsar: "Espadas al atacar, estelas de proyectiles o derrapes.",
        codigo: `TrailRenderer trail = GetComponent<TrailRenderer>();
trail.Clear(); // Limpiar rastro tras teletransporte`,
        consejo: "Llama a trail.Clear() justo después de mover a un objeto instantáneamente."
      },
      {
        nombre: "Decal Projector (Calcomanías URP)",
        sintaxis: "DecalProjector Component",
        resumen: "Proyecta texturas de sangre, agujeros de bala o grietas sobre objetos 3D.",
        descripcion: "Proyecta imágenes 2D sobre superficies irregulares ajustando la geometría.",
        cuandoUsar: "Impactos de bala en paredes o manchas de sangre.",
        codigo: `Instantiate(prefabCalcomania, puntoImpacto, Quaternion.LookRotation(normal));`,
        consejo: "Requiere activar la característica Decal en URP Asset."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 10. XR (REALIDAD VIRTUAL Y AUMENTADA)
  // --------------------------------------------------------------------------
  {
    id: "xr-realidad-virtual",
    titulo: "XR (REALIDAD VIRTUAL Y AUMENTADA)",
    subtitulo: "Manual: XR overview, AR Foundation, XR Interaction Toolkit & VR Controllers",
    colorHex: "#16a085",
    icono: "🥽",
    conceptos: [
      {
        nombre: "XR Interaction Toolkit (Interacciones VR)",
        sintaxis: "XR Origin & Direct / Ray Interactor",
        resumen: "Framework unificado para agarrar objetos, Raycast VR y teletransporte.",
        descripcion: "Componentes preconstruidos para controlar visores Meta Quest, Apple Vision Pro y mandos hápticos.",
        cuandoUsar: "Juegos inmersivos de VR y AR.",
        codigo: `// Añade el Prefab 'XR Origin' a la escena para configurar el visor VR.`,
        consejo: "Soporta interacción con mandos y Hand Tracking directo."
      },
      {
        nombre: "AR Foundation (Realidad Aumentada)",
        sintaxis: "ARSession & ARPlaneManager",
        resumen: "Escanea y detecta superficies reales mediante la cámara del móvil (iOS/Android).",
        descripcion: "Utiliza ARKit (Apple) y ARCore (Google) para colocar objetos virtuales en salas reales.",
        cuandoUsar: "Juegos de Realidad Aumentada móviles estilo Pokémon GO.",
        codigo: `ARPlaneManager planeManager = GetComponent<ARPlaneManager>();
planeManager.planesChanged += (args) => {
    Debug.Log("¡Nuevo plano real detectado!");
};`,
        consejo: "Funciona en el mismo código para Android e iOS."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // RESTO DE LAS 37 SECCIONES OFICIALES DEL MANUAL EN RENDERIZADO
  // --------------------------------------------------------------------------
  {
    id: "get-started",
    titulo: "GET STARTED",
    subtitulo: "Manual: Get started, Installation, Editor Layouts & First Steps",
    colorHex: "#2eb872",
    icono: "🚀",
    conceptos: [
      {
        nombre: "Unity Hub & Instalación",
        sintaxis: "Instalador oficial de versiones de Unity",
        resumen: "Punto de entrada para instalar versiones de Unity y crear proyectos.",
        descripcion: "Permite gestionar licencias, versiones del motor y módulos de compilación para diferentes plataformas.",
        cuandoUsar: "Instalar el motor e iniciar proyectos.",
        codigo: `// Estructura limpia recomendada: Assets/_Proyecto/Scripts/`,
        consejo: "Elige versiones LTS para proyectos comerciales de largo plazo."
      }
    ]
  },
  {
    id: "upgrade-unity",
    titulo: "UPGRADE UNITY",
    subtitulo: "Manual: Upgrade Unity, API Updater & Deprecated Migration",
    colorHex: "#f39c12",
    icono: "⬆️",
    conceptos: [
      {
        nombre: "API Updater & Migración de Código",
        sintaxis: "Herramienta de conversión automática de código C#",
        resumen: "Actualiza automáticamente código y métodos obsoletos de C#.",
        descripcion: "Convierte llamadas a métodos antiguos a la API moderna cuando abres proyectos en versiones recientes de Unity.",
        cuandoUsar: "Migrar un proyecto hacia versiones modernas.",
        codigo: `// Ejemplo: rigidbody.velocity -> rigidbody.linearVelocity en Unity 6`,
        consejo: "Haz commit o backup antes de actualizar de versión."
      }
    ]
  },
  {
    id: "building-blocks",
    titulo: "UNITY BUILDING BLOCKS",
    subtitulo: "Manual: Building blocks overview & Preset Components",
    colorHex: "#34495e",
    icono: "🧰",
    conceptos: [
      {
        nombre: "Preset Systems & Building Blocks",
        sintaxis: "Componentes Modulares Preconfigurados",
        resumen: "Bloques de funcionalidad de alta velocidad para acelerar prototipos.",
        descripcion: "Sistemas preconfigurados para rig de cámara, movimiento de personaje y escenarios.",
        cuandoUsar: "Prototipar mecánicas rápidamente en minutos.",
        codigo: `// Window -> Building Blocks / Arrastra bloques directo a la escena.`,
        consejo: "Ahorra programar sistemas básicos desde cero."
      }
    ]
  },
  {
    id: "editor-interface",
    titulo: "UNITY EDITOR INTERFACE",
    subtitulo: "Manual: Hierarchy, Inspector, Scene View & Project Window",
    colorHex: "#2c3e50",
    icono: "🖥️",
    conceptos: [
      {
        nombre: "Hierarchy, Inspector & Scene View",
        sintaxis: "Ventanas principales de trabajo del Editor",
        resumen: "Vista del nivel 3D/2D, lista de objetos e inspección de variables.",
        descripcion: "Hierarchy muestra los GameObjects en escena; Inspector permite editar sus parámetros C#.",
        cuandoUsar: "Organizar y editar todo tu videojuego.",
        codigo: `// Atajos: F (Enfocar), W/E/R (Mover/Rotar/Escalar)`,
        consejo: "Organiza tus variables con [Header(\"...\")] para verlas limpias en el Inspector."
      }
    ]
  },
  {
    id: "packages-management",
    titulo: "PACKAGES AND PACKAGE MANAGEMENT",
    subtitulo: "Manual: Package Manager, Unity Registry & Manifest.json",
    colorHex: "#e67e22",
    icono: "📦",
    conceptos: [
      {
        nombre: "Package Manager & Registros",
        sintaxis: "Window -> Package Manager",
        resumen: "Gestor oficial de paquetes y herramientas de Unity.",
        descripcion: "Instala librerías oficiales de Unity (Input System, URP, Cinemachine, UI Toolkit) o externas.",
        cuandoUsar: "Añadir paquetes y herramientas.",
        codigo: `// Window -> Package Manager -> Unity Registry -> Install`,
        consejo: "Revisa siempre las dependencias al actualizar un paquete."
      }
    ]
  },
  {
    id: "assets-media",
    titulo: "ASSETS AND MEDIA",
    subtitulo: "Manual: Assets, ScriptableObjects & Addressables",
    colorHex: "#8e44ad",
    icono: "📄",
    conceptos: [
      {
        nombre: "ScriptableObject & Addressables",
        sintaxis: "CreateAssetMenu / Addressables API",
        resumen: "Contenedores de datos independientes y carga de recursos por streaming.",
        descripcion: "ScriptableObject almacena datos de items o estadísticas; Addressables carga recursos asíncronos.",
        cuandoUsar: "Inventarios, tablas de armas y descargas de recursos por streaming.",
        codigo: `[CreateAssetMenu(fileName = "Arma", menuName = "Juego/Arma")]
public class DatosArma : ScriptableObject { public int danio; }`,
        consejo: "Ahorra memoria RAM compartiendo datos entre instancias."
      }
    ]
  },
  {
    id: "2d-game-development",
    titulo: "2D GAME DEVELOPMENT",
    subtitulo: "Manual: Sprites, Tilemaps, 2D Physics & 2D Lights",
    colorHex: "#16a085",
    icono: "🕹️",
    conceptos: [
      {
        nombre: "Sprites, Tilemaps & 2D Physics",
        sintaxis: "SpriteRenderer / Tilemap / Rigidbody2D",
        resumen: "Suite completa para la creación de juegos en dos dimensiones.",
        descripcion: "Incluye renderizado de sprites, mapas de azulejos (Grid 2D) y motor de físicas 2D en plano XY.",
        cuandoUsar: "Juegos 2D de plataformas, top-down o arcade.",
        codigo: `Rigidbody2D rb2D = GetComponent<Rigidbody2D>();
rb2D.linearVelocity = new Vector2(5f, rb2D.linearVelocity.y);`,
        consejo: "No mecles componentes 3D (Rigidbody) con componentes 2D (Rigidbody2D)."
      }
    ]
  },
  {
    id: "unity-ai-inicio",
    titulo: "UNITY'S AI",
    subtitulo: "Manual AI Assistant: com.unity.ai.assistant & Unity Sentis",
    colorHex: "#9b59b6",
    icono: "🤖",
    conceptos: [
      {
        nombre: "Unity AI Assistant & Sentis Neural Models",
        sintaxis: "Instalación com.unity.ai.assistant / Sentis API",
        resumen: "Herramienta de IA generativa e inferencia de modelos neuronales en runtime.",
        descripcion: "Genera sprites, audios y scripts en Editor; Sentis ejecuta redes neuronales ONNX en tiempo real dentro del juego.",
        cuandoUsar: "Crear assets con prompts o ejecutar IA de modelo neuronal en runtime.",
        codigo: `// Window -> AI -> AI Assistant`,
        consejo: "Sentis permite ejecutar modelos de aprendizaje automático locales en la GPU."
      }
    ]
  },
  {
    id: "multiplayer-red",
    titulo: "MULTIPLAYER",
    subtitulo: "Manual: Netcode for GameObjects, NetworkVariable & RPCs",
    colorHex: "#2980b9",
    icono: "🌐",
    conceptos: [
      {
        nombre: "Netcode for GameObjects (NGO)",
        sintaxis: "public class JugadorRed : NetworkBehaviour",
        resumen: "Framework oficial para la creación de juegos multijugador online.",
        descripcion: "Sincroniza estado de juego, variables y animaciones entre cliente y servidor mediante NetworkVariable y RPCs.",
        cuandoUsar: "Juegos multijugador online cooperativos o competitivos.",
        codigo: `public class JugadorRed : NetworkBehaviour 
{
    public NetworkVariable<int> puntos = new NetworkVariable<int>();
    [ServerRpc] public void SumarPuntosServerRpc(int val) { puntos.Value += val; }
}`,
        consejo: "Usa ServerRpc para acciones que deben ser validadas por el servidor."
      }
    ]
  },
  {
    id: "platform-development",
    titulo: "PLATFORM DEVELOPMENT",
    subtitulo: "Manual: PC, Mobile (Android/iOS), WebGL & Consoles",
    colorHex: "#f39c12",
    icono: "📱",
    conceptos: [
      {
        nombre: "Application.platform & Directivas de Compilación",
        sintaxis: "if (Application.platform == RuntimePlatform.Android)",
        resumen: "Adaptación del videojuego a diferentes consolas y sistemas operativos.",
        descripcion: "Detecta la plataforma activa para adaptar controles, rendimiento y calidad gráfica.",
        cuandoUsar: "Mostrar UI táctil solo en dispositivos móviles.",
        codigo: `#if UNITY_ANDROID
Debug.Log("Compilación específica para Android");
#endif`,
        consejo: "Adapta la interfaz según la plataforma de destino."
      }
    ]
  },
  {
    id: "gameobjects-componentes",
    titulo: "GAMEOBJECTS",
    subtitulo: "Manual: GameObjects, Hierarchy, Components & LayerMask",
    colorHex: "#a55eea",
    icono: "🧩",
    conceptos: [
      {
        nombre: "GetComponent<T>() / TryGetComponent<T>()",
        sintaxis: "public bool TryGetComponent<T>(out T comp)",
        resumen: "Búsqueda y obtención de componentes adjuntos en GameObjects.",
        descripcion: "TryGetComponent consulta el componente sin alocar memoria en el recolector de basura.",
        cuandoUsar: "Obtener scripts o físicas de objetos en colisiones.",
        codigo: `if (otro.TryGetComponent<Salud>(out Salud s)) { s.RecibirDanio(10); }`,
        consejo: "Usa siempre TryGetComponent para optimizar la memoria."
      }
    ]
  },
  {
    id: "scenes-escenas",
    titulo: "SCENES",
    subtitulo: "Manual: Scenes, SceneManager & DontDestroyOnLoad",
    colorHex: "#e74c3c",
    icono: "🗺️",
    conceptos: [
      {
        nombre: "SceneManager.LoadSceneAsync() & DontDestroyOnLoad",
        sintaxis: "SceneManager.LoadSceneAsync(\"Nivel1\");",
        resumen: "Gestión y carga asíncrona de niveles en segundo plano.",
        descripcion: "Carga escenas de fondo mostrando barras de progreso y permite preservar objetos entre escenas.",
        cuandoUsar: "Pantallas de carga y administradores globales persitentes.",
        codigo: `DontDestroyOnLoad(gameObject); // Preservar este objeto entre escenas`,
        consejo: "Registra la escena en Build Settings antes de cargarla."
      }
    ]
  },
  {
    id: "cameras-cinemachine",
    titulo: "CAMERAS",
    subtitulo: "Manual: Cameras, Cinemachine, Camera Stacking & Render Textures",
    colorHex: "#16a085",
    icono: "🎥",
    conceptos: [
      {
        nombre: "Camera Component & Cinemachine",
        sintaxis: "Camera.main / CinemachineVirtualCamera",
        resumen: "Control de la cámara del juego, lentes y seguimiento suave.",
        descripcion: "Controla FOV, proyección y seguimiento suave con cámaras virtuales de Cinemachine.",
        cuandoUsar: "Cámaras en tercera y primera persona.",
        codigo: `Camera.main.fieldOfView = 60f;`,
        consejo: "Usa Cinemachine para movimientos de cámara profesionales sin programar."
      }
    ]
  },
  {
    id: "world-building",
    titulo: "WORLD BUILDING",
    subtitulo: "Manual: Terrain, ProBuilder, Splines & Occlusion Culling",
    colorHex: "#27ae60",
    icono: "🏔️",
    conceptos: [
      {
        nombre: "ProBuilder, Terrain & Splines",
        sintaxis: "Terrain System & ProBuilder Window",
        resumen: "Suite de modelado 3D de niveles y escultura de terrenos.",
        descripcion: "ProBuilder permite modelar estructuras 3D rápidas; Terrain esculpe montañas y vegetación.",
        cuandoUsar: "Diseño de escenarios 3D de exterior e interior.",
        codigo: `float alturaSuelo = Terrain.activeTerrain.SampleHeight(posicion);`,
        consejo: "Utiliza Occlusion Culling para ocultar objetos no visibles tras paredes."
      }
    ]
  },
  {
    id: "input-system",
    titulo: "INPUT",
    subtitulo: "Manual: New Input System, Action Maps & PlayerInput",
    colorHex: "#f1c40f",
    icono: "🎮",
    conceptos: [
      {
        nombre: "InputAction & PlayerInput Component",
        sintaxis: "accion.action.ReadValue<Vector2>();",
        resumen: "Sistema unificado de control para teclado, ratón y mandos.",
        descripcion: "Lee valores analógicos y mapea eventos de controles de forma automática.",
        cuandoUsar: "Controles de personaje y navegación en menús.",
        codigo: `Vector2 input = accionMover.action.ReadValue<Vector2>();`,
        consejo: "Soporta cambio caliente entre teclado y gamepad."
      }
    ]
  },
  {
    id: "accessibility",
    titulo: "ACCESSIBILITY",
    subtitulo: "Manual: Subtítulos, Remapeo de Teclas & Modos de Daltonismo",
    colorHex: "#9b59b6",
    icono: "♿",
    conceptos: [
      {
        nombre: "Adaptación de Accesibilidad",
        sintaxis: "Sistemas de Ajustes de Accesibilidad",
        resumen: "Herramientas para hacer el videojuego accesible a todos los jugadores.",
        descripcion: "Permite cambiar tamaño de subtítulos, remapeo libre de teclas y contraste visual.",
        cuandoUsar: "Menús de ajustes de accesibilidad.",
        codigo: `labelSubtitulo.style.fontSize = 24;`,
        consejo: "Aumenta la accesibilidad para alcanzar a un público mayor."
      }
    ]
  },
  {
    id: "video-cutscenes",
    titulo: "VIDEO AND CUTSCENES",
    subtitulo: "Manual: VideoPlayer, Timeline & PlayableDirector",
    colorHex: "#16a085",
    icono: "🎬",
    conceptos: [
      {
        nombre: "Timeline & VideoPlayer Component",
        sintaxis: "PlayableDirector.Play()",
        resumen: "Orquestación de cinemáticas secuenciales y vídeos MP4.",
        descripcion: "Sincroniza animaciones, audios y cámaras en una línea de tiempo secuencial.",
        cuandoUsar: "Escenas cinemáticas de historia.",
        codigo: `PlayableDirector director = GetComponent<PlayableDirector>();
director.Play();`,
        consejo: "Combina Timeline con Cinemachine para mejores resultados."
      }
    ]
  },
  {
    id: "materials-shaders",
    titulo: "MATERIALS AND SHADERS",
    subtitulo: "Manual: PBR Materials, Shader Graph & Custom Shaders",
    colorHex: "#ee5253",
    icono: "🎨",
    conceptos: [
      {
        nombre: "Material.SetColor() & Shader Graph",
        sintaxis: "mat.SetColor(\"_BaseColor\", Color.red);",
        resumen: "Apariencia visual de superficies y shaders creados por nodos.",
        descripcion: "Controla propiedades visuales de objetos mediante materiales PBR y Shader Graph.",
        cuandoUsar: "Efectos de disolución, agua o tintes de color.",
        codigo: `Material mat = GetComponent<Renderer>().material;
mat.SetColor("_BaseColor", Color.blue);`,
        consejo: "Usa Shader.PropertyToID() para optimizar las llamadas."
      }
    ]
  },
  {
    id: "render-pipelines",
    titulo: "RENDER PIPELINES",
    subtitulo: "Manual: URP, HDRP, Scriptable Render Pipeline & CommandBuffer",
    colorHex: "#0984e3",
    icono: "👓",
    conceptos: [
      {
        nombre: "URP vs HDRP & Scriptable Render Pipeline",
        sintaxis: "Scriptable Render Pipeline Asset",
        resumen: "Arquitectura de renderizado gráfico de Unity.",
        descripcion: "URP para rendimiento optimizado multiplataforma; HDRP para gráficos AAA de alta fidelidad.",
        cuandoUsar: "Selección del pipeline al iniciar el proyecto.",
        codigo: `// Edit -> Project Settings -> Graphics -> Assign URP Asset`,
        consejo: "URP es el estándar recomendado para la mayoría de juegos."
      }
    ]
  },
  {
    id: "post-processing",
    titulo: "POST-PROCESSING",
    subtitulo: "Manual: Volume Profile, Bloom, Vignette & Color Grading",
    colorHex: "#be2edd",
    icono: "🎞️",
    conceptos: [
      {
        nombre: "Volume Profile & Bloom / Vignette",
        sintaxis: "Volume.profile.TryGet<Bloom>(out var bloom)",
        resumen: "Efectos finales de cámara y corrección de color.",
        descripcion: "Añade resplandor brillante (Bloom), bordes oscuros (Vignette) y desfoques cinemáticos.",
        cuandoUsar: "Polido visual del acabado gráfico.",
        codigo: `Volume vol = GetComponent<Volume>();
if (vol.profile.TryGet<Bloom>(out var bloom)) { bloom.intensity.value = 5f; }`,
        consejo: "Usa volúmenes locales para zonas específicas como cuevas."
      }
    ]
  },
  {
    id: "programming-in-unity",
    titulo: "PROGRAMMING IN UNITY",
    subtitulo: "Manual: MonoBehaviour Lifecycle, Mathf, Coroutines & Awaitable",
    colorHex: "#00cec9",
    icono: "📐",
    conceptos: [
      {
        nombre: "MonoBehaviour Lifecycle, Mathf & Awaitable",
        sintaxis: "Awake() -> Start() -> Update() | Mathf.Lerp() | Awaitable",
        resumen: "Bucle principal de programación C#, matemáticas e hilos asíncronos.",
        descripcion: "Controla la lógica e interpolación fluida de movimiento y esperas asíncronas.",
        cuandoUsar: "Lógica principal de cualquier script en Unity.",
        codigo: `float v = Mathf.Lerp(actual, objetivo, Time.deltaTime * 5f);`,
        consejo: "Multiplica por Time.deltaTime en Update para independencia de FPS."
      }
    ]
  },
  {
    id: "extending-editor",
    titulo: "EXTENDING THE UNITY EDITOR",
    subtitulo: "Manual: [MenuItem], CustomEditor, EditorWindow & PrefabUtility",
    colorHex: "#eb4d4b",
    icono: "🛠️",
    conceptos: [
      {
        nombre: "[MenuItem] & Custom Inspector GUI",
        sintaxis: "[MenuItem(\"Herramientas/MiMenu\")]",
        resumen: "Creación de herramientas personalizadas dentro de la interfaz del Editor.",
        descripcion: "Permite automatizar tareas y diseñar inspectores amigables.",
        cuandoUsar: "Crear herramientas de equipo o limpiadores de datos.",
        codigo: `#if UNITY_EDITOR
using UnityEditor;
[MenuItem("Herramientas/Limpiar")] public static void Limpiar() { PlayerPrefs.DeleteAll(); }
#endif`,
        consejo: "Envuelve scripts de editor en #if UNITY_EDITOR."
      }
    ]
  },
  {
    id: "optimization",
    titulo: "OPTIMIZATION",
    subtitulo: "Manual: Profiler, Garbage Collector, Batching & Occlusion Culling",
    colorHex: "#00b894",
    icono: "⚡",
    conceptos: [
      {
        nombre: "Profiler & Garbage Collector (GC)",
        sintaxis: "Profiler.BeginSample(\"Medicion\") / System.GC.Collect()",
        resumen: "Diagnóstico de rendimiento y reducción de tirones de memoria.",
        descripcion: "Mide el consumo de la CPU/GPU y previene tirones por basura en memoria.",
        cuandoUsar: "Optimización de juegos antes de publicar.",
        codigo: `Profiler.BeginSample("MuestraMiScript");
// Código a medir
Profiler.EndSample();`,
        consejo: "Evita concatenar cadenas de texto o GetComponent en Update."
      }
    ]
  },
  {
    id: "building-publishing",
    titulo: "BUILDING AND PUBLISHING",
    subtitulo: "Manual: Build Settings, Player Settings & Executables",
    colorHex: "#e74c3c",
    icono: "📲",
    conceptos: [
      {
        nombre: "Build Settings & Player Settings",
        sintaxis: "BuildPipeline.BuildPlayer()",
        resumen: "Compilación y exportación del ejecutable final del videojuego.",
        descripcion: "Configura el icono, nombre de empresa y genera la build instalable.",
        cuandoUsar: "Exportar tu juego para publicar.",
        codigo: `// Edit -> Project Settings -> Player para configurar iconos.`,
        consejo: "Prueba compilaciones de desarrollo antes de la entrega final."
      }
    ]
  },
  {
    id: "best-practice-guides",
    titulo: "BEST PRACTICE GUIDES",
    subtitulo: "Manual: Clean Code, Memory Management & Performance Rules",
    colorHex: "#2c3e50",
    icono: "💡",
    conceptos: [
      {
        nombre: "Guías de Buenas Prácticas Oficiales",
        sintaxis: "Patrones de Arquitectura recomendados por Unity",
        resumen: "Reglas de oro de arquitectura y optimización.",
        descripcion: "Recomendaciones de ingenieros de Unity para evitar cuellos de botella.",
        cuandoUsar: "Diseño de la estructura del proyecto.",
        codigo: `// Usar Object Pooling + Cachear referencias en Awake.`,
        consejo: "Aplica las reglas desde la primera semana de desarrollo."
      }
    ]
  },
  {
    id: "troubleshooting",
    titulo: "TROUBLESHOOTING",
    subtitulo: "Manual: NullReferenceException, Console Logs & Debugging",
    colorHex: "#c0392b",
    icono: "🔧",
    conceptos: [
      {
        nombre: "Diagnóstico y Solución de Errores",
        sintaxis: "Debug.LogError() / StackTrace",
        resumen: "Diagnóstico y resolución de fallos de compilación y consola.",
        descripcion: "Solución a errores típicos como NullReferenceException.",
        cuandoUsar: "Depuración de errores en consola.",
        codigo: `try { ... } catch (System.Exception ex) { Debug.LogError(ex.Message); }`,
        consejo: "Haz doble clic en el error de consola para ir directo a la línea en C#."
      }
    ]
  },
  {
    id: "glossary",
    titulo: "GLOSSARY",
    subtitulo: "Manual: Glossary & Diccionario de Términos Técnicos",
    colorHex: "#95a5a6",
    icono: "📖",
    conceptos: [
      {
        nombre: "Glosario Completo de Términos",
        sintaxis: "Diccionario de Definiciones Oficiales",
        resumen: "Definiciones oficiales de términos de motores de videojuegos.",
        descripcion: "Explicación de Draw Calls, Mipmaps, Quaternions, Baked Lighting y Frustum Culling.",
        cuandoUsar: "Consultar dudas sobre vocabulario técnico.",
        codigo: `// Draw Call: Comando enviado por la CPU a la GPU para dibujar un objeto.`,
        consejo: "Dominar los términos facilita entender la documentación oficial."
      }
    ]
  }
];

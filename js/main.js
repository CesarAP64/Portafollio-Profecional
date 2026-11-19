const navToggle=document.querySelector('.nav-toggle');
const topNav=document.querySelector('.topnav');
navToggle?.addEventListener('click',()=>{const open=topNav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));navToggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{topNav?.classList.remove('open');navToggle?.setAttribute('aria-expanded','false');navToggle?.setAttribute('aria-label','Abrir menú');}));
window.addEventListener('scroll',()=>document.querySelector('.topbar')?.classList.toggle('scrolled',window.scrollY>30),{passive:true});
const observer=('IntersectionObserver' in window)?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08}):null;
document.querySelectorAll('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('visible'));
const filters=document.querySelectorAll('.filter');const cards=document.querySelectorAll('.project-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{const cat=btn.dataset.filter;filters.forEach(f=>{const active=f===btn;f.classList.toggle('active',active);f.setAttribute('aria-pressed',String(active));});cards.forEach(card=>card.hidden=cat!=='todos'&&card.dataset.category!==cat);}));
document.getElementById('year').textContent=new Date().getFullYear();


// ==========================================================
// CAP / DETALLES DE PROYECTOS EN VENTANA EMERGENTE
// ==========================================================
// Contenido real disponible actualmente. La galería se agregará
// cuando existan fotografías o renders seleccionados.
const projectDetails = [
  {
    title: 'Memoria lúdica de Ciudad Juárez',
    type: '01 / ENTORNO 3D INTERACTIVO',
    status: 'EN DESARROLLO',
    description: 'Proyecto académico individual de reconstrucción 3D e interacción WebGL, enfocado en recuperar y difundir la memoria de espacios históricos de entretenimiento urbano de Ciudad Juárez.',
    extra: 'Contempla la Plaza Monumental, el Hipódromo y Galgódromo y el Centro Deportivo Neri Santos. Está dirigido a estudiantes universitarios e incluye investigación y documentación fotográfica de campo. La experiencia interactiva se encuentra en desarrollo.',
    tags: ['Blender', 'Unity', 'WebGL', 'Modelado 3D'],
    gallery: [
      {src:'assets/img/proyectos/memoria-juarez/plaza-monumental.png',alt:'Comparación antes y ahora de la Plaza Monumental',caption:'Plaza Monumental: contraste entre el antiguo recinto y el monumento que permanece en el entorno urbano.'},
      {src:'assets/img/proyectos/memoria-juarez/neri-santos.png',alt:'Comparación antes y ahora del Centro Deportivo Neri Santos',caption:'Centro Deportivo Neri Santos: cambios visibles en el exterior y en su entorno urbano.'},
      {src:'assets/img/proyectos/memoria-juarez/hipodromo-galgodromo.png',alt:'Comparación antes y ahora del Hipódromo y Galgódromo',caption:'Hipódromo y Galgódromo: comparación de la apariencia anterior y las condiciones actuales de las instalaciones.'},
      {src:'assets/img/proyectos/memoria-juarez/Imagen-de-los-luchadores.png',alt:'diseños de luchadores',caption:'Bosetos de luchadores creados para un minijuego.'}
    ]
  },
  {
    title: 'Horror Beneath the Earth: Border Disaster',
    type: '02 / VIDEOJUEGO',
    status: 'EN DESARROLLO',
    description: 'Videojuego de terror y supervivencia desarrollado como proyecto académico. La experiencia propone escapar de una amenaza subterránea mediante la exploración de escenarios estilizados de estética low poly.',
    extra: 'El primer nivel transcurre en una vivienda con patio: el jugador debe desplazarse sin tocar el suelo, activar un generador y alcanzar una plataforma de helicóptero. El segundo nivel se sitúa en una granja, donde se plantea buscar piezas de un vehículo; su escenario incluye granero, cercas, gallinero y maquinaria agrícola. El tercer nivel se desarrolla en una cueva de montaña, con rutas abiertas, bloqueadas y secretas. Los escenarios y modelos se trabajan en Blender y la implementación del videojuego en Unity. El proyecto sigue en desarrollo; las mecánicas y los niveles no se presentan como finalizados.',
    tags: ['Unity', 'Blender', 'Low poly', 'Diseño de niveles', 'Terror', 'Supervivencia'],
    demoUrl: 'https://nightol.itch.io/terror-bajo-tierra-demo',
    gallery: [
      {src:'assets/img/proyectos/border-disaster/nivel-1.png',alt:'Nivel 1 del juego: horror beneath the earth border disaster. Escenario de la vivienda',caption:'Nivel 1: vivienda y patio. Nivel inspirado en las zonas rurales de CD. Juárez.'},
      {src:'assets/img/proyectos/border-disaster/nivel-2.png',alt:'Nivel 2 del juego: horror beneath the earth border disaster. Escenario de la granja',caption:'Nivel 2: granja y sus instalaciones. Nivel inspirado en las Granjas y ranchos.'},
      {src:'assets/img/proyectos/border-disaster/nivel-3.png',alt:'Nivel 3 del juego: horror beneath the earth border disaster. Escenario de la cueva',caption:'Nivel 3: cueva y rutas de exploración. Nivel inspirado en las cuevas de México.'},
      {src:'assets/img/proyectos/border-disaster/Protagonista.png',alt:'Protagonista del juego. Boceto.',caption:'Protagonista del juego inspirado en las personas residentes de CD. Juárez.'},
      {src:'assets/img/proyectos/border-disaster/Protagonista-3d.png',alt:'Modelo 3D del protagonista. Modelo de Blender.',caption:'Creación del personaje en un entorno 3D.'},
      {src:'assets/img/proyectos/border-disaster/Enemigo.png',alt:'Antagonista del juego. Boceto.',caption:'Antagonista inspirado en las criaturas de la película Terror bajo la tierra.'},
      {src:'assets/img/proyectos/border-disaster/Enemigo-3d.png',alt:'Modelo 3D del Antagonista. Modelo de Blender.',caption:'Creación del antagonista en un entorno 3D.'}
    ]
  },
  {
    title: 'Echoes of Tiamat RA: Crónicas del Umbral',
    type: '03 / VIDEOJUEGO',
    status: 'PROYECTO ACADÉMICO',

    description:
      'Videojuego académico para Android de fantasía y misterio, ' +
      'que combina narrativa interactiva, investigación y ' +
      'elementos de realidad aumentada.',

    extra:
      'El jugador interpreta a un investigador que descubre ' +
      'anomalías relacionadas con Tiamat, la Reina de los Dragones. ' +
      'La propuesta contempla exploración, pistas, criaturas ' +
      'fantásticas y elementos interactivos. ' +
      'Mi participación se enfocó en el diseño y la narrativa ' +
      'del videojuego, colaborando en la construcción de su ' +
      'universo y sus recursos visuales.',

    tags: [
      'Android',
      'Android Studio',
      'Kotlin',
      'Diseño de videojuegos',
      'Narrativa interactiva',
      'Realidad aumentada'
    ],

    videoUrl: 'https://www.youtube.com/embed/V73By_R4Q2A',
    
gallery: [
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-1.svg',
    alt: 'Ilustración de una cabeza de dragón sobre un fondo azul oscuro.',
    caption: 'Icono de la aplicación, diseñado con una cabeza de dragón como elemento representativo del videojuego.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-2.svg',
    alt: 'Pantalla de inicio con una figura oscura de ojos verdes y el logotipo Echoes of Tiamat.',
    caption: 'Pantalla de presentación del videojuego, con su identidad visual y la opción de comenzar la experiencia.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-3.svg',
    alt: 'Menú principal con opciones para iniciar investigación, configuración, acerca de y salir.',
    caption: 'Menú principal de la aplicación, desde el cual se accede a las diferentes funciones del videojuego.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-4.svg',
    alt: 'Ventana de créditos del videojuego sobre el menú principal.',
    caption: 'Apartado de créditos que presenta a los integrantes del equipo y sus responsabilidades en el desarrollo.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-5.svg',
    alt: 'Pantalla de configuración con controles de música ambiental y efectos de sonido.',
    caption: 'Configuración de audio que permite ajustar el volumen y activar o desactivar la música y los efectos sonoros.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-6.svg',
    alt: 'Pantalla de selección de destino con tres ranuras para crear una partida.',
    caption: 'Sistema de selección de partidas, organizado mediante tres ranuras disponibles para el jugador.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-7.svg',
    alt: 'Mapa oscuro de una zona urbana con controles e indicadores de exploración.',
    caption: 'Interfaz de exploración geográfica utilizada para localizar puntos de interés dentro de la experiencia.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-8.svg',
    alt: 'Lista de expedientes de Tiamat con nombres de anomalías y sus respectivos iconos.',
    caption: 'Registro de expedientes que reúne las anomalías disponibles para investigar durante el videojuego.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-9.svg',
    alt: 'Mapa de exploración con un área circular destacada y una opción para investigar una anomalía.',
    caption: 'Detección de una anomalía en el mapa y acceso a la acción de investigación correspondiente.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-10.svg',
    alt: 'Vista de cámara con una pequeña criatura roja superpuesta sobre el entorno.',
    caption: 'Ejemplo de visualización de una criatura digital sobre la imagen capturada por la cámara del dispositivo.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-11.svg',
    alt: 'Pantalla de interferencia detectada con barras de señal y frecuencia de sintonización.',
    caption: 'Mecánica de sintonización de señales utilizada durante el proceso de investigación de anomalías.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-12.svg',
    alt: 'Pantalla de combate con una criatura de armadura roja y diferentes acciones disponibles.',
    caption: 'Interfaz de combate que presenta al enemigo, los indicadores del personaje y las acciones que puede seleccionar el jugador.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-13.svg',
    alt: 'Figura encapuchada de ojos amarillos con un indicador de señales capturadas.',
    caption: 'Representación visual de una entidad misteriosa asociada con las anomalías investigadas.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-14.svg',
    alt: 'Combate contra un guerrero esquelético con espada y escudo.',
    caption: 'Encuentro de combate contra un enemigo esquelético, acompañado por indicadores y controles de acciones.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-15.svg',
    alt: 'Pantalla titulada El juicio de Tiamat con dos opciones de respuesta.',
    caption: 'Secuencia narrativa en la que el jugador debe tomar una decisión durante el juicio de Tiamat.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-16.svg',
    alt: 'Ventana emergente que anuncia el desbloqueo de una pista.',
    caption: 'Notificación de una pista desbloqueada como resultado del avance en la investigación.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-17.svg',
    alt: 'Pantalla de combate con Tiamat representada como un personaje fantástico.',
    caption: 'Encuentro con Tiamat dentro de una secuencia de combate que combina narrativa y acciones interactivas.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-18.svg',
    alt: 'Pantalla de combate con un dragón rojo y la indicación Agita para esquivar.',
    caption: 'Secuencia de ataque de Tiamat que solicita al jugador agitar el dispositivo para intentar esquivar.'
  },
  {
    src: 'assets/img/proyectos/echoe-of-tiamat-ra/echoe-of-tiamat-ra-19.svg',
    alt: 'Pantalla final con el mensaje Tiamat ha sido sellada y un botón para finalizar la misión.',
    caption: 'Pantalla de conclusión de la misión, que confirma el sellado de Tiamat y el restablecimiento del equilibrio.'
  }
]

  },
  {
     title: 'UNO Galaxy',
      type: '04 / DISEÑO DE JUEGO DE CARTAS',
      status: 'PROYECTO PERSONAL',

      description:
        'Reinterpretación y expansión de un juego de cartas ' +
        'con temática galáctica, nuevas mecánicas, cartas ' +
        'especiales y recursos de accesibilidad visual.',

      extra:
        'UNO Galaxy es un proyecto personal de rediseño y ' +
        'ampliación de un juego de cartas, basado en una ' +
        'propuesta de João Vitor publicada en Behance. ' +
        'Incluye una identidad visual de temática espacial, ' +
        'modificaciones a las reglas, nuevas cartas de acción, ' +
        'comodines y mecánicas estratégicas. También incorpora ' +
        'símbolos geométricos para facilitar la identificación ' +
        'de los colores. El proyecto cuenta con un reglamento ' +
        'ilustrado que documenta sus componentes y funcionamiento.',
      tags: [
        'Diseño gráfico',
        'Diseño de cartas',
        'Diseño de juegos',
        'Ilustración',
        'Accesibilidad',
        'Reglamento'
      ],
    gallery: [
      {src:'assets/img/proyectos/uno-galaxy/portada-la-carta.png',alt:'Reverso de carta UNO Galaxy con fondo estrellado.',caption:'Diseño del reverso de las cartas con identidad visual de temática espacial.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(1).png',alt:'Carta amarilla con número uno y símbolo de estrella de cuatro puntas.',caption:'Carta numérica amarilla con símbolo geométrico distintivo.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(2).png',alt:'Carta azul con número dos y símbolo cuadrado.',caption:'Carta numérica azul identificada mediante un cuadrado.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(3).png',alt:'Carta roja con número tres y símbolo circular.',caption:'Carta numérica roja con un círculo como identificador visual.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(4).png',alt:'Carta verde con número cuatro y símbolo triangular.',caption:'Carta numérica verde con un triángulo como identificador.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(5).png',alt:'Carta rosa con número cinco y símbolo de rombo.',caption:'Carta numérica rosa con un rombo que complementa su identificación por color.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(6).png',alt:'Carta naranja con número seis y símbolo trapezoidal.',caption:'Carta numérica naranja con símbolo geométrico propio.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(7).png',alt:'Carta morada con número siete y símbolo pentagonal.',caption:'Carta numérica morada con un pentágono como identificador visual.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(8).png',alt:'Carta celeste con número ocho y símbolo hexagonal.',caption:'Carta numérica celeste con símbolo hexagonal.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(9).png',alt:'Carta gris con número nueve y símbolo de reloj de arena.',caption:'Carta numérica gris con un identificador geométrico distintivo.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(10).png',alt:'Carta especial multicolor con símbolo de flechas circulares.',caption:'Carta de acción con composición multicolor y símbolo de cambio de dirección. Que elige un color del juego (Con excepción del color gris/incolora). La dirección del juego esta invertida y el siguiente jugador pierde su turno.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(11).png',alt:'Carta especial multicolor con símbolo de numeral.',caption:'Carta especial identificada mediante un símbolo de numeral sobre un fondo multicolor. Que elige un número entre el 0 y el 9. Elige un color del juego incluyendo el color gris/incolora.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(12).png',alt:'Carta especial negra con símbolo más dos y cartas superpuestas.',caption:'Diseño de carta especial ÷2 con ilustración de cartas apiladas. Que elige el color del juego (Con excepción del color gris/incolora) y luego elige la mitad de tu mano para descartar.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(13).png',alt:'Carta especial negra con símbolo de doble más dos y personaje verde.',caption:'Carta especial con ilustración de personaje y referencias visuales a varias cartas +2. Que elige el color del juego incluyendo el color gris/incolora. Todos los jugadores, excepto el jugador quien puso esta carta roba 2 cartas.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(14).png',alt:'Carta especial negra con símbolo más dos y dos cartas de colores.',caption:'Carta especial +2 representada mediante dos cartas superpuestas de colores diferentes.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(15).png',alt:'Carta especial negra con símbolo de prohibición y personaje azul.',caption:'Carta de acción con personaje ilustrado y símbolos de prohibición. Que elige el color del juego incluyendo el color gris/incolora) y luego elige un jugador para que Este bloqueado.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(16).png',alt:'Carta especial multicolor con ilustración de intercambio de cartas.',caption:'Carta de acción que representa visualmente el intercambio de cartas entre jugadores. Esta carta coincide con cualquier cosa para que puedas jugarla sin importar qué carta está en la pila de descarte.'},
      {src:'assets/img/proyectos/uno-galaxy/carta-(17).png',alt:'Carta especial con ilustración de un agujero negro.',caption:'Carta especial con ilustración de un agujero negro. Todos los jugadores deberán de tener 34 cartas. Esta carta no pude ser potenciada o reducir su valor por los comodines. Esta carta cambia el color de las cartas y te permite interactuar con las cartas grises/incoloras.'}
    ]
  }
];

const projectDialog = document.getElementById('project-dialog');
const closeProjectButton = projectDialog?.querySelector('.dialog-close');
let previousProjectTrigger = null;
let activeGallery = [];
let activeGalleryIndex = 0;
const galleryElement = document.getElementById('dialog-gallery');
const galleryImage = document.getElementById('dialog-gallery-image');
const galleryCaption = document.getElementById('gallery-caption');
const galleryCounter = document.getElementById('gallery-counter');
const visualPlaceholder = document.getElementById('dialog-visual-placeholder');
function renderGallery() {
  if (!activeGallery.length) return;
  const item = activeGallery[activeGalleryIndex];
  galleryImage.src = item.src;
  galleryImage.alt = item.alt;
  galleryCaption.textContent = item.caption;
  galleryCounter.textContent = `${activeGalleryIndex + 1} / ${activeGallery.length}`;
}
document.getElementById('gallery-prev')?.addEventListener('click', () => {
  activeGalleryIndex = (activeGalleryIndex - 1 + activeGallery.length) % activeGallery.length;
  renderGallery();
});
document.getElementById('gallery-next')?.addEventListener('click', () => {
  activeGalleryIndex = (activeGalleryIndex + 1) % activeGallery.length;
  renderGallery();
});

function openProjectDetails(index, trigger) {
  const project = projectDetails[index];
  if (!project || !projectDialog) return;
  previousProjectTrigger = trigger;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-type').textContent = project.type;
  document.getElementById('dialog-status').textContent = project.status;
  document.getElementById('dialog-description').textContent = project.description;
  document.getElementById('dialog-extra').textContent = project.extra;
  // Mostrar el reglamento solamente en UNO Galaxy
const unoPdfButton = document.getElementById('dialog-uno-pdf');

if (unoPdfButton) {
  unoPdfButton.hidden = project.title !== 'UNO Galaxy';
}


// ======================================================
// VIDEO DEL PROYECTO
// ======================================================
const videoContainer = document.getElementById(
  'dialog-video-container'
);

const videoFrame = document.getElementById(
  'dialog-video-frame'
);

if (videoContainer && videoFrame) {

  // Limpiar el video del proyecto anterior
  videoFrame.replaceChildren();

  const hasVideo = Boolean(project.videoUrl);
  videoContainer.hidden = !hasVideo;

  if (hasVideo) {
    const iframe = document.createElement('iframe');

    iframe.src = project.videoUrl;
    iframe.title = 'Video de ' + project.title;
    iframe.loading = 'lazy';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; ' +
      'encrypted-media; gyroscope; picture-in-picture; ' +
      'web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';

    videoFrame.appendChild(iframe);
  }
}

  const demoContainer = document.getElementById('dialog-demo-container');
const demoLink = document.getElementById('dialog-demo-link');
if (demoContainer && demoLink) {
    const hasDemo = Boolean(project.demoUrl);

    demoContainer.hidden = !hasDemo;

    if (hasDemo) {
        demoLink.href = project.demoUrl;
    } else {
        demoLink.removeAttribute('href');
    }
}
  const tagsContainer = document.getElementById('dialog-tags');
  tagsContainer.replaceChildren();
  project.tags.forEach(tag => {
    const span = document.createElement('span');
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });
  activeGallery = project.gallery || [];
  activeGalleryIndex = 0;
  galleryElement.hidden = activeGallery.length === 0;
  visualPlaceholder.hidden = activeGallery.length > 0;
  if (activeGallery.length) renderGallery();
  projectDialog.showModal();
  closeProjectButton?.focus();
}

document.querySelectorAll('.project-details-btn').forEach(button => {
  button.addEventListener('click', () => {
    openProjectDetails(Number(button.dataset.project), button);
  });
});

closeProjectButton?.addEventListener('click', () => projectDialog.close());
projectDialog?.addEventListener('click', event => {
  if (event.target === projectDialog) projectDialog.close();
});

projectDialog?.addEventListener('close', () => {

  // Detener el video al cerrar los detalles
  document.getElementById('dialog-video-frame')
    ?.replaceChildren();

  // Regresar el enfoque al botón original
  previousProjectTrigger?.focus();

});


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
      {src:'assets/img/proyectos/memoria-juarez/hipodromo-galgodromo.png',alt:'Comparación antes y ahora del Hipódromo y Galgódromo',caption:'Hipódromo y Galgódromo: comparación de la apariencia anterior y las condiciones actuales de las instalaciones.'}
    ]
  },
  {
    title: 'Horror Beneath the Earth: Border Disaster',
    type: '02 / VIDEOJUEGO',
    status: 'EN DESARROLLO',
    description: 'Videojuego de terror y supervivencia desarrollado como proyecto académico. La experiencia propone escapar de una amenaza subterránea mediante la exploración de escenarios estilizados de estética low poly.',
    extra: 'El primer nivel transcurre en una vivienda con patio: el jugador debe desplazarse sin tocar el suelo, activar un generador y alcanzar una plataforma de helicóptero. El segundo nivel se sitúa en una granja, donde se plantea buscar piezas de un vehículo; su escenario incluye granero, cercas, gallinero y maquinaria agrícola. El tercer nivel se desarrolla en una cueva de montaña, con rutas abiertas, bloqueadas y secretas. Los escenarios y modelos se trabajan en Blender y la implementación del videojuego en Unity. El proyecto sigue en desarrollo; las mecánicas y los niveles no se presentan como finalizados.',
    tags: ['Unity', 'Blender', 'Low poly', 'Diseño de niveles', 'Terror', 'Supervivencia'],
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
    title: 'Cleanup Crew',
    type: '03 / VIDEOJUEGO',
    status: 'PROYECTO ACADÉMICO',
    description: 'Rail shooter protagonizado por integrantes de un escuadrón que enfrenta basura viviente para proteger a la comunidad.',
    extra: 'Propuesta de videojuego de acción con temática ambiental, diseño de personajes y enemigos y mecánicas de disparos sobre rieles.',
    tags: ['Diseño de videojuegos', 'Rail shooter'],
    gallery: [
      {src:'assets/img/proyectos/memoria-juarez/plaza-monumental.png',alt:'Comparación antes y ahora de la Plaza Monumental',caption:'Plaza Monumental: contraste entre el antiguo recinto y el monumento que permanece en el entorno urbano.'},
      {src:'assets/img/proyectos/memoria-juarez/neri-santos.png',alt:'Comparación antes y ahora del Centro Deportivo Neri Santos',caption:'Centro Deportivo Neri Santos: cambios visibles en el exterior y en su entorno urbano.'},
      {src:'assets/img/proyectos/memoria-juarez/hipodromo-galgodromo.png',alt:'Comparación antes y ahora del Hipódromo y Galgódromo',caption:'Hipódromo y Galgódromo: comparación de la apariencia anterior y las condiciones actuales de las instalaciones.'}
    ]
  },
  {
    title: 'UNO Galaxy',
    type: '04 / DISEÑO DE JUEGO',
    status: 'PROYECTO PERSONAL',
    description: 'Diseño de cartas, identidad visual y reglas para una variante personalizada de juego de mesa.',
    extra: 'Proyecto de diseño gráfico y editorial que reúne cartas personalizadas y un reglamento de juego.',
    tags: ['Illustrator', 'Diseño editorial'],
    gallery: [
      {src:'assets/img/proyectos/memoria-juarez/plaza-monumental.png',alt:'Comparación antes y ahora de la Plaza Monumental',caption:'Plaza Monumental: contraste entre el antiguo recinto y el monumento que permanece en el entorno urbano.'},
      {src:'assets/img/proyectos/memoria-juarez/neri-santos.png',alt:'Comparación antes y ahora del Centro Deportivo Neri Santos',caption:'Centro Deportivo Neri Santos: cambios visibles en el exterior y en su entorno urbano.'},
      {src:'assets/img/proyectos/memoria-juarez/hipodromo-galgodromo.png',alt:'Comparación antes y ahora del Hipódromo y Galgódromo',caption:'Hipódromo y Galgódromo: comparación de la apariencia anterior y las condiciones actuales de las instalaciones.'}
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
projectDialog?.addEventListener('close', () => previousProjectTrigger?.focus());

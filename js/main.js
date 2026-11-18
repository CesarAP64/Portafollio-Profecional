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
    tags: ['Blender', 'Unity', 'WebGL', 'Modelado 3D']
  },
  {
    title: 'Horror Beneath the Earth: Border Disaster',
    type: '02 / VIDEOJUEGO',
    status: 'EN DESARROLLO',
    description: 'Proyecto de horror y supervivencia con escenarios low poly y exploración.',
    extra: 'Incluye escenarios como una vivienda, una granja y una cueva. El diseño de niveles y los recursos tridimensionales se desarrollan en Blender y Unity.',
    tags: ['Unity', 'Blender', 'Diseño de niveles']
  },
  {
    title: 'Cleanup Crew',
    type: '03 / VIDEOJUEGO',
    status: 'PROYECTO ACADÉMICO',
    description: 'Rail shooter protagonizado por integrantes de un escuadrón que enfrenta basura viviente para proteger a la comunidad.',
    extra: 'Propuesta de videojuego de acción con temática ambiental, diseño de personajes y enemigos y mecánicas de disparos sobre rieles.',
    tags: ['Diseño de videojuegos', 'Rail shooter']
  },
  {
    title: 'UNO Galaxy',
    type: '04 / DISEÑO DE JUEGO',
    status: 'PROYECTO PERSONAL',
    description: 'Diseño de cartas, identidad visual y reglas para una variante personalizada de juego de mesa.',
    extra: 'Proyecto de diseño gráfico y editorial que reúne cartas personalizadas y un reglamento de juego.',
    tags: ['Illustrator', 'Diseño editorial']
  }
];

const projectDialog = document.getElementById('project-dialog');
const closeProjectButton = projectDialog?.querySelector('.dialog-close');
let previousProjectTrigger = null;

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


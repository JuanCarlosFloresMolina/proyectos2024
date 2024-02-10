const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');

document.addEventListener('DOMContentLoaded', () => {
    if (hamburguesa && navegacion && enlaces) {
      hamburguesa.addEventListener('click', () => {
        navegacion.classList.toggle('ocultar');
      });
  
      enlaces.forEach((enlace) => {
        enlace.addEventListener('click', (e) => {
          e.preventDefault();
          const seccion = document.querySelector(e.target.attributes.href.value);
          cambioSeccion(seccion);
          navegacion.classList.add('ocultar');
        });
      });
    } else {
      console.error('No se encontraron elementos con las clases especificadas');
    }
  
    fechaActual();
  });
  
  function cambioSeccion(seccion) {
    seccion.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  function fechaActual() {
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
  }
function mostrarMenu() {
    console.log('Haciendo clic en la hamburguesa');
  
    if (hamburguesa && navegacion) {
      hamburguesa.addEventListener('click', () => {
        console.log('Clic en la hamburguesa detectado');
        const estiloDisplay = getComputedStyle(navegacion).display;
        navegacion.style.display = estiloDisplay === 'none' || estiloDisplay === '' ? 'flex' : 'none';
  
        // Asigna eventos de clic a los enlaces después de que el menú se muestra
        if (navegacion.style.display === 'flex') {
          asignarEventosClicEnlaces();
        } else {
          quitarEventosClicEnlaces();
        }
      });
    } else {
      console.error('No se encontraron elementos con las clases especificadas');
    }
  }
  
  function quitarEventosClicEnlaces() {
    enlaces.forEach((enlace) => {
      enlace.removeEventListener('click', cerrarMenu);
    });
  }
  

  
  function cerrarMenu(e) {
    e.preventDefault();
    const seccion = document.querySelector(e.target.attributes.href.value);
    cambioSeccion(seccion);
    if (e.target.tagName === 'A') {
      navegacion.style.display = 'none';
      console.log('Menú oculto');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    mostrarMenu();
    fechaActual();
  });
function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}

function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}
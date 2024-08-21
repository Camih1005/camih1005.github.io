document.addEventListener('DOMContentLoaded', () => {
    // alert("ya cargo")
let background = document.querySelector("body");

// Evento que sigue el movimiento del cursor
document.addEventListener('mousemove', function(e) {
  let posX = (e.clientX / window.innerWidth) * 10; // Posición X relativa al ancho de la ventana
  let posY = (e.clientY / window.innerHeight) * 10; // Posición Y relativa al alto de la ventana
  background.style.backgroundPosition = posX + '% ' + posY + '%'; // Establecer la posición de fondo relativa al cursor
});


/*function showSection(sectionId) {
  // Obtener todas las secciones
  const sections = document.querySelectorAll('.mision, .vision');
  
  // Ocultar todas las secciones
  sections.forEach(section => {
      section.classList.add('hidden');
  });
  
  // Mostrar la sección seleccionada
  const sectionToShow = document.getElementById(sectionId);
  sectionToShow.classList.remove('hidden');
}*/
const aboutmeb = document.getElementById("aboutmeB");
  const experienciab = document.getElementById("experienciaB");
  const contactob = document.getElementById("contactoB");

  const aboutSec = document.querySelector(".aboutme");
  const experienciaSec = document.querySelector(".proyecto");
  const contactoSec = document.querySelector(".contacto");

  // Agregar event listeners
  aboutmeb.addEventListener("click", () => {
    aboutSec.classList.toggle("hidden");
  });

  experienciab.addEventListener("click", () => {
    experienciaSec.classList.toggle("hidden");
  });

  contactob.addEventListener("click", () => {
    contactoSec.classList.toggle("hidden");
  });
});


// Función para ocultar todas las secciones



// window.addEventListener("load", function() {
//       // Cuando la página ha terminado de cargar, oculta el preloader
//       setTimeout(() => {
//         const spinnerWrapper = document.querySelector(".spiner-wrapper");
//         if (spinnerWrapper) {
//           spinnerWrapper.style.opacity = '0';
//           // Después de que la transición de opacidad termine, oculta el preloader completamente
//           setTimeout(() => {
//             spinnerWrapper.style.display = 'none';
//             document.getElementById("content").style.display = 'block';
//           }, 200); // Debe coincidir con la duración de la transición
//         }
//       }, 500); // Tiempo de espera antes de ocultar el preloader
//     });


// let punto = document.getElementById("punto");

//   document.body.style.cursor = 'none';

 
//   document.addEventListener('mousemove', function(e) {
    
//     document.body.style.cursor = 'none';

//     punto.style.left = e.clientX - punto.offsetWidth / 2 + 'px'; // Ajustar la posición X del punto 
//     punto.style.top = e.clientY - punto.offsetHeight / 2 + 'px'; // Ajustar la posición Y del punto 
//   });
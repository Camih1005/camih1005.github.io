document.addEventListener('DOMContentLoaded', () => {
  // Definición de las variables
  
  let abt = document.getElementById('aboutmeB');
  let exp = document.getElementById('experienciaB');
  let cont = document.getElementById('contactoB');
  
  let secAbt = document.getElementById("aboutme");
  let secExp = document.getElementById("proyecto");
  let secCont = document.getElementById("contacto");

  // Función para ocultar todas las secciones
  function ocultarTodasLasSecciones() {
      secAbt.classList.add('hidden');
      secExp.classList.add('hidden');
      secCont.classList.add('hidden');
  }
  
  // Función para mostrar una sección específica
  function mostrarSeccion(seccion) {
      ocultarTodasLasSecciones();
      seccion.classList.remove('hidden');
  }


  abt.addEventListener("click", () => mostrarSeccion(secAbt));
  exp.addEventListener("click", () => mostrarSeccion(secExp));
  cont.addEventListener("click", () => mostrarSeccion(secCont));
  
  mostrarSeccion(secAbt);

  // Movimiento del cursor para fondo
  let background = document.querySelector("body");
  document.addEventListener('mousemove', function(e) {
      let posX = (e.clientX / window.innerWidth) * 10; 
      let posY = (e.clientY / window.innerHeight) * 10;
      background.style.backgroundPosition = posX + '% ' + posY + '%'; 
  });

  window.addEventListener('load', () => {
    
    const minPreloaderTime = 2000;
    
   
    const preloader = document.querySelector('.preloader');
  
    
    const showPreloaderTimeout = setTimeout(() => {
      preloader.style.opacity = '0';
      
      // Después de que el preloader se ha desvanecido, lo ocultamos completamente
      setTimeout(() => {
        preloader.style.display = 'none';
        document.querySelector('.content').style.display = 'block';
      }, 500); // Tiempo que toma desvanecer el preloader
    }, minPreloaderTime);
  
    window.addEventListener('load', () => {
      clearTimeout(showPreloaderTimeout); // Cancela el temporizador si la página carga antes del tiempo mínimo
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        document.querySelector('.content').style.display = 'block';
      }, 500); 
    });
  });
  
});

let lastScrollTop = 0; 
const devButton = document.getElementById('devButton');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        devButton.classList.add('hidden'); 
    } else if (scrollTop === 0) {
        
        devButton.classList.remove('hidden'); 
    }

    lastScrollTop = scrollTop;
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
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

  // Eventos de los botones
  abt.addEventListener("click", () => mostrarSeccion(secAbt));
  exp.addEventListener("click", () => mostrarSeccion(secExp));
  cont.addEventListener("click", () => mostrarSeccion(secCont));
  
  // Mostrar la sección "Aboutme" por defecto al cargar la página
  mostrarSeccion(secAbt);

  // Movimiento del cursor para fondo
  let background = document.querySelector("body");
  document.addEventListener('mousemove', function(e) {
      let posX = (e.clientX / window.innerWidth) * 10; // Posición X relativa al ancho de la ventana
      let posY = (e.clientY / window.innerHeight) * 10; // Posición Y relativa al alto de la ventana
      background.style.backgroundPosition = posX + '% ' + posY + '%'; // Establecer la posición de fondo relativa al cursor
  });

  window.addEventListener('load', () => {
    // Tiempo mínimo que el preloader debe mostrarse (en milisegundos)
    const minPreloaderTime = 2000; // 2 segundos
    
    // Obtén la referencia al preloader
    const preloader = document.querySelector('.preloader');
  
    // Configura el tiempo mínimo para que el preloader se muestre
    const showPreloaderTimeout = setTimeout(() => {
      preloader.style.opacity = '0';
      
      // Después de que el preloader se ha desvanecido, lo ocultamos completamente
      setTimeout(() => {
        preloader.style.display = 'none';
        document.querySelector('.content').style.display = 'block';
      }, 500); // Tiempo que toma desvanecer el preloader
    }, minPreloaderTime);
  
    // Asegúrate de limpiar el temporizador si la página carga antes de que el tiempo mínimo haya pasado
    window.addEventListener('load', () => {
      clearTimeout(showPreloaderTimeout); // Cancela el temporizador si la página carga antes del tiempo mínimo
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        document.querySelector('.content').style.display = 'block';
      }, 500); // Tiempo que toma desvanecer el preloader
    });
  });
  
});

let lastScrollTop = 0; // Posición del scroll anterior
const devButton = document.getElementById('devButton');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Si se desplaza hacia abajo
        devButton.classList.add('hidden'); // Ocultar el botón
    } else if (scrollTop === 0) {
        // Si se encuentra en la parte superior de la página
        devButton.classList.remove('hidden'); // Mostrar el botón
    }

    lastScrollTop = scrollTop; // Actualizar la posición del scroll
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
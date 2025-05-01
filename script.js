var burguer = document.getElementById("burguer");
var cruz = document.getElementById("cruz");
var menuMov = document.querySelector(".menu-mov");

function mostrarMenu() {
    menuMov.classList.add("active");
  }
  
  function ocultarMenu() {
    menuMov.classList.remove("active");
  }
  
  burguer.addEventListener("click", mostrarMenu);
  burguer.addEventListener("touchstart", mostrarMenu);
  
  cruz.addEventListener("click", ocultarMenu);
  cruz.addEventListener("touchstart", ocultarMenu);


  var reservar = document.getElementById("reservar")

  reservar.addEventListener("click", ()=>{
    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
  })

  var opcionesIdioma = document.getElementById("opcionesIdioma")
  var aIdioma = document.getElementById("aIdioma")
  var idiomaNuevo = document.getElementById("idiomaNuevo")
  var idiomas = document.getElementById("idiomas")

  opcionesIdioma.addEventListener("mouseenter", ()=>{
    if(aIdioma.style.color === "black" || aIdioma.style.color === ""){
         opcionesIdioma.style.backgroundColor = "black"
         opcionesIdioma.style.transition = "background-color 0.2s ease"
         aIdioma.style.color = "white" 
         idiomaNuevo.style.opacity = "1"
         idiomaNuevo.style.transform = "translateY(44px)" 
         idiomaNuevo.style.transition ="transform 0.3s ease, opacity 0.2s ease"
    }
  })

  idiomas.addEventListener("mouseleave", ()=>{
    if(idiomaNuevo.style.transform === "translateY(44px)" || idiomaNuevo.style.transform === ""){
         opcionesIdioma.style.backgroundColor = "var(--grey)"
         opcionesIdioma.style.transition = "background-color 0.2s ease"
         aIdioma.style.color = "black" 
         idiomaNuevo.style.opacity = "0"
         idiomaNuevo.style.transform = "translateY(0px)" 
         idiomaNuevo.style.transition ="transform 1s ease, opacity 1.5s ease"
    }
  })

  var opcionesIdioma2 = document.getElementById("opcionesIdioma2")
  var aIdioma2 = document.getElementById("aIdioma2")
  var idiomaNuevo2 = document.getElementById("idiomaNuevo2")
  var idiomas2 = document.getElementById("idiomas2")

  opcionesIdioma2.addEventListener("mouseenter", ()=>{
    if(aIdioma2.style.color === "black" || aIdioma2.style.color === ""){
         opcionesIdioma2.style.backgroundColor = "black"
         opcionesIdioma2.style.transition = "background-color 0.2s ease"
         aIdioma2.style.color = "white" 
         idiomaNuevo2.style.opacity = "1"
         idiomaNuevo2.style.transform = "translateY(44px)" 
         idiomaNuevo2.style.transition ="transform 0.3s ease, opacity 0.2s ease"
    }
  })

  idiomas2.addEventListener("mouseleave", ()=>{
    if(idiomaNuevo2.style.transform === "translateY(44px)" || idiomaNuevo2.style.transform === ""){
         opcionesIdioma2.style.backgroundColor = "var(--grey)"
         opcionesIdioma2.style.transition = "background-color 0.2s ease"
         aIdioma2.style.color = "black" 
         idiomaNuevo2.style.opacity = "0"
         idiomaNuevo2.style.transform = "translateY(0px)" 
         idiomaNuevo2.style.transition ="transform 1s ease, opacity 1.5s ease"
    }
  })


  const galeria = document.getElementById("galeria");        

  var arrowLeft = document.getElementById("arrowLeft")
  var arrowRight = document.getElementById("arrowRight")

  arrowRight.addEventListener("click", ()=>{
    if (galeria.style.transform === "translateX(0px)" || galeria.style.transform === "" ) {
      galeria.style.transform = "translateX(-1000px)"
    }

    else {
      galeria.style.transform = "translateX(-2000px)"
    }
  })

  arrowLeft.addEventListener("click", ()=>{
    if (galeria.style.transform === "translateX(-1000px)") {
      galeria.style.transform = "translateX(0px)"
    }

    else if (galeria.style.transform === "translateX(-2000px)") {
      galeria.style.transform = "translateX(-1000px)"
    }

    else {
      galeria.style.transform = "translateX(0px)"
    }
  })

let isDragging = false;
let startX;
let scrollLeft;

galeria.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX;
  scrollLeft = galeria.scrollLeft;
}, { passive: true });

galeria.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX;
  const walk = (startX - x); // cantidad a mover
  galeria.scrollLeft = scrollLeft + walk;
}, { passive: true });

galeria.addEventListener('touchend', () => {
  isDragging = false;
});



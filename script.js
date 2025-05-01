const burguer = document.getElementById("burguer");
const cruz = document.getElementById("cruz");
const menuMov = document.querySelector(".menu-mov");

function mostrarMenu() {
  menuMov.classList.add("active");
}

function ocultarMenu() {
  menuMov.classList.remove("active");
}

["click", "touchstart"].forEach(evt => {
  burguer.addEventListener(evt, mostrarMenu);
  cruz.addEventListener(evt, ocultarMenu);
});

const reservar = document.getElementById("reservar");
reservar?.addEventListener("click", () => {
  document.getElementById("contacto")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Función genérica para mostrar idioma
function configurarIdioma(idiomaId) {
  const opcionesIdioma = document.getElementById(`opcionesIdioma${idiomaId}`);
  const aIdioma = document.getElementById(`aIdioma${idiomaId}`);
  const idiomaNuevo = document.getElementById(`idiomaNuevo${idiomaId}`);
  const idiomas = document.getElementById(`idiomas${idiomaId}`);

  opcionesIdioma.addEventListener("mouseenter", () => {
    if (aIdioma.style.color === "black" || aIdioma.style.color === "") {
      opcionesIdioma.style.backgroundColor = "black";
      opcionesIdioma.style.transition = "background-color 0.2s ease";
      aIdioma.style.color = "white";
      idiomaNuevo.style.opacity = "1";
      idiomaNuevo.style.transform = "translateY(44px)";
      idiomaNuevo.style.transition = "transform 0.3s ease, opacity 0.2s ease";
    }
  });

  idiomas.addEventListener("mouseleave", () => {
    if (idiomaNuevo.style.transform === "translateY(44px)" || idiomaNuevo.style.transform === "") {
      opcionesIdioma.style.backgroundColor = "var(--grey)";
      opcionesIdioma.style.transition = "background-color 0.2s ease";
      aIdioma.style.color = "black";
      idiomaNuevo.style.opacity = "0";
      idiomaNuevo.style.transform = "translateY(0px)";
      idiomaNuevo.style.transition = "transform 1s ease, opacity 1.5s ease";
    }
  });
}

configurarIdioma("");  // Para los elementos sin sufijo
configurarIdioma("2"); // Para los elementos con sufijo 2

// Galería
const galeria = document.getElementById("galeria");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

arrowRight?.addEventListener("click", () => {
  const transform = galeria.style.transform;
  galeria.style.transform =
    transform === "translateX(0px)" || transform === ""
      ? "translateX(-1000px)"
      : "translateX(-2000px)";
});

arrowLeft?.addEventListener("click", () => {
  const transform = galeria.style.transform;
  galeria.style.transform =
    transform === "translateX(-2000px)"
      ? "translateX(-1000px)"
      : "translateX(0px)";
});

// Drag en móvil
let isDragging = false;
let startX;
let scrollLeft;

galeria.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX;
  scrollLeft = galeria.scrollLeft;
}, { passive: true });

galeria.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX;
  const walk = startX - x;
  galeria.scrollLeft = scrollLeft + walk;
}, { passive: true });

galeria.addEventListener("touchend", () => {
  isDragging = false;
});

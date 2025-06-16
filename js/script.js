function mostrarPrueba() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.body.style.overflow = 'hidden';
  document.getElementById("pruebaOverlay").classList.add("mostrar");
  document.getElementById("pruebaModal").classList.add("mostrar");
}

function cerrarPrueba() {
  document.body.style.overflow = 'auto';
  document.getElementById("pruebaOverlay").classList.remove("mostrar");
  document.getElementById("pruebaModal").classList.remove("mostrar");
}

// Mostrar ficha técnica
document.querySelectorAll(".opcion-comprar").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const textoFicha = btn.dataset.info;
    document.querySelector("#fichaModal p").textContent = textoFicha;
    document.getElementById("fichaOverlay").classList.add("mostrar");
    document.getElementById("fichaModal").classList.add("mostrar");
  });
});

// Cerrar modal
document.getElementById("fichaOverlay").addEventListener("click", () => {
  document.getElementById("fichaOverlay").classList.remove("mostrar");
  document.getElementById("fichaModal").classList.remove("mostrar");
});

// Animar tarjetas al entrar en pantalla
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".tarjeta-producto").forEach(card => {
  observer.observe(card);
});

const myAtropos = Atropos({
  el: '.my-atropos',
  rotateXMax: 60,
  rotateYMax: 65,
  shadow: true,
  shadowOffset: 75,
  shadowScale: 0.9
});


// Función para manejar el desplazamiento suave al hacer clic en enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

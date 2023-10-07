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

const proyectContainerElement = document.getElementById("proyects-container");

const proyects = [
  { name: "Trello Personalizado", url: "https://elias-mn.github.io/NotasApp/", img: "./img/elias-mn.github.io_NotasApp.png" },
  { name: "Pokedex", url: "https://elias-mn.github.io/PokedexKanto/", img: "./img/elias-mn.github.io_PokedexKanto_.png" },
  { name: "Pomodoro", url: "https://elias-mn.github.io/Pomodoro/", img: "./img/elias-mn.github.io_NotasApp.png" },
  { name: "Tablero Canvas", url: "https://elias-mn.github.io/Tablero/", img: "./img/elias-mn.github.io_Tablero.png" },
  { name: "Codificador", url: "https://elias-mn.github.io/Codificacion-de-mensajes/", img: "./img/elias-mn.github.io_Codificacion-de-mensajes_.png" },
  { name: "Cumpleaños", url: "https://elias-mn.github.io/Cumpleanios/", img: "./img/elias-mn.github.io_Cumple.png" },
  { name: "Calendario Escolar", url: "https://elias-mn.github.io/Calendario-Curso-Escolar/", img: "./img/elias-mn.github.io_Calendario.png" }
];


proyects.forEach(proyect => {
  AddProyect(proyect.name, proyect.url, proyect.img);
});

// Antes de aplicar el efecto atropos, tienen que generarse
document.querySelectorAll('.my-atropos').forEach((element) => {
  Atropos({
    el: element,
    rotateXMax: 20,
    rotateYMax: 45,
    shadow: true,
    shadowOffset: 75,
    shadowScale: 0.9
  });
})

function AddProyect(name, url, img) {
  proyectContainerElement.innerHTML += `
  <div class="atropos my-atropos proyect">
    <h3>${name}</h3>
    <!-- scale container (required) -->
    <div class="atropos-scale">
      <!-- rotate container (required) -->
      <div class="atropos-rotate">
        <!-- inner container (required) -->
        <div class="atropos-inner">
          <!-- put your custom content here -->
          <a href="${url}" target="_blank">
            <img class="github-image" src="${img}" alt="Proyecto github">
          </a>
        </div>
        <span class="box-top"></span>
        <span class="box-bottom"></span>
        <span class="box-left"></span>
        <span class="box-right"></span>
      </div>
    </div>
  </div>
  `;
}



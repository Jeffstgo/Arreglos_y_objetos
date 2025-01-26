// Arreglo principal
const propiedadesAlquiler = [
  {
    nombre: "Casa familiar",
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casa ideal para familias grandes.",
    ubicacion: "Zona 2",
    habitaciones: 4,
    costo: 2500,
    smoke: true,
    pets: false,
  },
];

// Renderizar
function renderizarPropiedades(containerId, propiedades) {
  const container = document.getElementById(containerId);
  propiedades.forEach((propiedad) => {
    // Condicionales
    const mensajeFumar = propiedad.smoke
      ? '<p class="text-success">✔ Permitido fumar</p>'
      : '<p class="text-danger">⚠ No se permite fumar</p>';

    const mensajeMascotas = propiedad.pets
      ? '<p class="text-success">✔ Mascotas permitidas</p>'
      : '<p class="text-danger">⚠ No se permiten mascotas</p>';

    // Contenido en el contenedor
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p>${propiedad.descripcion}</p>
            <p>Ubicación: ${propiedad.ubicacion}</p>
            <p>${propiedad.habitaciones} habitaciones - $${propiedad.costo}</p>
            ${mensajeFumar}
            ${mensajeMascotas}
          </div>
        </div>
      </div>
    `;
  });
}

// Renderizar propiedades al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  renderizarPropiedades('alquiler-container', propiedadesAlquiler);
});
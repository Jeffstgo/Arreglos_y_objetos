// Arreglo principal
const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo",
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0YW1lbnRvfGVufDB8fDB8fHww",
    descripcion: "Un apartamento amplio con vista panorámica.",
    ubicacion: "Zona 1",
    habitaciones: 3,
    costo: 3000,
    smoke: true,
    pets: true,
  },
 ];

// Renderizar
function renderizarPropiedades(containerId, propiedades) {
  const container = document.getElementById(containerId);
  propiedades.forEach((propiedad) => {
    // condicionales
    const mensajeFumar = propiedad.smoke
      ? '<p class="text-success">✔ Permitido fumar</p>'
      : '<p class="text-danger">⚠ No se permite fumar</p>';

    const mensajeMascotas = propiedad.pets
      ? '<p class="text-success">✔ Mascotas permitidas</p>'
      : '<p class="text-danger">⚠ No se permiten mascotas</p>';

    // contenido en contenedor
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
document.addEventListener("DOMContentLoaded", () => {
  renderizarPropiedades("venta-container", propiedadesVenta);
});



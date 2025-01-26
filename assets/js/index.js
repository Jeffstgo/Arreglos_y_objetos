const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo",
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Amplio y moderno.",
    ubicacion: "Zona 1",
    habitaciones: 3,
    costo: 3000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa moderna",
    src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Con un gran jardín.",
    ubicacion: "Zona 2",
    habitaciones: 4,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Cabaña rústica",
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Ideal para desconectar.",
    ubicacion: "Zona 3",
    habitaciones: 2,
    costo: 2800,
    smoke: false,
    pets: false,
  },
];

const propiedadesAlquiler = [
  {
    nombre: "Casa familiar",
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Perfecta para familias.",
    ubicacion: "Zona 5",
    habitaciones: 4,
    costo: 2500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento céntrico",
    src: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "En el corazón de la ciudad.",
    ubicacion: "Zona 6",
    habitaciones: 2,
    costo: 1800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Cabaña en la montaña",
    src: "https://plus.unsplash.com/premium_photo-1664301254629-a93baecd1cf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Con vistas panorámicas.",
    ubicacion: "Zona 7",
    habitaciones: 3,
    costo: 2200,
    smoke: true,
    pets: true,
  },
];

// Función para renderizar las primeras 3 propiedades
function renderizarPropiedadesIndex(containerId, propiedades) {
  const container = document.getElementById(containerId);
  propiedades.slice(0, 3).forEach((propiedad) => {
    const mensajeFumar = propiedad.smoke
      ? '<p class="text-success">✔ Permitido fumar</p>'
      : '<p class="text-danger">⚠ No se permite fumar</p>';
    const mensajeMascotas = propiedad.pets
      ? '<p class="text-success">✔ Mascotas permitidas</p>'
      : '<p class="text-danger">⚠ No se permiten mascotas</p>';

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
  renderizarPropiedadesIndex("venta-container", propiedadesVenta);
  renderizarPropiedadesIndex("alquiler-container", propiedadesAlquiler);
});
function manejarPropiedades() {
  const urlParams = new URLSearchParams(window.location.search);
  const tipo = urlParams.get("tipo");
  const ventaContainer = document.getElementById("venta-container");
  const alquilerContainer = document.getElementById("alquiler-container");

  if (tipo === "venta") {
    // Mostrar solo propiedades en venta
    document.getElementById("venta").style.display = "block";
    document.getElementById("alquiler").style.display = "none";
    renderizarPropiedades("venta-container", propiedadesVenta);
  } else if (tipo === "alquiler") {
    // Mostrar solo propiedades en alquiler
    document.getElementById("venta").style.display = "none";
    document.getElementById("alquiler").style.display = "block";
    renderizarPropiedades("alquiler-container", propiedadesAlquiler);
  } else {
    // Mostrar ambas categorías si no se ha especificado un tipo
    document.getElementById("venta").style.display = "block";
    document.getElementById("alquiler").style.display = "block";
    renderizarPropiedades("venta-container", propiedadesVenta);
    renderizarPropiedades("alquiler-container", propiedadesAlquiler);
  }
}

// Llamar a la función para mostrar las propiedades según el parámetro en la URL
document.addEventListener("DOMContentLoaded", manejarPropiedades);

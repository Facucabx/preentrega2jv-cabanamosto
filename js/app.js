//Aca se carga la BD desde el Localstorage
const storedDatabase = localStorage.getItem("database");
const database = storedDatabase ? JSON.parse(storedDatabase) : [
    {
        nombre: "Juan",
        servicio: "cerrajero",
        telefono: "555-1234",
        ubicacion: "San Nicolás, Buenos Aires, Argentina",
        serviciosOfrecidos: ["Apertura de puertas", "Cambio de cerraduras"]
    },
    {
        nombre: "Esteban",
        servicio: "cerrajero",
        telefono: "555-1234",
        ubicacion: "San Nicolás, Buenos Aires, Argentina",
        serviciosOfrecidos: ["Apertura de puertas", "Cambio de cerraduras"]
    },
    {
        nombre: "María",
        servicio: "electricista",
        telefono: "555-5678",
        ubicacion: "San Nicolás, Buenos Aires, Argentina",
        serviciosOfrecidos: ["Instalación eléctrica", "Reparación de cortocircuitos"]
    },
    {
        nombre: "Carlos",
        servicio: "fletes",
        telefono: "555-9876",
        ubicacion: "San Nicolás, Buenos Aires, Argentina",
        serviciosOfrecidos: ["Mudanzas locales", "Transporte de carga"]
    },
    {
        nombre: "Laura",
        servicio: "gasista",
        telefono: "555-4321",
        ubicacion: "San Nicolás, Buenos Aires, Argentina",
        serviciosOfrecidos: ["Reparación de gas", "Instalación de tuberías"]
    },
    {
        nombre: "Pedro",
        servicio: "veterinario",
        telefono: "555-7890",
        ubicacion: "San Nicolás, Buenos Aires, Argentina",
        serviciosOfrecidos: ["Consultas médicas", "Vacunación de mascotas"]
    },
    {
        nombre: "Ana",
        servicio: "tecnico",
        telefono: "555-5555",
        ubicacion: "San Nicolás, Buenos Aires, Argentina",
        serviciosOfrecidos: ["Reparación de electrodomésticos", "Mantenimiento preventivo"]
    }
];

// Función para buscar los profesionales
function buscarProfesionales(servicio) {
    return database.filter(profesional => profesional.servicio === servicio);
}

// Función para mostrar resultados
function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = "<p>No se encontraron profesionales para el servicio seleccionado.</p>";
    } else {
        resultados.forEach(profesional => {
            const profesionalDiv = document.createElement("div");
            profesionalDiv.classList.add("profesional");

            const serviciosOfrecidos = profesional.serviciosOfrecidos.map(servicio => `<li>${servicio}</li>`).join("");

            profesionalDiv.innerHTML = `
          <h3>${profesional.nombre}</h3>
          <p><strong>Teléfono:</strong> ${profesional.telefono}</p>
          <p><strong>Ubicación:</strong> ${profesional.ubicacion}</p>
          <p><strong>Servicios ofrecidos:</strong></p>
          <ul>${serviciosOfrecidos}</ul>
        `;

            resultadosDiv.appendChild(profesionalDiv);
        });
    }
}

// Capturar evento de clic en el botón
const buscarBtn = document.getElementById("buscarBtn");
buscarBtn.addEventListener("click", () => {
    const servicioSelect = document.getElementById("servicio");
    const servicioBuscado = servicioSelect.value;
    const resultadosBusqueda = buscarProfesionales(servicioBuscado);
    mostrarResultados(resultadosBusqueda);
});

// Guardar la BD actualizada en el Localstorage
window.addEventListener("beforeunload", () => {
    localStorage.setItem("database", JSON.stringify(database));
});
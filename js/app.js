// Función para cargar profesionales desde un archivo JSON
async function cargarProfesionalesDesdeJSON() {
    try {
        const response = await fetch("./profesionales.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al cargar datos desde el archivo JSON", error);
        return [];
    }
}

// Función para buscar los profesionales en el archivo JSON
function buscarProfesionalesEnJSON(servicio, data) {
    return data.filter(profesional => profesional.servicio === servicio);
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
buscarBtn.addEventListener("click", async () => {
    const servicioSelect = document.getElementById("servicio");
    const servicioBuscado = servicioSelect.value;
    
    // Cargar los profesionales desde el archivo JSON
    const data = await cargarProfesionalesDesdeJSON();
    
    // Buscar los profesionales en los datos cargados desde el JSON
    const resultadosBusqueda = buscarProfesionalesEnJSON(servicioBuscado, data);
    
    // Mostrar los resultados
    mostrarResultados(resultadosBusqueda);
});

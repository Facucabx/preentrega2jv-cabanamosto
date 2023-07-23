        // Base de datos simulada de profesionales con más información
        const database = [
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

        // Función para buscar profesionales
        function buscarProfesionales(servicio) {
            const resultados = database.filter(profesional => profesional.servicio === servicio);
            return resultados;
        }

        // Función para mostrar resultados
        function mostrarResultados(resultados) {
            if (resultados.length === 0) {
                console.log("No se encontraron profesionales para el servicio seleccionado.");
            } else {
                console.log("--------------------------");
                console.log("Profesionales encontrados:");
                resultados.forEach(profesional => {
                    console.log("Nombre: " + profesional.nombre);
                    console.log("Teléfono: " + profesional.telefono);
                    console.log("Ubicación: " + profesional.ubicacion);
                    console.log("Servicios ofrecidos:");
                    profesional.serviciosOfrecidos.forEach(servicio => console.log("- " + servicio));
                    console.log("--------------------------");
                });
            }
        }

        // Capturar entrada del usuario
        const servicioBuscado = prompt("Ingrese el profesional que esta necesitando: (cerrajero, electricista, fletes, gasista, veterinario, técnico):").toLowerCase();

        // Realizar la búsqueda y mostrar resultados
        const resultadosBusqueda = buscarProfesionales(servicioBuscado);
        mostrarResultados(resultadosBusqueda);
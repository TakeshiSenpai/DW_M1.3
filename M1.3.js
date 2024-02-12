// Arreglo de líneas de código válidas
const lineasCodigoValidas = [
    "console.log('Ejecutando proceso A');",
    "console.log('Ejecutando proceso B');",
    "console.log('Ejecutando proceso C');",
    "console.log('Ejecutando proceso D');",
    "console.log('Ejecutando proceso E');"
];

// Función para elegir una cantidad aleatoria de líneas de código para cada proceso
function generarLineasCodigo() {
    const numLineas = Math.floor(Math.random() * lineasCodigoValidas.length) + 1;
    const lineas = [];
    for (let i = 0; i < numLineas; i++) {
        const indice = Math.floor(Math.random() * lineasCodigoValidas.length);
        lineas.push(lineasCodigoValidas[indice]);
    }
    return lineas;
}

// Función para inicializar los procesos
function inicializarProcesos(numProcesos) {
    const procesos = [];
    for (let i = 0; i < numProcesos; i++) {
        const proceso = {
            numero: i + 1,
            lineasCodigo: generarLineasCodigo(),
            lineaEjecutada: 0
        };
        procesos.push(proceso);
    }
    return procesos;
}

// Función para simular la ejecución de un turno
function simularTurno(proceso) {
    console.log(`Proceso ${proceso.numero}, línea ${proceso.lineaEjecutada + 1}: ${proceso.lineasCodigo[proceso.lineaEjecutada]}`);
    proceso.lineaEjecutada++;
}

// Función para empezar la simulación
function empezarSimulacion(numProcesos) {
    const procesos = inicializarProcesos(numProcesos);
    let indiceProcesoActual = 0;

    console.log("Comenzando simulación:");

    while (procesos.some(proceso => proceso.lineaEjecutada < proceso.lineasCodigo.length)) {
        const procesoActual = procesos[indiceProcesoActual];
        simularTurno(procesoActual);
        indiceProcesoActual = (indiceProcesoActual + 1) % numProcesos;
    }
}

// Leer número de procesos desde la línea de comandos
const numProcesos = parseInt(process.argv[2]);

// Empezar la simulación con el número de procesos especificado
empezarSimulacion(numProcesos);

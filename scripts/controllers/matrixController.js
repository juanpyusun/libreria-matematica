/*  VARIABLES Y CONSTANTES -----------------------------------------------------------*/
const VAR_TEMP = "x";

let contadorClicks = {
    A: 1,
    B: 1
};
const LIMITES_DIMENSIONES = {
    MAXIMA: 5,
    MINIMA: 1
};

/*  FUNCIONES -----------------------------------------------------------*/
function incrementarDimension(id) {
    if (contadorClicks[id] >= LIMITES_DIMENSIONES.MAXIMA) {
        return;
    }
    contadorClicks[id]++;
    dibujarMatrix(id, contadorClicks[id]);
}

function reducirDimension(id) {
    if (contadorClicks[id] <= LIMITES_DIMENSIONES.MINIMA) {
        return;
    }
    contadorClicks[id]--;
    dibujarMatrix(id, contadorClicks[id]);
}

function dibujarMatrix(id, dimension) {
    let matrixDiv = document.getElementById('matrix' + id.toUpperCase());
    matrixDiv.innerHTML = ''; // Limpiar cualquier contenido previo en el div

    for (let i = 0; i < dimension; i++) {
        let row = document.createElement('div'); // Crear un div para cada fila
        row.classList.add('row'); // Agregar la clase 'row' al div

        for (let j = 0; j < dimension; j++) {
            let input = document.createElement('input'); // Crear un input para cada celda
            input.type = 'text'; // Establecer el tipo de input a 'text'
            input.name = id.toUpperCase() + (i + 1) + (j + 1); // Establecer el nombre del input
            input.value = 0; // Establecer el valor inicial del input a 0
            input.classList.add('matrix-input'); // Agregar la clase 'matrix-input' al input
            row.appendChild(input); // Agregar el input a la fila
        }
        matrixDiv.appendChild(row); // Agregar la fila al div de la matriz
    }
}


/*  LISTENERS -----------------------------------------------------------*/

/* Listener click en link matrix*/
document.getElementById("link-matrix").addEventListener("click", function () {
    document.getElementById('main').innerHTML = "";
    document.getElementById('main').innerHTML = invocarUIMatrices("A");

    dibujarMatrix('A', contadorClicks.A);
    document.title = "Operaciones con matrices";

    document.getElementById("btnAccion-incrementarDimension").addEventListener("click", () => {
        incrementarDimension('A');
    });

    document.getElementById("btnAccion-reducirDimension").addEventListener("click", () => {
        reducirDimension('A');
    });
});

/* OTROS COMENTARIOS-----------------------------------------------------------*/

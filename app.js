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

function factorizar(numero) {
    let resultado = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            resultado.push(i);
        }
    }
    return resultado;
}

function descomponer(polinomio) {
    // Expresión regular para encontrar términos
    let regex = /\s?([+-])\s?/g;
    resultado = polinomio.replace(regex, (match, group1) => group1 === '-' ? ' -' : ' ').split(/\s+/);
    return resultado;
}

function descomponerToString(polinomio) {
    return polinomio.join("\n");
}

function descomponerToArrayWithDictionary(polinomio) {
    let terminos = [];
    for (let termino of polinomio) {
        if (termino === "") {
            continue;
        }
        let dictionary = {
            signo: '',
            coeficiente: '',
            variable: '',
            exponente: ''
        };
        // Analizar cada término y crear un diccionario
        let signo = termino[0] === '-' ? '-' : '+';

        let coeficiente = termino[0] === '-' ? Math.abs(termino.match(/[+-]?\d+/)[0]) : termino.match(/[+-]?\d+/)[0];
        let variable = termino.match(/[a-zA-Z]/);
        let exponente = termino.match(/\^(\d+)/);

        exponente = exponente ? exponente[1] : 1;
        exponente = variable ? exponente : 0;
        variable = variable ? variable[0] : VAR_TEMP;

        dictionary.signo = signo;
        dictionary.coeficiente = coeficiente;
        dictionary.variable = variable;
        dictionary.exponente = parseInt(exponente);
        terminos.push(dictionary);
    }
    let message = "";
    for (let termino of terminos) {
        message += ` ${termino.signo}${termino.coeficiente}${termino.variable}↑${termino.exponente}\n`;
    }
    return message; // para devolver el string
    //return terminos; para devolver el arreglo de diccionarios
}

/*  INVOCADORES UI -----------------------------------------------------------*/
function invocarUIFactorizar() {
    let message = `<div class="row">
                        <input type="number" id="inputNumber" placeholder="120">
                        <button id="btnAccion-factorizar">Factorizar</button>
                    </div>
                    <textarea id="txtResultado"></textarea>`;
    return message;
}
function invocarUIDescomponer() {
    let message = `<div class="row">
                        <input type="text" id="inputNumber" placeholder="4x^2-2x+10">
                        <button id="btnAccion-descomponer">Descomponer</button>
                    </div>
                    <textarea id="txtResultado"></textarea>`;
    return message;
}

function invocarUIMatrices(letra) {
    let message = `<article class="matrix-container">
                        <section class="matrix" id="matrix${letra}"></section>
                        <section class="matrix-helper">
                            <button id="btnAccion-incrementarDimension">+</button>
                            <button id="btnAccion-reducirDimension">-</button>
                        </section>
                    </article>`;
    return message;
}
/*  LISTENERS -----------------------------------------------------------*/
/* Listener LOAD*/
document.addEventListener("load", function () {
    document.getElementById('main').innerHTML = `<img src="Muñeco.png" alt="">`;
});

/* Listener click en link factorizacion*/
document.getElementById("link-factorizacion").addEventListener("click", function () {
    document.getElementById('main').innerHTML = "";
    document.getElementById('main').innerHTML = invocarUIFactorizar();
    document.getElementById("main").style.display = "grid";
    document.title = "Factorización de números";

    document.getElementById("btnAccion-factorizar").addEventListener("click", () => {
        let numero = document.getElementById("inputNumber").value;
        let message = factorizar(numero);
        message = message.map((element) => {
            return "  " + element + "  ";
        });
        document.getElementById("txtResultado").innerHTML = message;
    });

    document.getElementById("btnAccion-factorizar").addEventListener("dblclick", () => {
        document.getElementById("txtResultado").innerHTML = "";
    });
});

/* Listener click en link descomposicion*/
document.getElementById("link-descomposicion").addEventListener("click", function () {
    document.getElementById('main').innerHTML = "";
    document.getElementById('main').innerHTML = invocarUIDescomponer();
    document.getElementById("main").style.display = "grid";
    document.title = "Descomposición de polinomios";

    document.getElementById("btnAccion-descomponer").addEventListener("click", () => {
        let expresion = document.getElementById("inputNumber").value;
        expresion = descomponer(expresion);
        expresion = descomponerToArrayWithDictionary(expresion);
        document.getElementById("txtResultado").innerHTML = expresion;
    });

    document.getElementById("btnAccion-descomponer").addEventListener("dblclick", () => {
        document.getElementById("txtResultado").innerHTML = "";
    });


});

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

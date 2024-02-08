const VAR_TEMP = "x";
/* Functions*/

function escribirTxtArea(message) {
    document.getElementById("txtResultado").innerHTML = message;
}
function borrarTxtArea() {
    document.getElementById("txtResultado").innerHTML = "";
}

function descomponer(polinomio){
    // Expresión regular para encontrar términos
    let regex = /\s?([+-])\s?/g;
    resultado = polinomio.replace(regex, (match, group1) => group1 === '-' ? ' -' : ' ').split(/\s+/);    
    return resultado;
}

function descomponerToString(polinomio){
    return polinomio.join("\n");
}
function descomponerToArrayWithDictionary(polinomio){
    let terminos = [];
    for(let termino of polinomio){
        if (termino === ""){
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
        let coeficiente = termino[0] === '-' ? termino.match(/[+-]?\d+/)[0][1] : termino.match(/[+-]?\d+/)[0];
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
        console.log(dictionary);
    }
    let message = "";
    for(let termino of terminos){
        message += ` ${termino.signo}${termino.coeficiente}${termino.variable}↑${termino.exponente}\n`;
    }
    return message; // para devolver el string
    //return terminos; para devolver el arreglo de diccionarios
}

/* Listeners*/

document.getElementById("btnAccion").addEventListener("click", () => {
    let expresion = document.getElementById("inputNumber").value;
    expresion = descomponer(expresion);
    //expresion = descomponerToString(expresion);
    expresion = descomponerToArrayWithDictionary(expresion);
    escribirTxtArea(expresion);
});
document.getElementById("btnAccion").addEventListener("dblclick", borrarTxtArea);
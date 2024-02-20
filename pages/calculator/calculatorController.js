/*  VARIABLES Y CONSTANTES -----------------------------------------------------------*/
import { Polinomio } from '../../lib/polinomio.js';

/*  FUNCIONES -----------------------------------------------------------*/
function isInputExpressionEmpty(expression) {
    return expression === "";
}

function isInputExpressionValid(expression) {
    //[FALTA]: implementar validación de expresión
    return false;
}

function cleanInputExpression(expression) {
    let expressionTEMP = expression.split(" ");
    for (let i = 0; i < expressionTEMP.length - 1; i++) {
        //poniendo la entrada en mayusculas excepto el ultimo elemento que suele ser el polinomio
        expressionTEMP[i] = expressionTEMP[i].toUpperCase();
    }
    expression = expressionTEMP.join(" ");
    return expression;
}
/*  INVOCADORES UI -----------------------------------------------------------*/
/*  LISTENERS -----------------------------------------------------------*/
document.getElementById('btnAction').addEventListener('click', () => {
    let expression = document.getElementById('inputExpression').value;

    if (isInputExpressionEmpty(expression)) {
        alert("Ingrese una expresión");
        return;
    }

    expression = cleanInputExpression(expression); 

    if (isInputExpressionValid(expression)) {
        alert("Ingrese una expresión valida");
        return;
    }

    expression = expression.split(" ");
    switch (expression[0]) {
        case "ORDENAR":
            if(expression.length < 3){
                document.getElementById('result').innerText = "No se reconoce la operación";
                break;
            }

            var p = new Polinomio(expression[2]);

            if(expression[1] === "ASC"){
                document.getElementById('result').innerText = p.orderByAsc();
            }

            if(expression[1] === "DESC"){
                document.getElementById('result').innerText = p.orderByDesc();
            }
            break;
        case "DESCRIBIR":
            var p = new Polinomio(expression[1]);
            document.getElementById('result').innerText = p.describe();     
            break;
        default:
            document.getElementById('result').innerText = "No se reconoce la operación";
    }
});

/* OTROS COMENTARIOS-----------------------------------------------------------*/
/*
const operacion = (a,b,op) => { 
    return op(a, b);
}
console.log(operacion(1, 3, suma)); // Output: 4
const suma = (a, b) => {
    return a + b;
}
*/


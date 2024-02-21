/*  VARIABLES Y CONSTANTES ------------------------------------------------------------*/
import { Polynomial } from '../classes/polynomial.js';

/* FUNCIONES --------------------------------------------------------------------------*/

/**
 * Checks if the input expression is empty.
 *
 * @param {string} expression - The input expression to check.
 * @returns {boolean} Returns true if the expression is empty, otherwise false.
 */
function isInputExpressionEmpty(expression) {
    return expression === "";
}

/**
 * Checks if the input expression is valid.
 *
 * @param {string} expression - The input expression to validate.
 * @returns {boolean} - True if the expression is valid, false otherwise.
 * @todo Implementar validación de expresión.
 */
function isInputExpressionValid(expression) {
    return false;
}

/**
 * Cleans the input expression by converting all elements to uppercase, except the last element.
 * 
 * @param {string} expression - The input expression to be cleaned.
 * @returns {string} - The cleaned expression.
 */
function cleanInputExpression(expression) {
    let expressionTEMP = expression.split(" ");
    for (let i = 0; i < expressionTEMP.length - 1; i++) {
        expressionTEMP[i] = expressionTEMP[i].toUpperCase();
    }
    expression = expressionTEMP.join(" ");
    return expression;
}

/*  LISTENERS -------------------------------------------------------------------------*/
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

            var p = new Polynomial(expression[2]);

            if(expression[1] === "ASC"){
                document.getElementById('result').innerText = p.orderByAsc();
            }

            if(expression[1] === "DESC"){
                document.getElementById('result').innerText = p.orderByDesc();
            }
            break;
        case "DESCRIBIR":
            var p = new Polynomial(expression[1]);
            document.getElementById('result').innerText = p.describe();     
            break;
        default:
            document.getElementById('result').innerText = "No se reconoce la operación";
    }
});

/* OTROS COMENTARIOS-------------------------------------------------------------------*/



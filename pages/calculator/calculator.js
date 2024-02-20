/*  VARIABLES Y CONSTANTES -----------------------------------------------------------*/
/*  FUNCIONES -----------------------------------------------------------*/
/*  INVOCADORES UI -----------------------------------------------------------*/
/*  LISTENERS -----------------------------------------------------------*/
document.getElementById('btnAction').addEventListener('click', () => {
    let expression = document.getElementById('inputExpression').value;
    document.getElementById('result').innerHTML = expression;
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


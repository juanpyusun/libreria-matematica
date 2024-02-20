/*  VARIABLES Y CONSTANTES -----------------------------------------------------------*/
import {Polinomio} from '../../lib/polinomio.js';

/*  FUNCIONES -----------------------------------------------------------*/
/*  INVOCADORES UI -----------------------------------------------------------*/
/*  LISTENERS -----------------------------------------------------------*/
document.getElementById('btnAction').addEventListener('click', () => {
    let expression = document.getElementById('inputExpression').value;
    let p = new Polinomio(expression);

    console.log(p.toMap());
    console.log(p.orderByAsc());
    //document.getElementById('result').innerHTML = p.toMap();
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


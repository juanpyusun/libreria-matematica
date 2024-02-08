/* Functions*/

function escribirTxtArea(message) {
    document.getElementById("txtResultado").innerHTML = message;
}
function borrarTxtArea() {
    document.getElementById("txtResultado").innerHTML = "";
}

function factorizar(numero){
    let resultado = [];
    for(let i = 1; i <= numero; i++ ){
        if(numero % i == 0){
            resultado.push(i);
        }    
    }
    return resultado;
}

/* Listeners*/

document.getElementById("btnAccion").addEventListener("click", () => {
    let numero = document.getElementById("inputNumber").value;
    let message = factorizar(numero);
    message = message.map((element) => {
        return "  "+ element + "  ";
    });
    escribirTxtArea(message);

});
document.getElementById("btnAccion").addEventListener("dblclick", borrarTxtArea);
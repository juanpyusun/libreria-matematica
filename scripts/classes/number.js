export class Number{

    constructor(numero) {
        this.numero = parseInt(numero);
    }

factorizar(numero) {
    let resultado = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            resultado.push(i);
        }
    }
    return resultado;
}
factorizarToString(numero) {
    let message = factorizar(numero);
    message = message.map((element) => {
        return "  " + element + "  ";
    });
    return message;
}



}
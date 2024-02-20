export class Polinomio {

    constructor(polinomio) {
        // Expresión regular para encontrar términos y seprarlos en un arreglo
        let regex = /\s?([+-])\s?/g;
        let polinomioAsArray = polinomio.replace(regex, (match, group1) => group1 === '-' ? ' -' : ' ').split(/\s+/);

        // Eliminar el primer elemento si es un string vacío (esto sucede si el polinomio empieza con un signo negativo)
        if (polinomioAsArray[0] === "") {
            polinomioAsArray.shift();
        }

        // Asignar el arreglo de términos al objeto de la clase
        this.polinomio = polinomioAsArray;
    }

    derivar() {
        // Derivando ando
    }

    evaluar(x) {
        // Evaluando ando
    }

    orderByAsc() {
        let pArray = this.toMap();

        for(let i = 0; i<pArray.length; i++) {
            for(let j = 0; j<pArray.length; j++) {
                if(pArray[i].exponente < pArray[j].exponente) {
                    let temp = pArray[i];
                    pArray[i] = pArray[j];
                    pArray[j] = temp;
                }
            }            
        }
        return pArray;
    }

    orderByDesc() {
        let pArray = this.toMap();
        for(let i = 0; i<pArray.length; i++) {
            for(let j = 0; j<pArray.length; j++) {
                if(pArray[i].exponente > pArray[j].exponente) {
                    let temp = pArray[i];
                    pArray[i] = pArray[j];
                    pArray[j] = temp;
                }
            }            
        }
        return pArray;
    }

    toMap() {
        // se usara por defecto la variable x
        const VAR_TEMP = "x";

        // Crear un arreglo de diccionarios con los elementos de cada termino, venimos de un array de strings y
        // y ahora se devolvera un array de objetos con la forma {signo: '', coeficiente: '', variable: '', exponente: ''}
        let terminos = [];
        for (let termino of this.polinomio) {
            let dictionary = {
                signo: '',
                coeficiente: '',
                variable: '',
                exponente: ''
            };

            // Analizar cada término y crear un diccionario
            let signo = termino[0] === '-' ? '-' : '+';

            //[CORREGIR]: el coeficiente no se esta tomando en cuenta si el termino es + o - pero sin valor numerico
            let coeficiente = termino[0] === '-' ? Math.abs(termino.match(/[+-]?\d+/)[0]) : termino.match(/[+-]?\d+/)[0];
            /*
            let coeficiente;
            
            if (termino[0] === '-') {
                coeficiente = termino.match(/d+(?=[a-zA-Z])/);
            } else if (termino.match(/[+-]?\d+(?=[a-zA-Z]+)/) === null) {
                console.log("no hay coeficiente");
                coeficiente = 1;
            } else {
                coeficiente = termino.match(/[+-]?\d+/)[0];
            }
            
            
            let coeficiente = termino[0] === '-' ? Math.abs(termino.match(/[+-]?\d+/)?.[0] || 1) : termino.match(/[+-]?\d+/)?.[0] || 1;
            */

            // [FALTA]: implementar reconocimiento para varias variables
            let variable = termino.match(/[a-zA-Z]/);
            
            // Exponente, string extraido de cada termino, los numeros "d" despues del simbolo ^, si no hay simbolo ^ se toma como 1
            let exponente = termino.match(/\^(\d+)/);
            exponente = exponente ? exponente[1] : 1;

            // Si no hay variable, el exponente es 0 y la variable por defecto es x
            exponente = variable ? exponente : 0;
            variable = variable ? variable[0] : VAR_TEMP;

            dictionary.signo = signo;
            dictionary.coeficiente = coeficiente;
            dictionary.variable = variable;
            dictionary.exponente = parseInt(exponente);
            terminos.push(dictionary);
        }

        return terminos;
    }

    toString() {
        let polinomioToString = this.polinomio;
        return polinomioToString.join(", ");
    }
}
/* TESTING -------------------------------------*/
/*
p = new Polinomio("-x^2 + 2x - 2");
console.log("a string");
console.log(p.toString());
console.log("a mapa");
console.log(p.toMap());
console.log("mostrandolo como polinomio (objeto)");
console.log(p);


//SOBRECARGA DE METODOS
function CatStrings(p1, p2, p3)
{
  var s = p1;
  if(typeof p2 !== "undefined") {s += p2;}
  if(typeof p3 !== "undefined") {s += p3;}
  return s;
};

CatStrings("one");        // result = one
CatStrings("one",2);      // result = one2
CatStrings("one",2,true); // result = one2true
*/
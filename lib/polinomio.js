export class Polinomio {

    constructor(polinomio) {
        // Expresión regular para encontrar términos y seprarlos en un arreglo
        let regex = /\s?([+-])\s?/g;
        let polinomioAsArray = polinomio.replace(regex, (match, group1) => group1 === '-' ? ' -' : ' ').split(/\s+/);

        // Eliminar el primer elemento si es un string vacío (esto sucede si el polinomio empieza con un sign negativo)
        if (polinomioAsArray[0] === "") {
            polinomioAsArray.shift();
        }

        // Asignar el arreglo de términos al objeto de la clase
        this.polinomio = polinomioAsArray;
    }

    deg(){
        let pMap = this.toMap();
        let max = 0;
        for (let i = 0; i < pMap.length; i++) {
            if (pMap[i].exponent > max) {
                max = pMap[i].exponent;
            }
        }
        return max;
    }

    describe() {
        let message = "";
        let p = this.orderByAsc();
        message += "-->DESCRIPCION DEL POLINOMIO:\n";
        message += `Maximo Grado: ${p.deg()}\n`;
        message += `Nombre según su grado: ${p.classifyByDeg()}\n`;
        message += `Cantidad de términos: ${p.toMap().length}\n`;
        message += `Nombre segun su cantidad de términos: ${p.classifyByTerms()}\n`;
        if(p.toMap()[0].exponent === 0 && p.toMap()[0].sign === "+"){
            message += `Termino independiente: ${p.toMap()[0].coefficient}\n`;
        }
        else if(p.toMap()[0].exponent === 0 && p.toMap()[0].sign === "-"){
            message += `Termino independiente: ${p.toMap()[0].sign}${p.toMap()[0].coefficient}\n`;
        }
        else{
            message += "Termino independiente: 0\n";
        }

        message += "--------------------------------\n";
        for(let term of p.toMap()){
            message += `Signo: ${term.sign}\n`;
            message += `Coeficiente:${term.coefficient}\n`;
            message += `Variable: x\n`;
            message += `Exponente: ${term.exponent}\n`;
        }

        return message;
    }

    classifyByDeg() {
        let deg = this.deg();
        if (deg === 0) {
            return "constante";
        }
        else if (deg === 1) {
            return "lineal";
        }
        else if (deg === 2) {
            return "cuadrática";
        }
        else if (deg === 3) {
            return "cúbica";
        }
        else if (deg >= 4) {
            return "grado" + deg;
        }
    }

    classifyByTerms() {
        let pMap = this.toMap();

        let terms = pMap.length;

        if (terms === 1) {
            return "monomio";
        }
        else if (terms === 2) {
            return "binomio";
        }
        else if (terms === 3) {
            return "trinomio";
        }
        else if (terms >= 4) {
            return "polinomio";
        }
    }

    derivate() {
        // Derivando ando
    }

    evaluate(x) {
        // Evaluando ando
    }

    integrate() {
        // Integrando ando
    }

    orderByAsc() {
        let pMap = this.toMap();

        for (let i = 0; i < pMap.length; i++) {
            for (let j = 0; j < pMap.length; j++) {
                if (pMap[i].exponent < pMap[j].exponent) {
                    let temp = pMap[i];
                    pMap[i] = pMap[j];
                    pMap[j] = temp;
                }
            }
        }
        return Polinomio.toPolynomial(pMap);
    }

    orderByDesc() {
        let pMap = this.toMap();
        for (let i = 0; i < pMap.length; i++) {
            for (let j = 0; j < pMap.length; j++) {
                if (pMap[i].exponent > pMap[j].exponent) {
                    let temp = pMap[i];
                    pMap[i] = pMap[j];
                    pMap[j] = temp;
                }
            }
        }
        return Polinomio.toPolynomial(pMap);
    }

    toMap() {
        // se usara por defecto la variable x
        const VAR_TEMP = "x";

        // Crear un arreglo de diccionarios con los elementos de cada termino, venimos de un array de strings y
        // y ahora se devolvera un array de objetos con la forma {sign: '', coefficient: '', variable: '', exponent: ''}
        let terminos = [];
        for (let termino of this.polinomio) {
            let dictionary = {
                sign: '',
                coefficient: '',
                variable: '',
                exponent: ''
            };

            // Determinar el sign del término
            let sign = termino[0] === '-' ? '-' : '+';
            dictionary.sign = sign;

            // Determinar el coefficient del término
            let coefficientMatch = termino.match(/[+-]?\d+/);

            let coefficient = coefficientMatch=== null ?  1 : Math.abs(coefficientMatch[0]);
            dictionary.coefficient = coefficient;
            dictionary.coefficient = coefficient;

            // [FALTA]: implementar reconocimiento para varias variables, mientras tanto siempre se usara x
            let variableMatch = termino.match(/[a-zA-Z]/); // Si no existe la variable se usara este resultado
            dictionary.variable = VAR_TEMP; // Exista o no variable, sera VAR_TEMP

            //  Determinar el exponent del término
            let exponentMatch = termino.match(/\^(\d+)/);
            let exponent = exponentMatch ? exponentMatch[1] : 1;
            exponent = variableMatch ? exponent : 0;
            dictionary.exponent = parseInt(exponent);

            // Agregar el diccionario al arreglo de términos
            terminos.push(dictionary);
        }

        return terminos;
    }

    toString() {
        let polinomioToString = this.polinomio;
        return polinomioToString.join(", ");
    }

    static toPolynomial(polynomialAsMap) {
        let polynomialAsArray = [];
        for (let termino of polynomialAsMap) {
            let sign = termino.sign;
            let coefficient = termino.coefficient;
            let variable = termino.variable;
            let exponent = termino.exponent;

            let terminoToString = sign + (coefficient === 1 ? "" : coefficient) + (exponent > 0 ? variable : "") + (exponent > 1 ? "^" + exponent : "");
            polynomialAsArray.push(terminoToString);
        }
        let p = new Polinomio(polynomialAsArray.join(""));
        return p;
    }
}
/*
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
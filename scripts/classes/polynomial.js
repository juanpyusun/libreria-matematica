export class Polynomial {

    /**
     * Creates a Polynomial object.
     * @param {string} polynomial - The polynomial expression as a string.
     */
    constructor(polynomial) {
        // Expresión regular para encontrar términos y separarlos en un arreglo
        let regex = /\s?([+-])\s?/g;
        let polynomialAsArray = polynomial.replace(regex, (match, group1) => group1 === '-' ? ' -' : ' ').split(/\s+/);

        // Eliminar el primer elemento si es un string vacío (esto sucede si el polinomio empieza con un sign negativo)
        if (polynomialAsArray[0] === "") {
            polynomialAsArray.shift();
        }

        // Asignar el arreglo de términos al objeto de la clase
        this.polynomial = polynomialAsArray;
    }

    /**
     * Returns the degree of the polynomial.
     * @returns {number} The degree of the polynomial.
     */
    deg(){
        let polynomialAsMap = this.toMap();
        let maxDeg = 0;
        for (let i = 0; i < polynomialAsMap.length; i++) {
            if (polynomialAsMap[i].exponent > maxDeg) {
                maxDeg = polynomialAsMap[i].exponent;
            }
        }
        return maxDeg;
    }

    /**
     * Returns a description of the polynomial.
     * @returns {string} The description of the polynomial.
     */
    describe() {
        let message = "";
        let p = this.orderByAsc();
        message += "-->DESCRIPCIÓN DEL POLINOMIO:\n";
        message += `Máximo Grado: ${p.deg()}\n`;
        message += `Nombre según su grado: ${p.classifyByDeg()}\n`;
        message += `Cantidad de términos: ${p.toMap().length}\n`;
        message += `Nombre según su cantidad de términos: ${p.classifyByTerms()}\n`;
        if(p.toMap()[0].exponent === 0 && p.toMap()[0].sign === "+"){
            message += `Término independiente: ${p.toMap()[0].coefficient}\n`;
        }
        else if(p.toMap()[0].exponent === 0 && p.toMap()[0].sign === "-"){
            message += `Término independiente: ${p.toMap()[0].sign}${p.toMap()[0].coefficient}\n`;
        }
        else{
            message += "Término independiente: No tiene\n";
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

    /**
     * Classifies the polynomial by its degree.
     * @returns {string} The classification of the polynomial by its maximum degree.
     */
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

    /**
     * Classifies the polynomial by the number of terms.
     * @returns {string} The classification of the polynomial by its number of terms.
     */
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

    /**
     * Orders the polynomial in ascending order based on the exponent of each term.
     * @returns {Polynomial} The polynomial object with terms ordered in ascending order.
     */
    orderByAsc() {
        let polynomialAsMap = this.toMap();

        for (let i = 0; i < polynomialAsMap.length; i++) {
            for (let j = 0; j < polynomialAsMap.length; j++) {
                if (polynomialAsMap[i].exponent < polynomialAsMap[j].exponent) {
                    let temp = polynomialAsMap[i];
                    polynomialAsMap[i] = polynomialAsMap[j];
                    polynomialAsMap[j] = temp;
                }
            }
        }
        return Polynomial.toPolynomial(polynomialAsMap);
    }

    /**
     * Orders the polynomial in descending order based on the exponent of each term.
     * @returns {Polynomial} The polynomial object with terms ordered in descending order.
     */
    orderByDesc() {
        let polynomialAsMap = this.toMap();
        for (let i = 0; i < polynomialAsMap.length; i++) {
            for (let j = 0; j < polynomialAsMap.length; j++) {
                if (polynomialAsMap[i].exponent > polynomialAsMap[j].exponent) {
                    let temp = polynomialAsMap[i];
                    polynomialAsMap[i] = polynomialAsMap[j];
                    polynomialAsMap[j] = temp;
                }
            }
        }
        return Polinomio.toPolynomial(polynomialAsMap);
    }

    /**
     * Converts the polynomial to an array of dictionaries representing each term.
     * Each dictionary contains the sign, coefficient, variable, and exponent of the term.
     * If no variable is present in a term, the default variable "x" is used.
     * @returns {Array} An array of dictionaries representing each term of the polynomial.
     */
    toMap() {
        // se usara por defecto la variable x
        const VAR_TEMP = "x";

        // Crear un arreglo de diccionarios con los elementos de cada termino, venimos de un array de strings y
        // y ahora se devolverá un array de objetos con la forma {sign: '', coefficient: '', variable: '', exponent: ''}
        let terms = [];
        for (let term of this.polynomial) {
            let dictionary = {
                sign: '',
                coefficient: '',
                variable: '',
                exponent: ''
            };

            // Determinar el sign del término
            let sign = term[0] === '-' ? '-' : '+';
            dictionary.sign = sign;

            // Determinar el coefficient del término
            let coefficientMatch = term.match(/[+-]?\d+/);

            let coefficient = coefficientMatch=== null ?  1 : Math.abs(coefficientMatch[0]);
            dictionary.coefficient = coefficient;
            dictionary.coefficient = coefficient;

            // [FALTA]: implementar reconocimiento para varias variables, mientras tanto siempre se usara x
            let variableMatch = term.match(/[a-zA-Z]/); // Si no existe la variable se usara este resultado
            dictionary.variable = VAR_TEMP; // Exista o no variable, sera VAR_TEMP

            //  Determinar el exponent del término
            let exponentMatch = term.match(/\^(\d+)/);
            let exponent = exponentMatch ? exponentMatch[1] : 1;
            exponent = variableMatch ? exponent : 0;
            dictionary.exponent = parseInt(exponent);

            // Agregar el diccionario al arreglo de términos
            terms.push(dictionary);
        }

        return terms;
    }

    /**
     * Returns a string representation of the polynomial.
     * @returns {string} The string representation of the polynomial.
     */
    toString() {
        let polynomialToString = this.polynomial;
        return polynomialToString.join(", ");
    }

    /**
     * Converts a polynomial represented as a map to a polynomial object.
     * @param {Array} polynomialAsMap - The polynomial represented as an array of dictionaries representing each term of the polynomial.
     * @returns {Polinomio} - The polynomial object.
     */
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
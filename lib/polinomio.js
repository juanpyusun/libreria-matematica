class Polinomio {

    constructor(polinomio) {
        // Expresión regular para encontrar términos
        let regex = /\s?([+-])\s?/g;
        polinomio = polinomio.replace(regex, (match, group1) => group1 === '-' ? ' -' : ' ').split(/\s+/);
        if (polinomio[0] === "") {
            polinomio.shift();
        }
        this.polinomio = polinomio;
    }

    evaluar(x) {
        // Evaluando ando
    }

    derivar() {
        // Derivando ando
    }

    toString() {
        let polinomioToString = this.polinomio;
        return polinomioToString.join(", ");
    }

    toMap() {
        const VAR_TEMP = "x";
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
           let coeficiente = termino[0] === '-' ? Math.abs(termino.match(/[+-]?\d+/)[0]) : termino.match(/[+-]?\d+/)[0];

            

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
        }

        return terminos;
    }
}

p = new Polinomio("-x^2 + 2x - 2");
console.log("a string");
console.log(p.toString());
console.log("a mapa");
console.log(p.toMap());
console.log("mostrandolo como polinomio (objeto)");
console.log(p);
# Documentación de Comandos de  la calculadora

## Introducción
Esta documentación detalla los comandos disponibles en la aplicación junto con ejemplos de uso y ejemplos de código.

## Indice
- [Documentación de Comandos de  la calculadora](#documentación-de-comandos-de--la-calculadora)
  - [Introducción](#introducción)
  - [Indice](#indice)
  - [Comandos](#comandos)
    - [Comando 1: ```DESCRIBIR```](#comando-1-describir)
      - [Detalles](#detalles)
      - [Uso](#uso)
      - [Argumentos](#argumentos)
      - [Ejemplo de entrada](#ejemplo-de-entrada)
      - [Ejemplo de salida](#ejemplo-de-salida)
  - [OBSERVACIONES IMPORTANTES](#observaciones-importantes)
    - [Sobre los términos y polinomios](#sobre-los-términos-y-polinomios)

## Comandos

### Comando 1: ```DESCRIBIR```
Descripción: Brinda toda la informacion de un polinomio

#### Detalles
- __version__ : 1.0
- __fecha_ultima_revision__ : 20/02/2024 

#### Uso
```
DESCRIBIR [polinomio]
```

#### Argumentos
- __polinomio__ : OBLIGATORIO, cadena de caracteres que puede o no contener:
  - los numeros del cero al nueve 0-9
  - la letra x minuscula
  - los caracteres + - ^
  - cumplir con la [estructura de polinomios](#sobre-los-t%C3%A9rminos-y-polinomios)

#### Ejemplo de entrada
```
DESCRIBIR 4x^2-2x+1
```

#### Ejemplo de salida
```
DESCRIPCION DEL POLINOMIO:
Maximo Grado: 2
Nombre según su grado: cuadrática
Cantidad de términos: 2
Nombre segun su cantidad de términos: binomio
Termino independiente: No tiene
--------------------------------
Signo: -
Coeficiente:2
Variable: x
Exponente: 1
Signo: +
Coeficiente:4
Variable: x
Exponente: 2
```
## OBSERVACIONES IMPORTANTES

### Sobre los términos y polinomios
> [!WARNING]
> __Un termino__ matemático está formado por:
> - __PRIMERO__ el signo; el signo menos (-) siempre se pone, el signo mas (+) siempre se pone, PERO, si el primer termino de un polinomio es positivo, se suele omitir
> - __SEGUNDO__ el coeficiente; un valor numérico entero, si el coeficiente es uno (1) se suele omitir escribirlo, asimismo, si no se ve coeficiente presente, se supondra entonces que es uno (1)
> - __TERCERO__ la variable, letra x minuscula
> - __CUARTO__ el simbolo ^, 
> - __QUINTO__ el exponente, valor numerico entero positivo
> - Si el exponente es cero (0) se omite escribir la variable, el simbolo ^ y el exponente, asimismo, si no se ve variable presente en un termino que pertenece a un polinomio cuyos otros terminos contienen la letra x, se supondra entonces que tambien la posee y su exponente asociado es cero (0)
> - Si el exponente es uno (1) se suele omite escribir el exponente y el simbolo ^, asimismo, si se ve presente un termino que contiene la variable x pero no contiene ni simbolo ^ ni exponente, entonces se supondra el valor de uno (1) para el exponente
> - Si el coeficiente es cero (0), se omite escribir la variable, el simbolo ^, el exponente, el signo y el mismo coeficiente, en  otras palabras: _"desaparece el termino"_ , solo cuando sea necesario conservar algo de ese termino, se escribe unicamente el coeficiente y mientras que el termino no sea el primero del polinomio, se escribira entonces el signo positivo
>
>__Un polinomio__ matematico está formado por uno o mas terminos escritos uno seguido de otro sin espacio entre los caracteres que lo componen
/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

const numeroPar = (num = 0) => 
(num === 0)
 ? console.info('Escriba un número mayor a 1')
 : (Number.isInteger(num) === false)
    ? console.info('El número no es un entero')
    : (num % 2 === 0)
      ? console.info('El numero es par')
      : console.info('El numero es impar')

numeroPar(12)
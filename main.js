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

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

const vocalesConsonantes = (cadena = "") => {
  if (cadena === "") return console.warn('Escriba una cadena de texto')
  if (typeof cadena !== 'string') return console.warn ('Solo se aceptan datos tipo cadena')

  cadena = cadena.toLowerCase()
  
  let consonantes = 0;
  let vocales = 0;

  for (const e of cadena){
    if (new RegExp ("[a,e,i,o,u,á,é,í,ó,ú]").test(e)){
      vocales++
    } else if (new RegExp ("[b,c,d,f,g,h,j,k,l,m,n,ñ,p,q,r,s,t,v,w,x,y,z]")){
      consonantes++
    } else {
      console.warn('Esto no debería aparecer')
    }
  } 
  return console.log(`El texto tiene ${consonantes} consonantes y ${vocales} vocales`)
}

vocalesConsonantes("como estamos comparito")


/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

const nombreValido = (cadena = "") => {
  if (cadena === "") return console.warn ('Escriba algo')
  if (typeof cadena !== 'string') return console.warn ('Escriba un dato tipo cadena')

  let caracterInvalido = false;

  let expReg = /^[A-Za-zÑñÁáÉéíÍóÓúÚ\s]+$/g.test(cadena);

return (expReg)
? console.info('El nombre es válido')
: console.info ('El nombre es inválido')
}

nombreValido('aln!so')



/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */


const emailValido = (email = "") => {
  if (email === "") return console.warn ('Escriba una cadena de texto')
  if (typeof email !== 'string') return console.warn('Solo se aceptan datos tipo string')

  let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

  return (expReg)
  ? console.info('El email es válido')
  : console.info ('El email es inválido')
}

emailValido('hola@hola.com')

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */


const numerosAlCuadrado = (numeros = undefined) => {

  if (numeros === undefined) return console.warn('Escriba un número')
  if (Array.isArray(numeros) !== true) return console.warn('Escriba un dato numérico')

  const nuevoArray = [];

  for (const n of numeros){
    nuevoArray.push(Math.pow(n,2))
  }

  console.log(nuevoArray)

}

numerosAlCuadrado([1,2,3])

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

const altoBajo = (numeros = undefined) => {

  if (numeros === undefined) return console.warn('Escriba un número')
  if (Array.isArray(numeros) !== true) return console.warn('Escriba un array de números')

  console.log(...numeros)


  const numeroAlto = Math.max(...numeros)
  const numeroBajo = Math.min(...numeros)

  console.log(numeroAlto,numeroBajo)
}
altoBajo([1,2,3,-60])


/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

const paresImpares = (numeros = undefined) => {

  let numerosPares = [];
  let numerosImpares = [];

  for (i = 0; i < numeros.length; i++){
    if (i % 2 === 0){
      numerosPares.push(i)
    } else {
      numerosImpares.push(i)
    }
  }

  console.log(`
  Números pares: ${numerosPares}
  Números Impares: ${numerosImpares}`)
}

paresImpares([1,2,3,4,5,6,7,8,9,0])


/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */



/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */



/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

const sacarPromedio = (num) => {
  if (num === 0) return console.warn('Escriba un array de números')
  if (Array.isArray(num) !== true) return console.warn('Solo se permiten array de números')

  let resultado = 0

  for (let n of num){

    resultado += n

  }

  let promedio = resultado/num.length

  console.log(promedio)
}

sacarPromedio([9,8,7,6,5,4,3,2,1,0])




/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

const arrayAlCuadrado = (numeros = undefined) => {
  if (numeros === undefined) return console.warn('Escriba una cadena de números')
  if (!(numeros instanceof Array)) return console.warn('Escriba un array')
  numeros.forEach(function (n){
    if (typeof n !== 'number'){
      return console.warn('Existen elementos de tipo no-numérico')
    }
  })

  const arrayElevado = numeros.map(num => num*num)

  return console.info(arrayElevado)
}

arrayAlCuadrado([1,2,3,5])



/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */



/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

const imparesPares = (numeros = undefined) => {
  if (numeros === undefined) return console.warn('Escriba números')
  if (!(numeros instanceof Array)) return console.warn('Escriba un array')
  for (const n of numeros){
    if (typeof n !== 'number') return console.warn ('Existen elementos no númericos')
  }

  return console.info ({
    pares: numeros.filter(num => num % 2 === 0),
    impares: numeros.filter(num => num % 2 === 1)
  })
}

imparesPares([1,2,3,4,5,6,7,8,9,10])




/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película. */


/* class Pelicula {
  constructor(id,titulo,director,anio,pais,genero,nota){
    this.id = id
    this.titulo = titulo
    this.director = director
    this.anio = anio
    this.pais = pais
    this.genero = genero
    this.nota = nota
  }

  const
}
 */

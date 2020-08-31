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
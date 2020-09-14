class Animal {
    constructor(nombre,peso,edad,numeros){
        this.peso = peso
        this.edad = edad
        this.nombre = nombre
        this.numeros = numeros

        this.validarArray(numeros)
        this.validarCadena(nombre)
    }


    mostrarNumeros = () => {
        console.table(this.numeros)
    }

    static saludar () {
        console.log('hola')
    }

    validarCadena = (cadena = undefined) => {
        if (cadena === undefined) return console.warn ('Escriba una cadena')
        if (typeof cadena !== 'string') return console.warn('Lo ingresado no es cadena')
        if (cadena.length < 3) return console.warn ('La cadena ingresada tiene menos de 3 letras')

        return true;
    }

    validarNumero = (num = undefined) => {
        if (num === undefined) return console.warn('Escriba un número')
        if (typeof num !== 'number') return console.warn('Lo que escribió no es un número')
    }

    validarArray = (arr = undefined) => {
        if (arr === undefined) return console.warn('Escriba una array')
        if (!(arr instanceof Array)) return console.warn('No ha escrito un Array')
        if (arr.length < 3) return console.warn('No ha escrito mas de 3 datos')
        arr.forEach(function(n){
            if (typeof n !== 'number') return console.warn('Uno de los datos en el array no es número')
        })

    }
}

let perrito = new Animal ('per',24,24,[24,24,25])

perrito.mostrarNumeros()

Animal.saludar()

const numeros = [1,2,3,4,5,10,20,30]


const numerosPares = numeros.filter(numero => numero % 2 === 0)
const numerosCuadrados = numeros.map(numero => numero * numero)

console.log(numerosPares)
console.log(numerosCuadrados)

function sumar (a,b,...c){
    let resultado = a+b
    c.forEach(function (n){
        resultado += n
    }) 
    console.log(resultado)
}   

sumar(1,2)


console.log('***********************')


let pan = 'Molde';
let pancito = 'Pan de'

console.log(pan)
console.log(`${pan} alskdjalksjd laksjd lkajsd lkajsd lkajsdl kajlskjd `)


let nombres = ['alonso','melisa']

console.log(nombres[3])


let num1 = 1
let num2 = 9

function sumar (a,b) {
    return a+b;
}

console.log(sumar(9,2))


let numerosMeli = [7,9,26,15]

console.log(numerosMeli)

numerosMeli.forEach(function(n){
    console.log(n+1+'a')
})

let numeros =  
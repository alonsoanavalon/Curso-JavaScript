/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
 */

class Libro {
    constructor(titulo, autor, anio, genero){
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
        this.genero = genero
        
 /*        this.validarCadena(titulo)
        this.validarCadena(autor)
        this.validarAnio(anio)
        this.validarGenero(genero) */
        
    }

    mostrarDatos = () => {
        console.log(`
        Título: ${this.titulo}
        Autor: ${this.autor}
        Año: ${this.anio}
        Género: ${this.genero}`)
    }
    
 
}




const validarCadena = (cadena = undefined) => {
    if (cadena === undefined) console.error('No ha escrito texto')
    if (typeof cadena !== 'string') console.error('Solo pueden introducirse cadenas de texto')
    if (cadena.length < 1) console.error('Escriba una cadena válida')
}
const validarAnio = (anio = undefined) => {
    if (anio === undefined) console.error ('No ha introducido nada')
    if (anio.length < 4) console.error('El año debe tener al menos 4 dígitos ')
}
const validarGenero = (genero = undefined) => {
    if (genero === undefined) return console.error ('Escriba un genero')

  
    
    let generoAprobado = false;

    generos.forEach(n => {
        if (n === genero){
            generoAprobado = true;
        }

        (!generoAprobado)
         ? console.error('No ha introducido un género válido: aventuras-terror-fantasía')
         : true;

    })
}


let libros = [];

while(libros.length < 3){
    let titulo = prompt('Introduzca un título')
    let autor = prompt('Introduzca el autor')
    let anio = prompt('Introduzca el año')
    let genero = prompt('Introduzca el género')


    let generos = ['aventuras', 'terror','fantasía','fantasia'] 

    validarCadena(titulo)
    validarCadena(autor)
    validarAnio(anio)
    validarCadena(genero)
    validarGenero(genero)

    libros.push(new Libro (titulo, autor, anio, genero))

}

console.log(libros)

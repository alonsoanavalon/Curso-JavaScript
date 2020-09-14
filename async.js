// Callback

/* function cuadradoCallback (value,cb) {
    setTimeout(() => {
        cb(value, value*value)
    }, 1000)
}

cuadradoCallback(2, (value,result) => {
    console.log(`El valor es: ${value} y el resultado es : ${result}`)
    cuadradoCallback(3, (value, resultado) => {
        console.log(`hola el resultado es ${result}`)
    })
}) */

// Promise

/* function cuadradoPromise (value){

    if (typeof value !== 'number') return Promise.reject('Solo se aceptan datos tipo número')

    return new Promise ((resolve,reject) => {

        setTimeout(() => {
            resolve(value*value)
        }, 1000)
    })
 
}

cuadradoPromise(1)
.then(a => {
    console.log(a)
    return cuadradoPromise(2)
})
.then(a => {
    console.log(a)
    return cuadradoPromise('3')
})
.then(a => {
    console.log(a)
})
.catch(err => {
    console.error(err)
}) */

// Async Await

function cuadradoPromise (value) {

    if (typeof value !== 'number') return Promise.reject('Solo se aceptan datos tipo numero')

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ({
                value,
                result: value*value
            })
        }, 1000)
    })
}

// Declarada

async function funcionAsincronaDeclarada () {
    try {
        console.log('Comienza funcion Async')
        let obj = await cuadradoPromise(1)
        console.log(obj)
        obj = await cuadradoPromise(2)
        console.log(obj)

    } catch (err) {
        console.error(`El error es el siguiente: ${err}`)
    }
}

funcionAsincronaDeclarada()

// Expresada

const functionAsincronaExpresada = async () => {
    try {
        console.log('Comienza funcion Async Expresada')
        let obj = await cuadradoPromise(3)
        console.log(obj)
        obj = await cuadradoPromise(4)
        console.log(obj)
    } catch (err) {
        console.log(`Nuestro error es : ${err}`)
    }
}

functionAsincronaExpresada()


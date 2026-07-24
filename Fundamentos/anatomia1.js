// Function Declaration - Declaração de Função

// ex. 1 (função sem parâmetro e que não retorna nada)
function sayHello() {
    console.log('Hello!')
}

sayHello()

//ex. 2 (função com parâmetro e que não retorna nada)
function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}
sayHelloTo('Bia')

//ex. 3 (função sem parâmetro e que retorna algo)
function returnHi() {
    return 'Hi!'
}

let greeting = returnHi() // funciona usando var, let ou const
console.log(greeting)

console.log(returnHi()) // também funciona se chamar a função diretamente no console.log

//ex. 4 (função com parâmetro e que retorna algo)
function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo('Bia'))
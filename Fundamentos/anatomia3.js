//Function Expression
const incremento1 = function(n){
    return n + 1
}

// Arrow function
// é sempre uma função anônima
const incremento2 = (n) => {
    return n + 1
}

//quando a arrow function tem apenas um parametro, da para tirar os parenteses do paramentro.
const incremento3 = n => {
    return n + 1
}

// quando coloca tudo na mesma linha, tirando as chaves da function, o 'return' é implícito na arrow function, portanto não utiliza o 'return' e nem as chaves
//forma mais enxuta da arrow function
const incremento4 = n => n + 1

//arrow function com 2 parametros ou mais, é obrigado a colocar os parenteses nos parametros
const soma = (a,b) => a + b


//chamando todas as functions.
console.log(incremento1(1), incremento2(1), incremento3(1), incremento4(1))
console.log(soma(1,1))
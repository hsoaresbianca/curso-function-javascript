// EX.1 - provando a flexibilidade do JS, onde vc pode passar mais ou menos parametros e a função funcionar.
function logParams(a, b, c){
    console.log(a, b, c)
}
// visualizar o console com os resultados
console.log('EX.1) Resultados exemplo 1:')
logParams(1, 2, 3, 4, 5)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()

// EX.2 - definindo valores padrões para os parametros
function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}
// visualizar o console com os resultados
console.log('EX.2) Resultados exemplo 2:')
defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)
defaultParams()

// EX.3 - definindo quantidade flexivel de parametros
// operação spread/rest
console.log('EX.3) Resultados exemplo 3:')

function logNums(...nums) {
    console.log(nums)
}
logNums(1, 2, 3, 4, 5)

function sumAll(...nums){
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}
// visualizar o console com os resultados
console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// Function Anonymus - Função Anônima
// função sem nome
// como faço para chamar esta função se ela não tem nome???
// IIFE - Immediately Invoked Function Expression - Expressão de função imediatamente invocada
// passo os parametros imediatamente após a função
// se a função não tiver parametros é só colocar os parenteses após a função vazio.

(function (a, b, c){
    console.log(`Resultado: ${a + b + c}`)
})(1, 2, 3);

// também funciona com arrow function
(() => {
    console.log('arrow 1')
})();

// e com arrow function de uma linha
(() => console.log('arrow 2'))();

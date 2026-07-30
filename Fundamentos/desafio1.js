// DESAFIO 1 RESOLVIDO POR MIM.

function range(a, b, c, d) {
    let vetor = []
    
    // se for informado 1 número, tem que retornar o array/vetor começando em 1 até o número informado.
    if (b == undefined && c == undefined) {
      for (let i = 1; i <= a; i++) {
        vetor.push(i)
      }
      return vetor
    }

    // se for informado 2 números,
    // 1) se o primeiro número informado for MENOR que o segundo, tem que retornar o array/vetor começando do primeiro número até o segundo número em ordem CRESCENTE.
    else if (c == undefined && a < b) {
        for (let i = a; i <= b; i++) {
            vetor.push(i);
        }
        return vetor
    }
    // OU 2) se o primeiro número informado for MAIOR que o segundo, tem que retornar o array/vetor começando do segundo até o primeiro número, em ordem DECRESCENTE.
    else if (c == undefined && a > b){
        for (let i = a; i >= b; i--) {
            vetor.push(i);
        }
        return vetor
    }

    // se for informado 3 números, retornar o vetor/array da seguinte forma:
    // primeiro número = início do vetor
    // segundo número = final do vetor
    // terceiro número = de quantos em quantos números o é colocar o número no vetor até chegar no número final.
    // obs: pode ser um vetor crescente ou decrescente.
    // VETOR CRESCENTE:
    else if (d == undefined && a < b) {
        let inicio = a
        let final = b
        let passo = c
        for (let i = inicio; i <= final; i += passo){
            vetor.push(i);
        }
        return vetor
    }
    // VETOR DECRESCENTE:
    else if (d == undefined && a > b){
        let inicio = a
        let final = b
        let passo = c
        for (let i = inicio; i >= final; i -=passo){
            vetor.push(i);
        }
        return vetor
    }

    // se digitar mais que 3 números, não tem função.
    else {
      return "Sem Vetor/Array. Funções disponíveis para 1, 2 ou 3 números informados.";
    }
}

console.log(range(5))

console.log(range(6, 11))

console.log(range(10, 19, 2))

console.log(range(6, 2))

console.log(range(8, -3, 4))

console.log(range(1,2,3,4))
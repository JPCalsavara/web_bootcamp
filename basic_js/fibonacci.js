function fibonacci(n) {
    let output = [];

    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
            output.push(output[i - 2] + output[i - 1]);
        }
    }

    return output; // Agora a função retorna a sequência
}

// Teste
console.log(fibonacci(15)); 

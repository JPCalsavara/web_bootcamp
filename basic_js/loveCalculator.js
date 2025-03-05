const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro nome: ", (nome1) => {
  rl.question("Digite o segundo nome: ", (nome2) => {
    if (!nome1 || !nome2) {
      console.log("Os dois nomes são necessários!");
      rl.close();
      return;
    }

    const chance = Math.floor(Math.random() * 101); // Número aleatório de 0 a 100

    console.log(
      `A chance de ${nome1} e ${nome2} darem certo é de ${chance}% ❤️`
    );

    rl.close();
  });
});

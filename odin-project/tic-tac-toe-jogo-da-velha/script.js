function startGame() {
    // Cria uma matriz vazia para representar o tabuleiro
    const matrix = [];

    // Seleciona todas as divs com a classe "tile"
    const tiles = document.querySelectorAll('.tile');

    // Preenche a matriz com os elementos HTML
    let index = 0;
    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            row.push(tiles[index]); // Adiciona o elemento HTML à matriz
            index++;
        }
        matrix.push(row); // Adiciona a linha à matriz
    }

    gameFlux(matrix);
}

function checkWinner(matrix, symbol) {
    const size = matrix.length;

    // Verifica as linhas
    for (let i = 0; i < size; i++) {
        if (matrix[i].every(item => item.textContent === symbol)) {
            return `${symbol} venceu nas linhas!`;
        }
    }

    // Verifica as colunas
    for (let i = 0; i < size; i++) {
        if (matrix.every(row => row[i].textContent === symbol)) {
            return `${symbol} venceu nas colunas!`;
        }
    }

    // Verifica a diagonal principal
    if (matrix.every((row, j) => row[j].textContent === symbol)) {
        return `${symbol} venceu na diagonal principal!`;
    }

    // Verifica a diagonal secundária
    if (matrix.every((row, j) => row[size - 1 - j].textContent === symbol)) {
        return `${symbol} venceu na diagonal secundária!`;
    }

    return null; // Nenhum vencedor
}

function gameFlux(matrix) {
    const tiles = document.querySelectorAll(".tile");
    const resultDisplay = document.getElementById("result"); // Adicione um contêiner para exibir o resultado
    let plays = 0;

    // Re-seleciona as células após o reset
    const updatedTiles = document.querySelectorAll(".tile");

    updatedTiles.forEach(tile => {
        tile.addEventListener("click", () => {
            if (tile.textContent !== '') {
                resultDisplay.textContent = 'Essa célula já foi preenchida!';
                return;
            }

            const symbol = plays % 2 === 0 ? 'X' : 'O';
            tile.textContent = symbol;

            const row = Math.floor(Array.from(updatedTiles).indexOf(tile) / 3);
            const col = Array.from(updatedTiles).indexOf(tile) % 3;
            matrix[row][col] = tile;

            if (plays >= 4) {
                const winner = checkWinner(matrix, symbol);
                if (winner) {
                    resultDisplay.textContent = winner; // Exibe o vencedor
                    alert(winner);
                    disableBoard(); // Desativa o tabuleiro
                    resetGame();
                    return;
                }
            }

            plays += 1;

            if (plays === 9) {
                alert("Empate")
                disableBoard(); // Desativa o tabuleiro
                resetGame();
            }
        });
    });
}

function disableBoard() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.style.pointerEvents = 'none'; // Desativa cliques nas células
    });
}

function resetGame() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.textContent = ''; // Limpa o conteúdo de cada célula
        tile.style.pointerEvents = 'auto'; // Reativa cliques nas células
    });
    startGame(); // Reinicia o jogo
}

// Inicializa o jogo
startGame();
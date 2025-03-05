for (let index = 99; index > 0; index--) {
    console.log(`${index} bottles of beer on the wall, ${index} bottles of beer.`);
    console.log(`Take one down and pass it around, ${index - 1 > 0 ? index - 1 : "no more"} bottles of beer on the wall.`);
    console.log(""); // Linha em branco para melhor formatação
}

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }
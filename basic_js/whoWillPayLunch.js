function whosPaying(names) {
    /******Don't change the code above*******/

    if (names.length === 0) {
        return "No one is available to buy lunch today!";
    }

    const numberOfPeople = names.length;
    const indexPerson = Math.floor(Math.random() * numberOfPeople);
    
    return names[indexPerson] + " is going to buy lunch today!";

    /******Don't change the code below*******/
}

// Exemplo de uso:
console.log(whosPaying(["João", "Maria", "Carlos", "Ana"]));
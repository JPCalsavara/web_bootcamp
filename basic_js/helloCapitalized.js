const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (name) => {
  if (!name) {
    console.log("Hello!");
    rl.close();
    return;
  }

  const firstChar = name.slice(0, 1).toUpperCase();
  const restOfName = name.slice(1).toLowerCase();
  const capitalisedName = firstChar + restOfName;

  console.log("Hello " + capitalisedName);
  rl.close();
});


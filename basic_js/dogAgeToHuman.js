const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your dog age? ", (dogAge) => {
  if (!dogAge) {
    console.log("Hello!");
    rl.close();
    return;
  }

    var humanAge = (dogAge - 2) * 4 + 21;
    console.log("Your dog is " + humanAge);
  rl.close();
});
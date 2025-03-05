// function bmiCalculator(weight,height){
//     bmi = weight/(height*height);
//     return Math.round(bmi);
// }

// bmi = bmiCalculator(71,1.68)
// console.log(bmi)

function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    let roundedBmi = Math.round(bmi);

    if (bmi < 18.5) {
        return `Your BMI is ${roundedBmi}, so you are underweight.`;
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI is ${roundedBmi}, so you have a normal weight.`;
    } 
    else {
        return `Your BMI is ${roundedBmi}, so you are overweight.`;
    }
}

// Exemplo de uso:
console.log(bmiCalculator(71, 1.68)); // Exemplo para peso = 70kg, altura = 1.75m

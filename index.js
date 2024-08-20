const celsius = 39;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(celsius);
console.log(fahrenheit);

let daysInMouth = 30;
let hoursInMouth = daysInMouth * 24;
let minutesInMouth = hoursInMouth * 60;
let secondsInMouth = minutesInMouth * 60;
console.log(daysInMouth);
console.log(hoursInMouth);
console.log(minutesInMouth);
console.log(secondsInMouth);

let health = 100;
let energy = 80;
health -= 11;
energy -= 15;
console.log(health);
console.log(energy);

let foodSavingPrice = 8.75;
let discount = foodSavingPrice * 0.1;
let fullPrice = foodSavingPrice - discount;
console.log(fullPrice);

let floatNumber = 8.75;
let roundedNumber = Math.floor(floatNumber);
console.log(roundedNumber);

let floatString = "8.75";
let roundedString = parseFloat(floatString);
console.log(roundedString);


let floatNumberNorm = 87;
let roundedNumberNorm = parseInt(floatNumberNorm);
console.log(roundedNumberNorm);

let savedNumber= 25;
let scoreRoot = Math.sqrt(savedNumber);;
console.log(scoreRoot);

let wholeNumber = 84;
let realString = "84";
let convertedString = parseInt(realString);
let convertedNumber = wholeNumber.toString();
console.log(convertedNumber);
console.log(convertedString);
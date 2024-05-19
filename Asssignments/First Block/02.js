// Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
//     For the first 50 units Rs. 0.50/unit
//     For the next 100 units Rs. 0.75/unit
//     For the next 100 units Rs. 1.20/unit
//     For units above 250 Rs. 1.50/unit
//     An additional surcharge of 20% is added to the bill

let units = 250;
let totalbill;

if (units <= 50) {
    totalbill = units * 0.50;
}

else if (units <= 150) {
    totalbill = units * 0.50 + 100 * 0.75;
}

else if (units <= 250) {
    totalbill = units * 0.50 + 100 * 0.75 + 100 * 1.20;
}

else if (units > 250) {
    totalbill = units * 1.50;
}

totalbill = totalbill * 1.20;

console.log("Totalbill -----> " + totalbill);
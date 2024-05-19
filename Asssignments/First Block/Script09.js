// 9. Write a js program to input the week number and print weekday

let num01 = parseInt(prompt("Enter a Number:"));

if (num01 === 1) {
    console.log(`Today Is Monday`);
}

else if (num01 === 2) {
    console.log(`Today Is Tuesday`);
}

else if (num01 === 3) {
    console.log(`Today Is Wednesday`);
}

else if (num01 === 4) {
    console.log(`Today Is Thursday`);
}

else if (num01 === 5) {
    console.log(`Today Is Friday`);
}

else if (num01 === 6) {
    console.log(`Today Is Saturday`);
}

else if (num01 === 7) {
    console.log(`Today Is Sunday`);
}

else {
    alert(`Please Enter A Number Between 1-7`);
}

// 6. Write a js program to check whether a year is leap year or not

let num01 = 2024;

if (num01 % 4 === 0) {
    console.log(`${num01} is a Leap Year.`);
}

else if (num01 % 100 === 0 && num01 % 400 === 0) {
    console.log(`${num01} is a Leap Year.`);
}

else {
    console.log(`${num01} is not a Leap Year.`);
}
let num01 = prompt("Enter a year:");

if (num01 % 4 === 0 && (num01 % 100 === 0 && num01 % 400 === 0)) {
    alert(`${num01} is a Leap Year.`);
    console.log(`${num01} is a Leap Year.`);
    document.write(`${num01} is a Leap Year.`);
} else {
    alert(`${num01} is not a Leap Year.`);
    console.log(`${num01} is not a Leap Year.`);
    document.write(`${num01} is not a Leap Year.`);
}
let num01 = prompt("Enter First Number");

if (num01 % 5 === 0 && num01 % 11 === 0) {
    alert(`${num01} can be divided by both 5 and 11.`);
    console.log(`${num01} can be divided by both 5 and 11.`);
    document.write(`${num01} can be divided by both 5 and 11.`);
}

else {
    alert(`${num01} cannot be divided by both 5 and 11.`);
    console.log(`${num01} cannot be divided by both 5 and 11.`);
    document.write(`${num01} cannot be divided by both 5 and 11.`);

}
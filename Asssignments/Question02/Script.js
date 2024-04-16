let num01 = prompt("Enter First Number");
let num02 = prompt("Enter Second Number");
let num03 = prompt("Enter Second Number");

if (num01 > num02 && num01 > num03) {
    alert(`${num01} is Greater than Second Value(${num02}) and Third Value(${num03})`)
}

else if (num02 > num01 && num02 > num03) {
    alert(`${num02} is Greater than Second Value(${num01}) and Third Value(${num03})`)
}

else {
    alert(`${num03} is Greater than Second Value(${num01}) and Third Value(${num02})`)
}
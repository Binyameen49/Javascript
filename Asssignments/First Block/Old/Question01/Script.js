let num01 = prompt("Enter First Number");
let num02 = prompt("Enter Second Number");

if (num01 >= num02) {
    if (num01 > num02) {
        alert(`${num01} is Greater than ${num02}`)
    }
    else {
        alert(`${num01} is Equal To ${num02}`)
    }
}

else {
    alert(`${num01} is Less than ${num02}`)
}
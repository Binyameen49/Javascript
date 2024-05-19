// 2. Write a js program to find the maximum between three numbers.


let num01 = 20;
let num02 = 50;
let num03 = 70;

if (num01 > num02 && num01 > num03) {
    console.log(`${num01} is Greater than Second Value(${num02}) and Third Value(${num03})`);
}

else if (num02 > num01 && num02 > num03) {
    console.log(`${num02} is Greater than Second Value(${num01}) and Third Value(${num03})`);
}

else {
    console.log(`${num03} is Greater than Second Value(${num01}) and Third Value(${num02})`);
}
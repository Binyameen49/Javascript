// 4. Write a JS code to find the power of a number using for loop


// function power(base, exponent) {
//     let result;
//     for (let i = 0; i < exponent; i++) {
//         result = base ** exponent;
//     }
//     return result;
// }

// console.log(power(3, 3));
// console.log(power(9, 3));
// console.log(power(2, 3));


function power(base, exponent) {

    let result = 1;

    for (let index = 0; index < exponent; index++) {
        result = result * base;
    }

    return result;
}

console.log(power(2, 3));
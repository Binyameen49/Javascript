// 10. Write a js program to input the month number and print the number of
// days in that month.


let monthNumber = 5;
let numberOfDays;

if (monthNumber >= 1 && monthNumber <= 12) {
    if (monthNumber === 2) {
        numberOfDays = 28;
    }

    else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
        numberOfDays = 30;
    }

    else {
        numberOfDays = 31;
    }
    console.log("Number of days in month", monthNumber, "is", numberOfDays);
}

else {
    console.log("Invalid month number. Please enter a number between 1 and 12.");
}

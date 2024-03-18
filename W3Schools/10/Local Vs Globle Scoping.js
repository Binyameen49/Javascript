function myFunction() {
    var localVar = 5; // localVar has local scope
    console.log(localVar); // Accessible here
}

myFunction(); // Outputs: 5
console.log(localVar); // Error: localVar is not defined







var globalVar = 10; // globalVar has global scope

function myFunction() {
    console.log(globalVar); // Accessible here
}

myFunction(); // Outputs: 10
console.log(globalVar); // Outputs: 10

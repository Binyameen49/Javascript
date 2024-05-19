let basicSalary = parseInt(prompt("Enter the Basic Salary:"));

let hra, da;

if (basicSalary <= 10000) {
    hra = basicSalary * 0.2;
    da = basicSalary * 0.8;
} else if (basicSalary <= 20000) {
    hra = basicSalary * 0.25;
    da = basicSalary * 0.9;
} else {
    hra = basicSalary * 0.3;
    da = basicSalary * 0.95;
}

let grossSalary = basicSalary + hra + da;

console.log("Basic Salary:", basicSalary);
console.log("HRA:", hra);
console.log("DA:", da);
console.log("Gross Salary:", grossSalary);

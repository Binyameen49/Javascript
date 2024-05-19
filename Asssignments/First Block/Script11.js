// Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let physics = 75;
let chemistry = 82;
let biology = 71;
let mathematics = 85;
let computer = 89;

let totalMarks = physics + chemistry + biology + mathematics + computer;

let percentage = (totalMarks / 500) * 100;

let grade;
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log("Percentage: " +" "+ percentage.toFixed(2) + "%");
console.log("Grade: " +" "+ grade);
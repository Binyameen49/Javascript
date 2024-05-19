let physics = parseInt(prompt("Enter Your Physics-Marks:"));
let chemistry = parseInt(prompt("Enter Your Chemistry-Marks:"));
let biology = parseInt(prompt("Enter Your Biology-Marks:"));
let math = parseInt(prompt("Enter Your Math-Marks:"));
let computer = parseInt(prompt("Enter Your Computer-Marks:"));

// Function to validate if the input is a positive integer
function isValidInput(input) {
    return /^\d+$/.test(input) && parseInt(input) >= 0;
}

// Check if any mark entered is not a positive integer
if (!isValidInput(physics) || !isValidInput(chemistry) || !isValidInput(biology) || !isValidInput(math) || !isValidInput(computer)) {
    alert("Please enter positive integers only for each subject marks.");
    console.log("Please enter positive integers only for each subject marks.");
    document.write("Please enter positive integers only for each subject marks.");
} else {
    physics = parseInt(physics);
    chemistry = parseInt(chemistry);
    biology = parseInt(biology);
    math = parseInt(math);
    computer = parseInt(computer);

    // Check if any mark entered is above 100
    if (physics > 100 || chemistry > 100 || biology > 100 || math > 100 || computer > 100) {
        alert("Please enter marks equal to or below 100.");
        console.log("Please enter marks equal to or below 100.");
        document.write("Please enter marks equal to or below 100.");
    } else {
        let totalMarks = physics + chemistry + biology + math + computer;
        let totalSubjects = 5;
        let maxMarksPerSubject = 100;
        let percentage = (totalMarks / (totalSubjects * maxMarksPerSubject)) * 100;

        if (percentage >= 90) {
            console.log("You got A+ Grade");
            alert("You got A+ Grade");
            document.write("You got A+ Grade");
        } else if (percentage >= 80) {
            console.log("You got A Grade");
            alert("You got A Grade");
            document.write("You got A Grade");
        } else if (percentage >= 70) {
            console.log("You got B+ Grade");
            alert("You got B+ Grade");
            document.write("You got B+ Grade");
        } else if (percentage >= 60) {
            console.log("You got B Grade");
            alert("You got B Grade");
            document.write("You got B Grade");
        } else if (percentage >= 50) {
            console.log("You got C Grade");
            alert("You got C Grade");
            document.write("You got C Grade");
        } else if (percentage >= 40) {
            console.log("You got D Grade");
            alert("You got D Grade");
            document.write("You got D Grade");
        } else if (percentage >= 33) {
            console.log("You got E Grade");
            alert("You got E Grade");
            document.write("You got E Grade");
        } else {
            console.log("You are Fail");
            alert("You are Fail");
            document.write("You are Fail");
        }
    }
}

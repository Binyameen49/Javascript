// 8. Write a js program to check whether a character is uppercase or
// lowercase alphabet.

let char01 = prompt("Enter a Character:");

if (char01 === 'a' || char01 === 'b' || char01 === 'c' || char01 === 'd' || char01 === 'e' ||
    char01 === 'f' || char01 === 'g' || char01 === 'h' || char01 === 'i' || char01 === 'j' ||
    char01 === 'k' || char01 === 'l' || char01 === 'm' || char01 === 'n' || char01 === 'o' ||
    char01 === 'p' || char01 === 'q' || char01 === 'r' || char01 === 's' || char01 === 't' ||
    char01 === 'u' || char01 === 'v' || char01 === 'w' || char01 === 'x' || char01 === 'y' ||
    char01 === 'z') {
    console.log(`${char01} is a Lower-Case-Character.`);
}

else {
    console.log(`${char01} is a Upper-Case-Character.`);
}
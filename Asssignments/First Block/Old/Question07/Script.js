let char01 = prompt("Enter a Character:");

if (char01 === 'A' || char01 === 'E' || char01 === 'I' || char01 === 'O' || char01 === 'U' ||
    char01 === 'a' || char01 === 'e' || char01 === 'i' || char01 === 'o' || char01 === 'u') {
    alert(`${char01} is a Vowel.`);
    console.log(`${char01} is a Vowel.`);
    document.write(`${char01} is a Vowel.`);
} else {
    alert(`${char01} is a Consonant.`);
    console.log(`${char01} is a Consonant.`);
    document.write(`${char01} is a Consonant.`);
}
// 3. Write a JS code to delete all occurrence of element in given array

let toys = ["car", "doll", "ball", "car", "train", "car"];

let toyToRemove = "car";

for (let index = 0; index < toys.length; index++) {
    if (toys[index] === toyToRemove) {
        toys.splice(index, 1)
    }
}

console.log(toys);
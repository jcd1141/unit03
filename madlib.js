//Joshua Dalton
//IT 505
//Unit 3

console.log("This is a madlib generator");

let name = prompt("Enter a name:");
let place1 = prompt("Enter a place:");
let place2 = prompt("Enter another place:")
let adjective = prompt("Enter an adjective:");
let noun = prompt("Enter a noun:");
let verb = prompt("Enter a verb:");
let verbWithIng = prompt("Enter a verb ending in -ing:");

let story1 = `Once a snail by the name of ${name} decided it was time for a change. 
In the middle of ${place1}, he stood, eager to hit the ground ${verbWithIng}.
His snail life bored him, his shell had become ${adjective}, and his old mushroom home
was beginning to look like a ${noun}. "Enough of this!" he cried. "I am going to ${verb} to
a new life in ${place2}!`

console.log("\The Mad Lib:");
console.log(story1);

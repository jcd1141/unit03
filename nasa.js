//Joshua Dalton
//IT 505
//Unit 3

const API_KEY = "DEMO_KEY";

console.log("Welcome to the NASA Explorer!");

console.log("What would you like to do?");
console.log("1. Astronomy Picture of the Day");
console.log("2. Exit");

let user = prompt("Choice:");

if(user == 1){
    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );

    const data = await response.json();

    console.log(`Title: ${data.title}`);
    console.log(`Date: ${data.date}`);
    console.log(`Explanation: ${data.explanation}`);
}
else if(user == 2){
    console.log("Have a good day!");
}
else{
    console.log("Invalid");
}


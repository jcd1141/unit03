//Joshua Dalton
//IT 505
//Unit 3

const API_KEY = "DEMO_KEY";

console.log("Welcome to the NASA Explorer!");

const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
);

const data = await response.json();

console.log(`Title: ${data.title}`);
console.log(`Date: ${data.date}`);
console.log(`Explanation: ${data.explanation}`);


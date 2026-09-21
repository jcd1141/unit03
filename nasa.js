//Joshua Dalton
//IT 505
//Unit 3

const API_KEY = "DEMO_KEY"; //Nasa public API key

console.log("Welcome to the NASA Explorer!");

console.log("What would you like to do?");
console.log("1. Astronomy Picture of the Day");
console.log("2. Near-Earth Asteroids by Date");
console.log("3. Exit");

let user = prompt("Choice:"); //Prompts the user to enter a choice from menu

if(user == 1){ //If choice is 1, fetches NASA's picture of the day
    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );

    const data = await response.json();

    console.log(`Title: ${data.title}`);
    console.log(`Date: ${data.date}`);
    console.log(`Explanation: ${data.explanation}`);
}
else if(user == 2){ //If choice is 2, finds number of asteroids near earth on certain dates
    let date = prompt("Enter a date (YYYY-MM-DD):");

    const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${API_KEY}`
    );

    const data = await response.json();

    let asteroids = data.near_earth_objects[date];

    console.log(`NASA found ${asteroids.length} near-Earth ateroids on ${date}.`);
}
else if(user == 3){
    console.log("Have a good day!");
}
else{
    console.log("Invalid");
}


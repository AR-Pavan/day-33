const fs = require("fs");

// creating .txt file with current date-time stamp.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();

let month = months[d.getMonth()];
let day = weekdays[d.getDay()];
let date = d.getDate();
let hrs = d.getHours();
let mins = d.getMinutes();
let secs = d.getSeconds();

let dateTime = `${date}${month}-${hrs}hrs${mins}mins${secs}sec`;
let currentTime = `${hrs}hrs-${mins}min-${secs}sec`;

fs.writeFile(`./folder/${dateTime}.txt`,`${currentTime}`,(err)=>{
    console.log(err);
})


//reading files
fs.readdir("./folder",(err,files)=>{
    files.forEach((fileName)=>{
        console.log("file > "+fileName)
    })
})
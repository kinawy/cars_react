// Require takes a string, we give it the path to our module js file, it allows us to import modules
// // Local module
// const myModule = require("./myModule.js");
// // Fs stands for file system, also require is essentially like saying "import this"
// // Core module
// const fs = require("fs");
// // Http server
// // Local module
// const http = require("http");
// // Third party
const moment = require("moment");

const oneLinerJoke = require('one-liner-joke');

let getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)
// The http module can create an http server that listens to server ports and gives a response back to the client if that port is accessed
// To access it you have to run it, then go to localhost:8000 and you will see it onscreen
// http.createServer(function (request, response) {
//     response.write("Hello World");
//     response.end();
//     })
//     .listen(8000);

// // Takes three functions, the file name, format which is utf8, and a callback function that is passed an error, or the data from the file.
// // utf 8 is basically saying its going to be reading english characters
// fs.readFile("story.txt", "utf8", function (error, data) {
//   if (error) {
//     console.log("There was a problem reading the file.");
//   } else {
//     console.log(data);
//   }
// });

// fs.open("story.txt", 'w', (err, fd) => {
//   if (err) {
//     console.log(err)
//   } else {

//   }
// })  

// console.log(myModule.beBasic());

// console.log('Hi Sameh');

// myModule.count();

// // This one below was using nodemon, which literally logs your js in real time as long as there are no errors

// let i = 2;

// const count = () => {
//     console.log(i);
//     i =i*2;
// }
// const myTimer = setInterval(count, 1000);

// So here we are passing moment my birthday, then the format it is in, then in format I am passing four d's that means show me the full day of my birthdays name, then putting string i want added in square brackets, then Do gives me the number date but in the format of 26th, then four M's gives me the full name of july
console.log(moment("07-26-1989", "MM DD YYYY").format("dddd [the] Do [of] MMMM [in the year] YYYY"));
console.log(moment("07-26-1989", "MM DD YYYY").fromNow());





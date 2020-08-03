module.exports.beBasic = () => "That's so fetch!";


// module.exports is a javascript object that contains all code we want to export for import in other files (like our entry point index.js)

module.exports.count = () => {
    for (let i =0; i<= 10; i++) {
        console.log(i);
    }
};

// We are adding properties to our export using dot notation above, assume that module.exports is an object, and anything we add can be added by dot notation
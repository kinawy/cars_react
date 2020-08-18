const express = require('express');
// imports express
const app = express();
// creates an instance of an express app for us to be able to call express methods on

// home route
// first argument is url pattern
// second argument is callback: what do we want to do with the request and response objects?
app.get('/', (request, response) => {
    console.log(request.query)
    response.send('Hello World')
});

// listen for incoming requests on port 8000
app.listen(8000);
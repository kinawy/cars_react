// Import and initialize express
const express = require('express')
const app = express()

// [GET] Home Page
app.get('/', (req, res) => {
    res.send('Home Route')
})

// [GET] About Page
app.get('/about', (req, res) => {
    res.send('You\'ve reached a web server designed around learning express.js routes.')
})

app.get('/querystring' , (req, res) => {
    let printOut = ''
    for (let key in req.query) {
        printOut += `${key}: ${req.query[key]} <br />`
    }
    res.send(`Here's what they sent: ${printOut}`)
})
// [GET] Param Usage Page
app.get('/:input', (req, res) => {
    res.send("Our parameter is " + req.params.input + ".")
})

// Bonus [GET] Greet a input
app.get('/greet/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`)
})

app.get('/greet/:first/:last', (req, res) => {
    res.send (`Hello, ${req.params.first} ${req.params.last}`)
})

app.get('/multiply/:x/:y', (req, res) => {
    res.send(`The answer is ${req.params.x * req.params.y}`)
})

app.get('/add/:x/:y', (req, res) => {
    res.send(`The answer is ${parseInt(req.params.x) + parseInt(req.params.y)}`)
})

// * at end of path allows endless parameters
// app.get('/add/*', (req, res) => {
//     res.send('Same method as above but allows endless parameters')
// })

app.get('/magicalAdd/*', (req, res) => {
    let myParams = req.params[0].split("/")
    let result = myParams.reduce((total, num) => {
        return total + parseInt(num)
    }, 0)
    res.send(`The result is ${result}`)
})


// Sets up server to listen on provided port
// app.listen(8000, () => {
//     console.log("Server up and listening on port 8000")
// })
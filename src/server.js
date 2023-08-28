const express = require('express')
const hbs = require('hbs')
const path = require('path')

// calling express js
const app = express()

// Define paths for Express config
const publicDir =  path.join(__dirname,'../public')
const viewsPath =  path.join(__dirname,'../templates/views')
const partialsPath =  path.join(__dirname,'../templates/partials')

// Setup ejs engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to server
app.use(express.static(publicDir))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('index')
})
app.get('/work', (req, res) => {
    res.render('index')
})
app.get('/blogs', (req, res) => {
    res.render('index')
})
app.get('/contact', (req, res) => {
    res.render('index')
})

app.listen(5000, () => {
    console.log('server is up on port 5000.');
})
const express = require('express');
const hbs = require('hbs'); // template engine for handlebar view for express
const fs = require('fs');

const port = process.env.PORT || 8000;
var app = express();

//set HBS partial (file template directory)
hbs.registerPartials(__dirname + '/views/partials'); 

//set express view using HBS
app.set('view engine', 'hbs');  
app.set('views', __dirname + '/views');

//app.use to set express use middileware
app.use(express.static(__dirname + '/public_html')); //set default web directory
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (e) => {
        if(e){ console.log('Unable to write server log: ' + e); }
    });
    next();
});
/* app.use((req, res, next) => {
    res.render('maintenance.hbs');
});
 */

//====================================================================================
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})


//====================================================================================
app.get('/', (req,res) => {
    //res.send('Hello');
    res.send({
        name: 'Andrew',
        like: ['Bike', 'Swimming']
    });
});

app.get('/about', (req,res) => {
    //res.send('Hello');
    res.render('about.hbs', {
        pageTitle: 'Page Title About Page',
    });
});



app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
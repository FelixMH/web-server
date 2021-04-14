require('dotenv').config();
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', (err) => {});

// Servir contenido estático
app.use( express.static('public') )

// Middlewares

app.get('/', (req,res) => {
    res.render('home', {
        name: 'Félix Martínez',
        title: 'FullStack Developer'
    });
});
app.get('/generic', (req,res) => {
    res.render('generic', {
        name: 'Félix Martínez',
        title: 'FullStack Developer'
    });
});
app.get('/elements', (req,res) => {
    res.render('elements', {
        name: 'Félix Martínez',
        title: 'FullStack Developer'
    });
});

app.use( '*', (req, res) => {
    res.send('404 | Page not found');
})

app.listen( port, () => {
    console.log(`Servidor local lanzado en http://localhost:${port} `);
})
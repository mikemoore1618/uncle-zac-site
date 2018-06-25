const 
    express = require('express'),
    app = express(),
    ejsLayouts = require('express-ejs-layouts'),
    PORT = 3000
    app.set('view engine', 'ejs')

    app.use(ejsLayouts)
    
    app.get('/', (req, res) => {
        res.render('home')
    })
    
    app.get('/about', (req, res) => {
        res.render('about')
    })

    app.get('/contact', (req, res) => {
        res.render('contact')
    })

    app.get('/skills', (req, res) => {
        res.render('skills')
    })

    app.listen(PORT, (err) => {
        console.log(err || `SERVER RUNNING ON ${PORT} :)` )
    })
    
const 
    express = require('express'),
    app = express(),
    ejsLayouts = require('express-ejs-layouts'),
    PORT = 3000
    app.set('view engine', 'ejs')

    app.use(ejsLayouts)
    
    app.get('/', (req, res) => {
        res.render('home', { title: "BOOM!" })
    })
    
    app.get('/flavors', (req, res) => {
        var flavors = ["mint", "strawberry", "chocolate"]
        res.render('flavors', { flavors: flavors })
    })

    app.listen(PORT, (err) => {
        console.log(err || `SERVER RUNNING ON ${PORT} :)` )
    })
    
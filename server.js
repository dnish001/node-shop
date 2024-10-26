require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

//importing routes
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

const app = express();

app.engine('handlebars', expressHbs);

app.set('view engine', 'pug');
app.set('views', 'views');


//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

//catch-all routes
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {title: 'Page not found'});;
})

//start server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});










/*
    npm install express --no-save
     - To install Express temporarily and not add it to the dependencies list

    npm install express --save-dev
     - To install Express temporarily and add it to the development dependencies list

    res.send() | res.redirect()
     - All above methods by default set necessary headers & status code as per the response we're sending.
     
    app.listen()
     - Bts, it creates a server & accepts port and fires a callback once server starts listening. 

    bodyParser.urlencoded()
     - not to parse the default unecessary ones.

    express.static(path)
     - to serves static files as view mode, where express doesn't handle it. 
     - <link> tag used in add-product, inside browser the css file linked will not be accessible, so we need to make it public and serve it statically as view mode.

    app.use()
     - allows to add a new middlewares function
     - function (request, response, next) will be executed for every incoming request.
     - next allows the request to travel on to the next middlewares.
    
    app.set()
     - setting a global configuration value
     - allows us to set any value globally in our express app.
     - we can also fetch the value using app.get(key) | could be used to share data accross application.

    view-engine 
     - for any dynamic template, the application is trying to render, use the template engine setted over here.

    app.set('views', 'views')
     - refers to setting a views in or project along with the path of the template. 

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
     - instead of sending a file we can render now
     - res.status(404).render('404');
*/
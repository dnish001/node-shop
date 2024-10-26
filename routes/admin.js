const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 
    res.render('add-product', {title: 'Add Product'});
});

router.post('/add-product', (req, res, next) => {
    products.push({'title': req.body.title});
    console.log('products _____ ', products);
    res.redirect('/');
})


exports.routes = router;
exports.products = products;



























/*
    express.Router();
     - Works as a mini express with all routing features.

    router.get() | router.post() | app.use()
     - works similar as app.use()
     - It sees the exact match (in case shopRoutes is sitting above adminRoutes, definitely, the shopRoutes would be executed first but still it would work, bcoz of exact match doesn't found in shopRoutes)
       But if router.use() is used, it won't work with exact match. 

    .status() | .setHeader() can be chained with .send()
     - e.g. res.status(200).send()

    .sendFile()
     - requires an absolute path to the current directory
     - (/views/add-product.html) | (./views/add-product.html) | (/) won't work, bcoz / here referred as operating system root directory. 

    ../ | ..
     - both works same.

    exports.products = products;
     - exporting products to shop page, even on reloading ('/' | '/shop') url from a different browser, in shop page, products will be available, bcoz of our server, which is continuously listening. 
*/
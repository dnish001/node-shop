const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    let products = [];
    products = adminData.products;
    console.log('shop admin data _____ ', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {prods: products, title: 'Shop'});
})


module.exports = router;





/*

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
     - constructing path present inside views folder.

    res.render()
     - provided by express
     - uses the default Template Engine provided in the application
     - Since pug is setted at server.js, we can directly pass the filename inside render()





*/
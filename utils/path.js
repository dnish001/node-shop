const path = require('path');

module.exports = path.dirname(process.mainModule.filename);


/*
    path.dirname(process.mainModule.filename) 
     - accessing: (__dirname + ../)
*/
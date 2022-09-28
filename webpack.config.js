'use strict';

let path = require ('path');
module.exports={
    entry: './Project/src/index.js',
    mode: 'development',
    output:{
        filename: 'bundle.js',
        path: __dirname + '/dist/js'
    },
    watch: true,
    devtool: 'source-map'
};
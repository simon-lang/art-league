const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/app.js',
    output: {
        filename: 'app.js'
    },
    module: {
        rules: [
            { test: /\.html$/, use: 'html-loader' }
        ]
    }
};

var path = require('path');

var production = process.env.NODE_ENV === 'production';

var dir_lib = path.resolve(__dirname, 'lib');
var dir_dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry:  path.resolve(dir_lib, 'main.js'),
    output: {
        path:     dir_dist,
        filename: 'eastereck.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: dir_lib
            }
        ],
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: dir_lib,
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }
        ]
    },
    eslint: {
        failOnWarning: production,
        failOnError: production
    },
    debug: !production,
    devtool: production ? false : 'source-map'
};

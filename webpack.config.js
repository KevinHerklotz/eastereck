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
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel-loader',
                include: dir_lib,
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }
        ]
    },
    debug: !production,
    devtool: production ? false : 'source-map'
};

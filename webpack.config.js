var path = require('path');

var dir_lib = path.resolve(__dirname, 'lib');
var dir_dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry:  path.resolve(dir_lib, 'main.js'),
    output: {
        path:     dir_dist,
        filename: 'eastereck.js'
    },
};

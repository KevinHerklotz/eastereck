var webpack = require('webpack'),
    path = require('path');

var production = process.env.NODE_ENV === 'production',
    libraryName = 'eastereck',
    dir_lib = path.resolve(__dirname, 'lib'),
    dir_dist = path.resolve(__dirname, 'dist'),
    plugins = [],
    outputFile;

if (production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

module.exports = {
    entry:  path.resolve(dir_lib, 'main.js'),
    output: {
        path: dir_dist,
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
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
                    cacheDirectory: true
                }
            }
        ]
    },
    plugins: plugins,
    eslint: {
        failOnWarning: production,
        failOnError: production
    },
    debug: !production,
    devtool: production ? false : 'source-map'
};

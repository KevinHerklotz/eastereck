var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');

var production = process.env.NODE_ENV === 'production',
    libraryName = 'eastereck',
    dir_lib = path.resolve(__dirname, 'lib'),
    dir_style = path.resolve(__dirname, 'style'),
    dir_assets = path.resolve(__dirname, 'assets'),
    dir_dist = path.resolve(__dirname, 'dist'),
    plugins = [],
    outputFile;

if (production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        mangle: true,
        compress: {
            warnings: false
        }
    }));
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
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                include: dir_assets,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.scss$/,
                include: dir_style,
                loaders: ['style', 'css', 'postcss', 'sass']
            }
        ]
    },
    plugins: plugins,
    postcss: function () {
        return [autoprefixer({ browsers: ['last 2 versions'] }), cssnano];
    },
    eslint: {
        failOnWarning: production,
        failOnError: production
    },
    debug: !production,
    devtool: production ? false : 'source-map'
};

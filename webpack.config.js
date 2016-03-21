var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var production = process.env.NODE_ENV === 'production',
    libraryName = 'eastereck',
    dir_src = path.resolve(__dirname, 'src'),
    dir_js = path.resolve(dir_src, 'js'),
    dir_style = path.resolve(dir_src, 'style'),
    dir_assets = path.resolve(dir_src, 'assets'),
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

plugins.push(new HtmlWebpackPlugin({
    title: 'Eastereck demo page',
    filename: 'demo.html',
    inject: 'body',
    template: 'src/demo/index.html.twig'
}));

module.exports = {
    entry:  path.resolve(dir_js, 'main.js'),
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
                include: dir_js
            }
        ],
        loaders: [
            {
                test:   /\.js$/,
                loader: 'babel',
                include: dir_js,
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
            },
            {
                test: /\.twig$/,
                loader: "twig"
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

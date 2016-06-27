'use strict';

const path = require('path'),
    webpack = require('webpack')

module.exports = {
    entry:  (process.env.NODE_ENV === 'production'
        ? [] : [
            'webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/only-dev-server'
        ]).concat(['./src/client/index.jsx']),
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: path.join(__dirname, 'dist/client'),
        filename: 'bundle.js',
        publicPath: process.env.NODE_ENV === 'production'
            ? undefined
            : 'http://localhost:8080/assets/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel', 'eslint-loader'],
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url?prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.gif/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            }

             ]
    },
    devServer: {
        contentBase: "./dist/client",
        noInfo: true,
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stylus: {
        use: [require('nib')()],
        import: ['~nib/lib/nib/index.styl']
    }
}

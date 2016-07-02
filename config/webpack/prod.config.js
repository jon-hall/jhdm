'use strict';
const webpack = require('webpack'),
    _ = require('lodash');

module.exports = _.merge({}, require('./_base.config.js'), {
    entry: [
        './src/client/index.jsx'
    ],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin()
    ]
});

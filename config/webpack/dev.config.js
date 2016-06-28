'use strict';
const _ = require('lodash');

module.exports = _.merge({}, require('./_base.config.js'), {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './src/client/scripts/index.jsx'
    ]
});

'use strict';
const _ = require('lodash');

module.exports = _.merge({}, require('./_base.config.js'), {
    entry: [
        './src/client/index.jsx'
    ]
});

module.exports = function X(config) {
    var x = {},
        env = require('node-env-file'),
        util = require('util'),
        winston = require('winston');

    x.util = util;
    x.express = require('express');
    x.morgan = require('morgan');
    x.helmet = require('helmet');
    x.path = require('path');
    x.mongoose = require('mongoose');
    x.bodyParser = require('body-parser');
    //var x;

    /**
     *
     * @private
     * @static
     * @property x
     * @type {Object}
     */
    if (typeof config === 'undefined') config = {};

    if (!process.env.PORT) { env('.env'); }

    x.config = config;
    x.config.env = process.env;

    x.apis = require('./api')(x);
    x.routes = require('./routing')(x).routes;

    return x;
}
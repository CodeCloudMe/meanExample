'use strict';

module.exports = function(app) {

    // Home route
    var index = require('../controllers/index2');

    app.route('/')
        .get(index.render);

    //cats example route

    var cats = require('../controllers/cats');

    app.route('/cats')
        .get(cats.render);

};

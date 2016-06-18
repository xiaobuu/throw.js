/**
 * @module errors/index
 * @description Errors Bootstrap
 */

'use strict';

var fs = require('fs'),
  errors = fs.readdirSync(__dirname + '/errors');

errors.forEach(function(el){
  
  var n = el.substring(0,1).toUpperCase() + el.substring(1, el.indexOf('.'));
  
  module.exports[n] = require('./errors/' + el);

});

module.exports.customError = require('./customError');

'use strict';

var upload = require('./upload');
var pictures = require('./pictures');
var resizer = require('./resizer');

upload();
pictures();
resizer();

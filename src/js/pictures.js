'use strict';

var load = require('./load');
var getPicture = require('./review');

var filtersForm = document.querySelector('.filters');
filtersForm.classList.add('hidden');

var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';

var container = document.querySelector('.pictures');

var renderPictures = function(pictures) {
  pictures.forEach(function(picture) {
    container.appendChild(getPicture(picture));
  });
};

load(PICTURES_LOAD_URL, renderPictures, '__jsonpCallback');
filtersForm.classList.remove('hidden');

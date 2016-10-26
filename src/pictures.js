'use strict';

var PICTURES_LOAD_URL = '../bin/data/data.json';

var container = document.querySelector('.pictures');
var template = document.querySelector('template');
var templateContainer = 'content' in template ? template.content : template;

var load = function(url, callback, callbackName) {
  if (!callbackName) {
    callbackName = 'cb' + Date.now();
  }

  window[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

var getPicture = function(picture) {
  var pictureElement = templateContainer.querySelector('.picture').cloneNode(true);
  pictureElement.querySelector('picture-comments').textContent = picture.comments;
  pictureElement.querySelector('picture-likes').textContent = picture.likes;

  var image = new Image(182, 182);
  image.onload = function(event) {
    pictureElement.setAttribute('src', 'url(\'' + event.target.src + '\')');
  };

  image.onerror = function() {
    pictureElement.classList.add('picture-load-failure');
  };

  image.src = picture.url;

  return pictureElement;
};

var renderPictures = function(pictures) {
  pictures.forEach(function(picture) {
    container.appendChild(getPicture(picture));
  });
};

load(PICTURES_LOAD_URL, renderPictures);

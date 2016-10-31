'use strict';

var template = document.querySelector('template');
var templateContainer = 'content' in template ? template.content : template;

module.exports = function(picture) {
  var pictureElement = templateContainer.querySelector('.picture').cloneNode(true);
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;

  var image = new Image(182, 182);
  image.onload = function() {
    pictureElement.querySelector('img').src = './' + picture.url;
  };

  image.onerror = function() {
    pictureElement.classList.add('picture-load-failure');
  };

  image.src = picture.url;

  return pictureElement;
};

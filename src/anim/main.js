var jQuery = require('jquery');
var Compass = require('./compass').compass
var mouseWheelHandler = require('./compass').mouseWheelHandler


var imageEl = jQuery(new Image());
imageEl
  .load(function() {
    jQuery('#compassImage').append(imageEl);
    imageEl.attr('width', '500');
  })
  .attr('src', '/img/compass.png');

var image = new Compass('directionHeading', 'compassImage');
document.addEventListener("mousewheel", function(e){mouseWheelHandler(e,image)}, false);

var jQuery = require('jquery');

function mouseWheelHandler(e, image){
  if(e.wheelDelta > 0){
    image.counter++;
  } else if(e.wheelDelta < 0) {
    image.counter--;
  }
  image.showAndRotate(image.counter);
}

function Compass(textId, imgId){
  this.counter = 0;
  this.textId = textId;
  this.imgId = imgId;
  this.compassMap = {
    0: 'N',
    45: 'NE',
    90: 'E',
    135: 'SE',
    180: 'S',
    225: 'SW',
    270: 'W',
    315: 'NW'
  }
}

Compass.prototype = {
  show: function(angle){
    jQuery('#' + this.imgId).show();
    jQuery('#' + this.imgId).css('webkitTransform', 'rotate(' + angle + 'deg)');
  },

  showText: function(text){
    jQuery('#' + this.textId).html(text)
  },

  getAngle: function(counter){
    angle = counter % 360;

    if(angle < 0){
      angle = 360 + angle;
    }

    return angle;
  },

  showAndRotate: function(counter){
    angle = this.getAngle(counter);
    this.show(angle);

    if(this.compassMap[angle]){
      angle = this.compassMap[angle];
    }

    this.showText(angle);
  }
}

module.exports = {
  compass: Compass,
  mouseWheelHandler: mouseWheelHandler
}

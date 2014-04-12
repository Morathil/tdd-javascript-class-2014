var jQuery = require('jquery');

function Image(textId, imgId){
  this.textId = textId;
  this.imgId = imgId;
}

Image.prototype = {
  show: function(angle){
    jQuery('#' + this.imgId).show();
    jQuery('#' + this.imgId).css('webkitTransform', 'rotate(' + angle + 'deg)');
  },

  showText: function(domId, angle){
    jQuery('#' + this.textId).html(angle)
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
  }
}

describe('Compass', function() {
  describe('getAngle', function(){
    beforeEach(function(){
      image = new Image()
    })
    describe('counter: 1', function(){
      it('should return 1°', function() {
        expect(image.getAngle(1)).toBe(1);
      });
    });

    describe('counter: 2', function(){
      it('should return 2°', function() {
        expect(image.getAngle(2)).toBe(2);
      });
    });

    describe('counter: 360', function(){
      it('should return 0°', function() {
        expect(image.getAngle(360)).toBe(0);
      });
    });

    describe('counter: -1', function(){
      it('should return 359°', function() {
        expect(image.getAngle(-1)).toBe(359);
      });
    });
  });

  describe('showText', function(){
    beforeEach(function(){
      spyOn(Image.prototype, 'showText');
    });

    describe('angle: 1', function(){
      it('should call html', function(){
        image = new Image()
        image.showText(1)
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith(1);
      });
    });
  });

  describe('showAndRotateImage', function(){
    beforeEach(function(){
      spyOn(Image.prototype, 'show');
    });
    describe('with counter 1', function(){
      it('should call show with 1', function(){
        image = new Image();
        image.showAndRotate(1);
        expect(Image.prototype.show)
          .toHaveBeenCalledWith(1)
      });
    })
  });
});

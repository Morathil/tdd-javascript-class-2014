var jQuery = require('jquery');

function Image(textId, imgId){
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

Image.prototype = {
  show: function(angle){
    jQuery('#' + this.imgId).show();
    jQuery('#' + this.imgId).css('webkitTransform', 'rotate(' + angle + 'deg)');
  },

  showText: function(domId, text){
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
      spyOn(Image.prototype, 'showText');
    });
    describe('with counter 1', function(){
      it('should call show with 1', function(){
        image = new Image();
        image.showAndRotate(1);
        expect(Image.prototype.show)
          .toHaveBeenCalledWith(1);
      });

      it('should call showText with 1', function(){
        image = new Image();
        image.showAndRotate(1);
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith(1);
      });
    });
    describe('with counter 0', function(){
      it('should call showText with N', function(){
        image = new Image();
        image.showAndRotate(0);
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith('N');
      });
    });

    describe('with counter 45', function(){
      it('should call showText with NE', function(){
        image = new Image();
        image.showAndRotate(45);
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith('NE');
      });
    });

    describe('with counter 90', function(){
      it('should call showText with E', function(){
        image = new Image();
        image.showAndRotate(90);
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith('E');
      });
    });

    describe('with counter 135', function(){
      it('should call showText with SE', function(){
        image = new Image();
        image.showAndRotate(135);
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith('SE');
      });
    });

    describe('with counter 180', function(){
      it('should call showText with S', function(){
        image = new Image();
        image.showAndRotate(180);
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith('S');
      });
    });

    describe('with counter 225', function(){
      it('should call showText with SW', function(){
        image = new Image();
        image.showAndRotate(225);
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith('SW');
      });
    });

    describe('with counter 270', function(){
      it('should call showText with W', function(){
        image = new Image();
        image.showAndRotate(270);
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith('W');
      });
    });

    describe('with counter 315', function(){
      it('should call showText with NW', function(){
        image = new Image();
        image.showAndRotate(315);
        expect(Image.prototype.showText)
          .toHaveBeenCalledWith('NW');
      });
    });
  });
});

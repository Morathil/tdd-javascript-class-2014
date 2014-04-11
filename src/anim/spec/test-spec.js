function getAngle(counter){
  angle = counter % 360;

  if(angle < 0){
    angle = 360 + angle;
  }

  return angle;
}

describe('Compass', function() {
  describe('getAngle', function(){
    describe('counter: 1', function(){
      it('should return 1°', function() {
        expect(getAngle(1)).toBe(1);
      });
    });

    describe('counter: 2', function(){
      it('should return 2°', function() {
        expect(getAngle(2)).toBe(2);
      });
    });

    describe('counter: 360', function(){
      it('should return 0°', function() {
        expect(getAngle(360)).toBe(0);
      });
    });

    describe('counter: -1', function(){
      it('should return 359°', function() {
        expect(getAngle(-1)).toBe(359);
      });
    });
  });

});

function getAngle(counter){
  return counter;
}

describe('Compass', function() {
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
});

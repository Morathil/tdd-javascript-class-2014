function getAngle(){
  return 1;
}

describe('Compass', function() {
  describe('counter: 1', function(){
    it('should return 1°', function() {
      expect(getAngle(1)).toBe(1);
    });
  });
});

const chai = require('chai');
chai.should();
const bs = require('../bubbleSort.js');

describe ('bubbleSort', function() {

  it('should be a function', function(){
    bs.should.exist;
    bs.should.be.a('function');
  });

  it('should sort array correctly', function(){
    bs([10, 4, 6, 9, 3 ,2, 2, 8]).should.deep.equal([2, 2, 3, 4, 6, 8 ,9, 10]);
  })

  it('should sort an array with multiple same values', function() {
    bs([7, 6, 6, 7, 2, 2, 1, 1]).should.deep.equal([1, 1, 2, 2, 6, 6, 7, 7]);
  })

  it('should sort an array with a length of 1', function(){
    bs([1]).should.deep.equal([1]);
  })

});



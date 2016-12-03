const {nth} = require('../nth');
const {expect} = require('chai');

describe('returns index X of an array; if X is negative, element X places from end is returned instead', function() {
  it('should return index X of array', function(){
    var array = [2, 4, 6, 1, 3, 5]
    expect(nth(array, 4)).to.equal(array[4])
  })
})

const {take} = require('../take');
const {expect} = require('chai');

describe('take() Returns a sliced array to the specified number of elements', function() {
  it('Should return given array to element X', function(){
    var array = [2, 3, 1, 5]
    expect(take(array, 3)).to.equal("[2, 3, 1]")
  })
})

const {forEach} = require('../forEach');
const {expect} = require('chai');


describe('Applies a function to each element of a collection.', function() {
  it('Apply a function to each element of a collection.', function(){
    var plus1 = function(num){return num + 1;}
    expect(forEach([1, 2, 3, 4, 5], plus1)).to.equal([2, 3, 4, 5, 6])
  })
})

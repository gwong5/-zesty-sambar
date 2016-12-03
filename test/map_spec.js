const {map} = require('../map');
const {expect} = require('chai');


describe('Creates a new array of elements of a collection that have had a function applied to each.', function() {
  it('Creat a new array of elements of a collection that have had a function applied to each.', function(){
    var plus1 = function(num){return num + 1;}
    expect(map([1, 2, 3, 4, 5], plus1)).to.equal([2, 3, 4, 5, 6])
  })
})

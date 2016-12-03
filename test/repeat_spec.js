const {repeat} = require('../repeat');
const {expect} = require('chai');

describe('repeat() Attaches string to itself by the asked number of times', function() {
  it('returns a string X amount of times', function(){
    var string = "monorail"
    expect(repeat(string, 4)).to.equal("monorailmonorailmonorailmonorail")
  })
})

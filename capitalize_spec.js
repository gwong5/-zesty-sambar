const {capitalize} = require(./capitalize);
const {expect} = require('chai');

describe('capitalize the first letter of a string', function() {
  it('should capitalize the first letter of a string', function(){
    expect(capitalize("github")).to.equal("Github")
  })
})

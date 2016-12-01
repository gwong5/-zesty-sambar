var map = function(object, fn) {
  var k = object.length;
  var mapArray=[];
  for(let i = 0; i < k; i++){
    mapArray.push(fn(object[i]);
  }
  return mapArray;
}

module.exports = map; 

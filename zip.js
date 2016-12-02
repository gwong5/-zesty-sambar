Array.prototype.zip = function(arrays) {
  let numArrays = arguments.length;
  var array;
  for(let i = 0; i < numArrays; i ++) {
    var k = numArrays[i].length
   array[i] = []
    for(var j = 0; j < k; j++){
      array[i].push(numArrays[i][j])}
  }
  return array
}

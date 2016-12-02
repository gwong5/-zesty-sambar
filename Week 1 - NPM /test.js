var GLOBAL = 1;
var a = function () {
  return GLOBAL++;
};

var once = function(fn) {
  var result;
  return function() {
    if(result) {
      return result;
    }
    result = fn();
    return result;
  }

}

var b = once(a);
console.log(b()); // -> 1
console.log(b()); // -> 2

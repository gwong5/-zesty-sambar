 var once = function(fn) {
   var result;
   return function() {
     if(result) {
       return result;
     }
     result = fn();
     return result;
   }

module.exports = once;

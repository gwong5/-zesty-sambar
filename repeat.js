var repeat = function(string, times) {
  let stringArr = [];
  if(times < 0) {times = 0};
  if (times > 0) {
    for(var i = 0; i < times; i++){
      stringArr.push(string);
      }
    }
  return stringArr.join('');
  }

module.exports = {repeat};

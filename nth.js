var nth = function(array, number) {
  let arrLength = array.length;
  if(number === undefined) {number = 0};
  if (Math.abs(number) > arrLength) {
    return undefined;
  }else if(number < 0) {
    return array[arrLength - Math.abs(number)];
  }else {
    return array[number];
    }
}

module.exports = {nth};

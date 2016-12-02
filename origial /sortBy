Object.prototype.sortBy = function (input, howToSort) {
  let sorted = []
  let j = input.length
  let input = input
  let counter = 0;
  while(counter < j){
    for(var i = 0; i < j; i++){
      if(input[i] > input[i + 1]){
        sorted.push(input[i + 1], input[i])
      }else {
        sorted.push(input[i], input[i + 1])
      }
    }
    input = sorted;
    sorted = [];
    counter++;
  }
  return input;
}

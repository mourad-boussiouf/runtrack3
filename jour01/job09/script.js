function tri(numbers, order){
  if(order == 'asc'){
      var done = false;
      while(!done){
          done = true;
          for(var i = 1; i < numbers.length; i++){
              if(numbers[i - 1] > numbers[i]){
                  done = false;
                  var tmp = numbers[i - 1];
                  numbers[i - 1] = numbers[i];
                  numbers[i] = tmp;
              }
          }
      }
      return numbers;
  }
  else if(order == 'desc'){
      var done = false;
      while(!done){
          done = true;
          for(var i = 1; i < numbers.length; i++){
              if(numbers[i - 1] < numbers[i]){
                  done = false;
                  var tmp = numbers[i - 1];
                  numbers[i - 1] = numbers[i];
                  numbers[i] = tmp;
              }
          }
      }
      return numbers;
  }
}

let numbers = [150, 23, 53, 2, 13, 4];

console.log(tri(numbers, 'asc'));
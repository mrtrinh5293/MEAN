function findMinMaxAvg(arr){
    var min = arr[0]; // min
    var max = arr[0]; // max
    var sum = arr[0]; // sum
  
    for(var i = 1; i < arr.length; i++){
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
      sum = sum + arr[i];
    }
    return [min, max, sum / arr.length]
  }

  console.log("The minimum is" + min +  ", the maximum is" + max + ", and the average is" + sum/arr.length + ".")
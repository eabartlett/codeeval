var fs = require('fs');

function minPath(arr){
  /** returns the input array with the least sum
    * to get from the a square to the bottom right corner
    */
  for(var i = arr.length - 2; i >= 0; i--){
    arr[i][arr[0].length-1] += arr[i+1][arr[0].length-1];
  }
  for(var i = arr.length - 2; i >= 0; i--){
    arr[arr[0].length-1][i] += arr[arr[0].length-1][i+1];
  }
  for(var i = arr.length - 2; i >=0; i--){
    for(var j = arr[0].length - 2; j >= 0; j--){
      arr[i][j] += Math.min(arr[i+1][j], arr[i][j+1]);
    }
  }
  return arr;
}

function parseArrays(lineArr){
  var arrays = [];
  var stringArr = [];
  while(lineArr.length > 0){
    var len = parseInt(lineArr.shift());
    for(var i = 0; i < len; i++){
      stringArr.push(lineArr.shift());
    }
    arrays.push(stringToInt(stringArr, len));
    stringArr = [];
  }
  return arrays;
}

function stringToInt(arr, len){
  var numArr = [];
  for(var i = 0; i < len; i++){numArr[i] = []}
  arr.forEach(function(i){
    var elem = 0;
    var nums = i.split(',');
    nums.forEach(function(j){
      numArr[elem].push(parseInt(j));
      elem++;
    });
  });
  return numArr;
}


fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    lines = data.split('\n');
    lines.pop();
    var arrays = parseArrays(lines);
    for(var i = 0; i < arrays.length; i++){
      console.log(minPath(arrays[i])[0][0]);
    }
  }
});

exports.minPath = minPath;
exports.strToInt = stringToInt;
exports.parseArr = parseArrays;

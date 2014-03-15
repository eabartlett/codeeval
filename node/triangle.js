var fs = require('fs');

function maxPath(triangle){
  /* A Dynamic programming solution to the max path in a Triangle
   * equivalent to finding the max path in a DAG
   */
  for(var row = triangle.length - 2; row >= 0; row--){
    for(var index = 0; index < triangle.length; index++){
      //recursively going up tree filling in maxes
      triangle[row][index] += max(triangle[row+1][index], triangle[row+1][index+1]);
    }
  }
  return triangle[0][0]
}

function max(x, y){
  if(x >= y){
    return x;
  }
  return y;
}

fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    var lines = data.split('\n');
    lines.pop(); // to get rid of trailing empty item
    lines = lines.map(function(i){return i.trim().split(' ');}); // seperate the numbers
    var triangle = lines.map(function(i){return i.map(function(num){return parseInt(num)})});
    console.log(maxPath(triangle));
  }
});

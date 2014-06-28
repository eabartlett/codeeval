var fs = require('fs');

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    var lines = data.split('\n');
    lines.pop();
    arrays = lines.map(function(i){ 
      return i.split(':')[0].trim().split(' ').map(function(j){
        return parseInt(j);
      })
    });
    swaps = lines.map(function(i){
      return i.split(':')[1].trim().split(',').map(function(j){
        return j.trim().split('-').map(function(k){
          return parseInt(k);
        })
      })
    });
    for(var i = 0; i < arrays.length; i++){
      swaps[i].forEach(function(swapNum){
        swap(arrays[i], swapNum[0], swapNum[1]);
      });
      console.log(arrays[i].join(' '));
    }
  }
});

exports.swap = swap;

var fs = require("fs");

function duplicate(arr, n){
  var i = 0;
  var elem = arr[i];
  while(elem == i){
    elem = arr[++i];
  }
  arr[i] = n - 1;
  while(true){
    if(arr[elem] == elem){
      return elem;
    }
    var temp = arr[elem];
    arr[elem] = elem;
    elem = temp;
  }
}

fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    var lines = data.split('\n');
    lines.pop(); // to get rid of empty last line from split
    for(var i = 0; i < lines.length; i++){
      var nums = lines[i].split(';');
      nums.shift();
      nums = nums[0].split(',');
      var arr = [];
      for(var n = 0; n < nums.length; n++){
        arr.push(parseInt(nums[n]));
      }
      console.log(duplicate(arr, arr.length));
    }
  }
});
exports.duplicate = duplicate;

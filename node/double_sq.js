var fs = require('fs');

function doubleSqr(x,sqr){
  /** param x: the number you're checking to see is a double square
   * param sqr: an array holding true/false values for if a number is a perfect square
   */
  var times = 0;
  for(var i = 0; i < x/2; i++){
    if(sqr[i]){
      if(sqr[x - i]){
        times++;
      }
    }
  }
  return times++;
}

var squares = {
  arr: [true],
  curr: 0,
  currS: 0,
  next: function(n){
    for(var i = 0; i < n-this.curr; i++){
      this.arr.push(false);
    }
    this.curr += i;
    for(var j = this.currS+1; j <= Math.sqrt(n); j++){
      this.arr[j*j] = true;
    }
    this.currS = j;
  }
}

fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    var lines = data.split('\n');
    var cases = lines.shift();
    for(var i = 0; i < cases; i++){
      var val = parseInt(lines[i]);
      if(squares.arr.length - 1 < val){
        squares.next(val);
      }
      console.log(doubleSqr(val,squares.arr));
    }
  }
});

var fs = require('fs');


function primeArr(range){
  var numArray = [];
  for(var i = 0; i < range; i++){
    numArray[i] = 0;
  }
  var currPrime = 2;
  var primes = [];
  while(currPrime < range){
    primes.push(currPrime);
    for(var j = currPrime*2; j < range; j += currPrime){
      numArray[j]++;
    }
    currPrime++;
    while(numArray[currPrime] > 0){
      currPrime++;
    }
  }
  return primes;
}

fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    var lines = data.split('\n');
    lines.pop(); //pop off trailing '' on arr from split
    for(var i = 0; i < lines.length; i++){
      console.log(primeArr(parseInt(lines[i])).join(','));
    }
  }
});
exports.prime = primeArr;

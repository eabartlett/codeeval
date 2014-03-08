function primes(range){
  var nums = [];
  var primes = [];
  for(var i = 0; i < range; i++){
    nums[i] = 0;
  }
  var currPrime = 2;
  while(currPrime < range && primes.length < 1000){
    primes.push(currPrime);
    for(var nonPrime = currPrime*2; nonPrime < range; nonPrime += currPrime){
      nums[nonPrime]++;
    }
    currPrime++;
    while(nums[currPrime] > 0 && currPrime < range){
      currPrime++;
    }
  }
  return primes;
}

function sumArray(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

console.log(sumArray(primes(7920)));


exports.primes = primes;

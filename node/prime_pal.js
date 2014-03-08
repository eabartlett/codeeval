function reverseNum(n){
  var s = n.toString();
  var revN = [];
  for(var i = s.length -1; i >= 0; i--){
    revN.push(s[i]);
  }
  revN = parseInt(revN.join(""));
  return revN
}

function primePalindrome(range){
  var numArray = new Array();
  for(var i = 0; i < range; i++){
    numArray[i] = 0;
  }
  var currPrime = 2;
  while(currPrime < range){
    for(var j = currPrime*2; j < range; j += currPrime){
      numArray[j]++;
    }
    currPrime++;
    while(numArray[currPrime] > 0){
      currPrime++;
    }
  }
  for(var prime = range -1; prime >= 0; prime--){
    if(numArray[prime] == 0){
      if(reverseNum(prime) == prime){
        break;
      }
    }
  }
  return prime;
}

exports.primePalindrome = primePalindrome;
exports.reverseNum = reverseNum;

console.log(primePalindrome(1000));

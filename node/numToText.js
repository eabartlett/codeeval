var fs = require('fs');

var single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var ten = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var order = ['ones', 'teens', 'tens', 'hundred', 'thousand', 'million'];

var multipliers = {
  'ones': function(num){
    return single.indexOf(num);
  },
  'teens': function(num){
    return teens.indexOf(num) + 10;
  },
  'tens': function(num){
    return (ten.indexOf(num)+2) * 10;
  },
  'hundred': function(num){return 100;},
  'thousand': function(num){ return 1000;},
  'million': function(num){return 1000000;}
}

function getNeg(arr){
  return arr[0] == 'negative';
}

function Number(str){
  var group;
  if(single.indexOf(str) != -1){
    group = 'ones';
  }else if(ten.indexOf(str) != -1){
    group = 'tens';
  }else if(teens.indexOf(str) != -1){
    group = 'teens';
  }else{
    group = str;
  }
  return {
    'group': group,
    num: multipliers[group](str)
  }
}

function wordToText(str){
  var nums = str.split(' ');
  var neg = getNeg(nums);
  if(neg){nums.shift();}
  nums = nums.map(function(i){return Number(i);});
  var total = 0;
  var curr = 1;
  var numOrder = -1;
  while(nums.length > 0){
    var num = nums.shift();
    if(order.indexOf(num['group']) < numOrder){
      total += curr;
      curr = 1;
    }
    numOrder = order.indexOf(num['group']);
    curr *= num.num;
  }
  total += curr;
  return (neg)?-1*total:total;
}

fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    var lines = data.split('\n');
    //get rid of trailing null in array
    lines.pop();
    lines.forEach(function(i){console.log(wordToText(i))});
  }
});

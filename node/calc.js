var fs = require('fs');

funcs = {
  '*' : function(x,y){ return x * y},
  '+': function(x,y){ return x + y},
  '-': function(x,y){ return (y)?x - y:0-x},
  '^': Math.pow,
  '/': function(x,y){ return x/y}
};

ops = ['(', ')', '^', '*', '/', '+', '-'];

function calc_read(src){
  /** The function that splits the source into its 
   *  constituant functions and numbers 
   */
  src = src.split('');
  var seq = [];
  var i = 0;
  while(i < src.length){
    if(ops.indexOf(src[i]) != -1){
      if(i != 0){
        seq.push(src.splice(0, i));
      }
      seq.push(src.shift());
      i = 0;
      continue;
    }
    i++;
  }
  // catch final item if a number
  if(src.length != 0){
    seq.push(src);
  }
  // combine the numbers together
  return seq.map(function(elem){
    if(typeof(elem) == 'object'){
      return elem.join('');
    }
    return elem;
  });
}

function firstFunction(src){
  var start = -1;
  //check for uniary '-' first
  if(src.indexOf('-') != -1 &&
    ops.indexOf(src[src.indexOf('-')-1]) != -1){
    
    start = src.indexOf('-');
    return {l: 2, s: start};
  }else{
    for(var i = 0; i < ops.length; i++){
      if(src.indexOf(ops[i]) != -1){
        start = src.indexOf(ops[i]) -1;
        if(ops[i] == '('){
          start++;
        }
        break;
      }
    }
  }
  if(src[start+1] == '+' && src.indexOf('-') != -1){
    start = Math.min(start, src.indexOf('-')-1);
  }
  if(src[start+1] == '*' && src.indexOf('/') != -1){
    start = Math.min(start, src.indexOf('/')-1);
  }
  var len = 3;
  // for arbitrary length paren segments
  if(src[start] == '('){
    len = src.indexOf(')') - start + 1;
  }
  return {l: len, s: start};
}

function calc_eval(src){
  //for base case of x <function> y
  console.log(src);
  if(src.length == 3){
    return funcs[src[1]](parseFloat(src[0]),parseFloat(src[2])); 
  }
  //for uniary '-' base case
  if(src.length == 2){
    return funcs['-'](parseFloat(src[1]));
  }
  //for paren statements
  if(src[0] == '(' && src.indexOf(')') == src.length -1){
    console.log('Paren case');
    src.shift();
    src.pop();
  }
  while(src.length > 1){
    var first = firstFunction(src);
    var len = first.l;
    var start = first.s;
    // recursive call to calc_eval for first in Order of Operations
    src.splice(start, 0, calc_eval(src.splice(start, len)));
  }
  return src[0];
}

fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    console.log(data);
    var lines = data.split('\n');
    lines.pop();
    for(var i = 0; i < lines.length; i++){
      lines[i] = lines[i].replace(/\s+/g, '');
      console.log(Math.round(calc_eval(calc_read(lines[i]))*100000)/100000);
    }
  }
});
exports.functions = funcs;
exports.read = calc_read;
exports.eval = calc_eval;

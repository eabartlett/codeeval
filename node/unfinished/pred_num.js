var fs = require('fs');

function mod(n, m){
  var val = n % m;
  while( val < 0){
    val += m;
  }
  return val
}

var seq = {
  curr : [0],
  range = [0,0];
  computeNext : function(){
    var newPart = [];
    for(var i = 0; i < this.curr.length; i++){
      newPart.push(mod((this.curr[i] + 1), 3));
    }
    this.curr = newPart;
    this.range = [this.range[1]+1, this.range[1]+this.curr.length];
  },
  computePrev : function(){
    var newPart = [];
    for(var i = this.curr.length/2; i < this.curr.length; i++){
      newPart.push(mod((this.curr[i] - 1), 3));
    }
    this.curr = newPart;
    this.range = [this.range[0], this.range[1]+this.curr.length];
  }
}

function seqNo(n){
  if(n > seq.range[1]){
    while(n > seq.range[1]){
      seq.computeNext();
      console.log("Stuck in while");
    }
  }
  if(n < seq.range[0]){
    while( n < seq.range[0]){
      seq.computePrev();
    }
  }
  return seq.curr[n];
}

fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    var lines = data.split('\n');
    console.log(lines);
    lines.pop();
    for(var line = 0; line < lines.length; line++){
      console.log(seqNo(parseInt(lines[line])));
    }
  }
});

var input = [ '284822047',
  '448',
  '248452657',
  '215562226',
  '1607089740',
  '32088023',
  '157614649',
  '2367834004',
  '192386558',
  '1545093629',
  '101',
  '85458872',
  '507',
  '99612601',
  '5',
  '209958787',
  '36275943',
  '2141739815',
  '40',
  '537',
  '381952194',
  '263612191',
  '1',
  '3000000000',
  '1566083086',
  '222',
  '25684',
  '732',
  '175133610',
  '346',
  '890103341',
  '0',
  '227577617',
  '92371889',
  '2291031969',
  '446',
  '91215625',
  '68695860',
  '2554335263',
  '331408963'];

/*  for(var i = 0; i < input.length; i++){
    console.log(seqNo(parseInt(input[i])));
  }*/

exports.seq = seq;

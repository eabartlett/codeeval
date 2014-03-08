var fs = require('fs');


function Stack(){
  this.list = [];
  this.push = function(item){
    this.list.push(item);
  };
  this.pop = function(){
    return this.list.pop();
  };
  this.isEmpty = function(){
    return this.list.length == 0
  };
}

fs.readFile(process.argv[2], 'utf8', function(err, data){
  if(err){
    print(err);
    return;
  }
  var data = data.split('\n');
  for( var i = 0; i < data.length; i++){
    var stack = new Stack();
    var line = data[i].split(' ');
    var out = [];
    for(var j = 0; j < line.length; j++){
      stack.push(line[j]);
    }
    for(var j = 0; j < line.length; j++){
      out.push(stack.pop());
      j++;
      stack.pop();
    }
    console.log(out.join(' '));
  }
});

var fs = require('fs');


fs.readFile(process.argv[2], 'utf8', function(err, data){
  if(err){
    print(err);
    return;
  }
  var data = data.split('\n');
  for( var i = 0; i < data.length; i++){
    var line = data[i].split(' ');
    var item = parseInt(line.pop());
    if(item > line.length || line.length == 0){
      continue;
    }
    console.log(line[line.length-item]);
  }
});

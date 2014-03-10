var fs = require('fs');

function seqTransformOver(bin, alpha){
  var simpleAlpha = alpha.replace(/B+/g, 'B');
  var simpleBin = bin.replace(/1+/g, '1');
  return simpleAlpha.split('B').length <= simpleBin.split('1').length;
}

fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if(!err){
    var lines = data.split('\n');
    lines.pop();
    for(var i = 0; i < lines.length; i++){
      var probLine = lines[i].split(' ');
      var works = seqTransformOver(probLine[0], probLine[1]);
      if(works){
        console.log('Yes');
      } else {
        console.log('No');
      }
    }
  }
});

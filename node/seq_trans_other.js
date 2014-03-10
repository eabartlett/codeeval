function seqTransformIter(bin, alpha){
  binArr = bin.split('');
  alphaArr = alpha.split('');
  alphaFront = alphaArr.shift();
  binFront = binArr.shift();
  while(binFront && alphaFront){
    if(parseInt(binFront) == 0){
      if(alphaFront == 'B'){
        binFront = binArr.shift();
        continue;
      } else {
        while(alphaFront == 'A'){
          alphaFront =  alphaArr.shift();
        }
        while(parseInt(binFront) == 0){
          binFront = binArr.shift();
        }
      }
    }else{
      if(alphaFront == 'B'){
        while(alphaFront == 'B'){
          alphaFront =  alphaArr.shift();
        }
        while(parseInt(binFront) == 1){
          binFront = binArr.shift();
        }
      }else{
        while(alphaFront == 'A'){
          alphaFront =  alphaArr.shift();
        }
        binFront = binArr.shift();
      }
    }
  }
  return alphaArr.length == 0;
}

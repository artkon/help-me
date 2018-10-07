module.exports = function count(s, pairs) {

  function NOD(a, b){
    while(a != 0 && b != 0){
			(a > b) ? a = a % b : b = b % a;
    }
    return a + b;
  }

  let N = 1;
  for(let i = 0; i < pairs.length; i++){
  	N *= Math.pow( pairs[i][0], pairs[i][1] )
  }

  if(N == Infinity || N > 100000000){
  	return 0;
  }

  let result = 0;
  let tempCount = 0;
  let mask = s.split('');

	
  for(let k = 1; k <= N; k++){
  	for(let j = 0; j < mask.length; j++){
  		if( NOD(k + j, N) == 1 && mask[j] == 1 ){
  			tempCount++;
  		} else if( NOD(k + j, N) > 1 && mask[j] == 0 ){
  			tempCount++;
  		}
  	}
  	if(tempCount == mask.length){
  		result++;
  		tempCount = 0;
  	} else {
  		tempCount = 0;
  	}
  }
  return result;
}
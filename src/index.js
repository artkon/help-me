module.exports = function count(s, pairs) {

  function NOD(a, b){
    while(a != 0 && b != 0){
    	if(a > b){
    		a = a % b;
    	} else {
    		b = b % a;
    	}
    }
    return a + b;
  }

  var N = 1;
  for(let i = 0; i < pairs.length; i++){
  	N *= Math.pow( pairs[i][0], pairs[i][1] )
  }

  if(N == Infinity || N > 100000000){
  	console.log("Infinity");
  	return 0;
  }

  var result = 0;
  var tempCount = 0;
  var mask = s.split('');
  

  for(let k = 1; k <= N; k++){
  	for(let j = 0; j < mask.length; j++){
  		if( NOD(k + j, N) == 1 && mask[j] == 1 ){
  			tempCount++;
  			// console.log('k: ' + k + ', j:' + j + ', NOD:' + NOD(k + j, N) + ', N:' + N);
  		} else if( NOD(k + j, N) > 1 && mask[j] == 0 ){
  			tempCount++;
  			// console.log('k: ' + k + ', j:' + j + ', NOD:' + NOD(k + j, N) + ', N:' + N);
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
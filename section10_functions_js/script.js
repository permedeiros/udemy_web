console.log("CONNECTED");
function printReverse(array){
	for(var i = array.length - 1; i >= 0; i--){
	 	console.log(array[i]);
	}
}

function isUniform(array){
	var lastItem = array[0];
	for(var i = 1; i < array.length; i++){
	 	if(lastItem !== array[i]) return false;
	 	lastItem = array[i];
	}

	return true;
}

function sum(array){
	var sum  = array[0];
	for(var i = 1; i < array.length; i++){
	 	sum += array[i];
	}

	return sum;
}

function max(array) {
	var max  = array[0];
	for(var i = 1; i < array.length; i++){
	 	if(array[i] > max) max = array[i]; 
	}

	return max;
}

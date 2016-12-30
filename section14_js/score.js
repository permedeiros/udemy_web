console.log("CONNECT");

var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
numInput.value = 5;
var winnerValue = Number(numInput.value);


var p1Score = 0;
var p2Score = 0;
var gameOver = false;




p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score == winnerValue){
			gameOver = true;
			document.getElementById("p1_display").classList.add("winner");
		}
	}
	document.getElementById("p1_display").innerText = p1Score;	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score == winnerValue){
			gameOver = true;
			document.getElementById("p2_display").classList.add("winner");
		}
	}
	document.getElementById("p2_display").innerText = p2Score;	
});

function reset(argument) {
	p1Score = 0;
	p2Score = 0;
	document.getElementById("p1_display").innerText = "0";
	document.getElementById("p2_display").innerText = "0";
	document.getElementById("p1_display").classList.remove("winner");
	document.getElementById("p2_display").classList.remove("winner");
	
	gameOver = false;
}

resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	document.getElementById("max_value").innerText = this.value;
	winnerValue = Number(this.svalue);
	reset();
});
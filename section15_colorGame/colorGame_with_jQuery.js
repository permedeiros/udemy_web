
var colors = [];


var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var resetButton = document.getElementById("resetButton");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.getElementById("easyButton");
var h1 = document.querySelector("h1");
var numSquares = 6;


init();

/**
 * Função de inicialização
 */
function init(){
	resetGame(numSquares,false);
	setupSquares();
	setupModeButtons();
	
	resetButton.addEventListener("click", function(){
		resetGame(numSquares);
	});
}


/**
 * Reinicia a GUI carregando novas cores de acordo com o números de corres passado como parâmetro
 * @param  {[number]} numColors [Número de cores que serão carregadas]
 * @param  {[boolean]} fade [Efetuar ou não fade ao remover/inserir os quadrados]
 */
function resetGame(numColors, fade){
	generateRandonColors(numColors, fade);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	resetButton.textContent = "New Colors";
}


/**
 * Gera cores aleatórias para o vetor de cores que são usadas para preencher os quadrados
 */
function generateRandonColors(numColors, fade) {
	colors = [];
	for (var i = modeButtons.length*3 - 1; i >= 0; i--) {
		if(i < numColors){
			colors[i] = getRandonColor();
			squares[i].style.backgroundColor = colors[i];
			// force the element to show
			if(fade){
				$(".square:eq(" + i + ")").fadeIn(500);	
			}
			else squares[i].style.display = "block";
			
		}
		else{
			// hide the elemente
			if(fade){
				$(".square:eq(" + i  + ")").fadeOut(500);
			}
			else squares[i].style.display = "none";	
			
		}
	}
}

/**
 * Escolhe aleatoriamente uma cor dentro do vetor de cores
 */
function pickColor(){
	var randon = getRandomInt(0, colors.length - 1);
	var color = colors[randon];
	return color;
}


/**
 * Inicializa cada um dos quadrados de cor
 */
function setupSquares(argument) {
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].addEventListener("click", squareClickEvent);
	}
}
/**
 * Inicializa cada um dos botões de modo - Easy, Normal e Hard
 * @return {[type]} [description]
 */
function setupModeButtons(){
	for (var j = modeButtons.length - 1; j >= 0; j--) {
		modeButtons[j].addEventListener("click",modeButtonEvent);
	}
}

/**
 * Função de tratamento do evento de click nos quadrados de cor 
 */
function squareClickEvent() {
	var clickedColor = this.style.backgroundColor;
	if(clickedColor === pickedColor){
		message.textContent = "Correct";
		changeSquaresColors(pickedColor);
		h1.style.backgroundColor = pickedColor;
		resetButton.textContent = "Play Again?";
	}
	else{
		this.style.backgroundColor = "#232323";
		message.textContent = "Try Again";
	}
}

/**
 * Função de tratamento do envento de click dos botões de modo - Easy, Medium, Hard
 */
function modeButtonEvent(){
	for (var i = modeButtons.length - 1; i >= 0; i--) {
		if(modeButtons[i] != this){
			modeButtons[i].classList.remove("selected");
		}
		else{
			modeButtons[i].classList.add("selected");	
			numSquares = (i+1)*3;
		}
	}
	resetGame(numSquares, true);
}




/**
 * Get a randon rgb string color - rgb('Rvalue', 'Gvalue', 'Bvalue');
 */
function getRandonColor(){

	var strColor = "rgb(" +	getRandomInt(0,255) + ", " +
						 							getRandomInt(0,255) + ", "+
					 	 							getRandomInt(0,255) + ")";
	return strColor;
}
/**
 * Muda as cores de todos os quadrados para a cor passada como argumento
*/
function changeSquaresColors(color) {
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;
	}
}


/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}







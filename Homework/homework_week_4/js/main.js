var d = document;
var	totalMe = 0;
var	totalComputer = 0;
var humanScore = d.getElementById("humanScore");
var computerScore = d.getElementById("computerScore");
var myScore = 0
var coScore = 0


// Set up computer choice function
function randomNumber(min, max) {
  
  return (Math.random() * (max - min) + min);
}
//console.log(randomNumber(1, 3))

//Click choose paper button
d.getElementById("paper").onclick = function() {
//debugger

//Get computer choice (1 = Paper; 2 = Scissors; 3 = Rock)
computerChoose = randomNumber(1, 3).toFixed(0);

console.log(computerChoose);

// evaluate result
if (computerChoose == 3) {
		myScore = 1;
		totalMe += 1;
		humanScore.innerHTML = totalMe;

	}	

	if (computerChoose == 2) {
		coScore = 1;
		totalComputer += 1;
		computerScore.innerHTML = totalComputer;
	}
	
	else {
		myScore = 0
		coScore = 0;
	}

}

//Click choose scissors button
d.getElementById("scissors").onclick = function() {
//debugger

//Get computer choice (1 = Paper; 2 = Scissors; 3 = Rock)
computerChoose = randomNumber(1, 3).toFixed(0);

console.log(computerChoose);

// evaluate result
if (computerChoose == 1) {
		myScore = 1;
		totalMe += 1;
		humanScore.innerHTML = totalMe;

	}	

	if (computerChoose == 3) {
		coScore = 1;
		totalComputer += 1;
		computerScore.innerHTML = totalComputer;
	}
	
	else {
		myScore = 0
		coScore = 0;
	}

}

//Click choose rock button
d.getElementById("rock").onclick = function() {
//debugger

//Get computer choice (1 = Paper; 2 = Scissors; 3 = Rock)
computerChoose = randomNumber(1, 3).toFixed(0);

console.log(computerChoose);

// evaluate result
if (computerChoose == 2) {
		myScore = 1;
		totalMe += 1;
		humanScore.innerHTML = totalMe;

	}	

	if (computerChoose == 1) {
		coScore = 1;
		totalComputer += 1;
		computerScore.innerHTML = totalComputer;
	}
	
	else {
		myScore = 0
		coScore = 0;
	}

}

	// console.log(myScore)
	// console.log(totalMe)

	// console.log(myScore)
	// console.log(coScore)



window.onload = function() {
  
	var celsius = document.getElementById("celsius"),
		result = document.getElementById("result"),
		button = document.getElementById("submit");	
	
	button.onclick = function () {
		//console.log("Hi");
		sum = (celsius.value * 1.8 + 32).toFixed(2)

		result.innerHTML = sum
	}

}

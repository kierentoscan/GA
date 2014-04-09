window.onload = function() {

	var name = document.getElementById("name");

	name.innerHTML = "Kieren";
	
	var sum = document.getElementById("sum");

	sum.innerHTML = 24 + 56 + 111;

	var shouldIGetAHaircut = true;
	var haircut = document.getElementById("haircut");


	if (shouldIGetAHaircut) {
		haircut.innerHTML = "Yes you should!";
	}

}

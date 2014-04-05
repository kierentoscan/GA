function helloWorld() {
	console.log("Hello Kieren");
}

helloWorld();

// function with arguments

function addAndPrint(num1, num2) {
	var sum = num1 + num2;
	console.log(sum);
}

addAndPrint(1, 5);

// javascript concatenation

function multiplyAndPrint(num3, num4) {
	var multiplication = num3 * num4;
	console.log("The multiplication is: "+ multiplication)
}

multiplyAndPrint(2, 3);

// anonymous function
// returning a value

var division = function(num5, num6) {
	//	debugger
	return num5 / num6
}

console.log(division(10, 5));


// Name and Age function

var nameAndAge = function(name, age) {
	return "My name is "+ name + " and my age is " + age + ".";

}

console.log(nameAndAge("Kieren", 36));	
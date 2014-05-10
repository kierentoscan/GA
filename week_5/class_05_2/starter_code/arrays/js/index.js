$(function() {
   

    var myArr = ["hello", , 54.3, true];

    console.log(myArr);

    console.log(myArr[0]);
    console.log(myArr[1]);

    myArr[1] = "Stuff";

    console.log(myArr[1]);

    var fruits = ["Apples", "Oranges", "Pears"];


    myArr = fruits;

    console.log(myArr[0]);

    // Return number of items in an array: .length
    // NOTE: Length above is a property not a method

    console.log(myArr.length);

    // Add elements to end of array with .push Property

    myArr.push('Strawberries');

    console.log(myArr);	

    // Can remove from the end also with .pop

    myArr.pop();

    console.log(myArr);

   	// use .splice to insert content at a particular number
   	// number, remove anything?, value

   	myArr.splice(2, 0, "Mango");

   	console.log(myArr);

// Unrelated to Arrays

// Attributes - can manipulate with jQuery

	var className = $("h1").attr("class");
	console.log(className);

	className = $("h1").attr("class", "new-heading");

	console.log(className);

//  for each loops

	var names = ["Daniel","James","CJ"];

	names.forEach(function(element, index){
		console.log(element,index});	
























});
// select the entry field and store in a variable (going to manipulate it later)

// listen to submit of form

// fire a call to a function - add new entry

// define the new entry function

// add a new row, use innerHTML to insert new item inside

// update the total

var d = document;
var entryField = d.getElementById("newEntry");
var total = 0;

d.getElementById("entry").onsubmit = addNewEntry;

function addNewEntry() {
	
	var entry = parseFloat(entryField.value); 
	total += entry;

	// update total

	d.getElementById("total").innerHTML = convertCurrency(total);

	var entryValue = convertCurrency(entryField.value);
	//console.log(entryValue);

	var entryRow = "<tr><td></td><td>" + entryValue + "</td></tr>";

	d.getElementById("entries").innerHTML += entryRow;

	clearInput();

// return false is to prevent the default behaviour of a form submission - which is to send your data somewhere else and refresh the page
	return false; 		
}

////

function convertCurrency(entryValue) {
	var Currency = parseFloat(entryValue);

		Currency = Currency.toFixed(2);
		Currency = "£" + Currency;

		return Currency;
}

var clearInput = function() {
	entryField.value = " ";
}



$(function() {

	var bmw = {
		make: "BMW",
		model: "1 Series",
		year: 2013
	};

	var ferrari = {
		make: "Ferrari",
		model: "Enzo",
		year: 2010
	};

	addcartolist(bmw);
	addcartolist(ferrari);	

});

var addcartolist = function(car) {
	$("stock").append("<li>" + car.make + " " + car.model + " " + car.year + "</li>");
};

var Car = function(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
};

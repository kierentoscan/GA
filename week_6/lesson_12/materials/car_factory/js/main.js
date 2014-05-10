$(function() {


/*
		var cars = [
			new Car("BMW", "1 Series", 2013),
			new Car("Ferrari", "Eno", 2010),
			new Car("Vauxhall", "Nova", 1980),
			new Car("Chevrolet", "Whatever", 2014)
			];


$.each(cars, function(index, car) {
	addCarToList(car);
});*/

$("#car-form").on("submit", function(event) {
	event.preventDefault();

	var make = $("#make").val(),
		model = $("#model").val(),
		year = $("#year").val();

	var car = new Car(make, model, year);

	addCarToList(car);

})


});

var addCarToList = function(car) {
	$("#stock").append("<li>" + car.make + " " + car.model + " " + car.year + "</li>");
};

var Car = function(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.beepHorn = function() {
		console.log(this.model + " beeped its horn!");	
	};
};



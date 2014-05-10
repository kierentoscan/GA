$(function() {

var images = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg",
"images/food4.jpg",];

var position = 0

function nextImage() {
	if(position === (images.length - 1)) {
	}
	else if(position < images.length) {
		position++;
		$("#image-to-vote-on").attr("src", images[position]);
	}
}	

function previousImage() {
	
	if(position === 0)	 {
	}
	else if(position > 0) {
		position--;
		$("#image-to-vote-on").attr("src", images[position]);
	}
}
// link button forward to nextImage function

$("#backbtn").on("click", previousImage);
$("#skipbtn").on("click", nextImage);

})

// variable
// first array of images to loop through
// variable to hold the index position

// functions:
// function to change image based on index
// function to go forward
// function to go back
// 
// length of the array? when at last image finish

















// second array is image score; YourVote ID; average of this

// functionality on first array is move forward on vote; forward on forward
//  or back on back

// on skip array value = 0; move to next
//  on vote move to next
// on final skip or vote calculate average
// insert new para below "you have reached the end
//  + your deliciousness score is AVERAGE or ARRAY"var fruits = ["Apples", "Oranges", "Pears"];
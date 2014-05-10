$(document).ready(function(){

	// console.log('meow');

	//Scrolld
	$("[id*='Btn']").stop(true).on('click',function(e){
		e.preventDefault();$(this).scrolld();
	});

	//fitvids
	$("body").fitVids();

	//flexslider
	$('.flexslider').flexslider({
		animation: "slide"
	})

	//sharebutton
		new Share(".share-button", {
		  networks: {
		    facebook: {
		      app_id: "abc123"
		    }
		  }
		});

})
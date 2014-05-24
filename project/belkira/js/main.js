/**
@desc Controls the hiding and unhiding of sections at the top of the page
*/


$(function() {

	$(" .nav-item").on("click", function(event) {
		event.preventDefault();
		$(".nav-header, .nav-content").removeClass("current");
		$(this).addClass("current");
	})

	$("#about").on("click", function(event) {
		$("#aboutHeader").addClass("current");
		$("#aboutContent").addClass("current");
	});

	$("#howItWorks").on("click", function(event) {
		$("#howItWorksHeader").addClass("current");
		$("#howItWorksContent").addClass("current");
	});

	$("#locations").on("click", function(event) {
		$("#locationsHeader").addClass("current");
		$("#locationsContent").addClass("current");
	});

});
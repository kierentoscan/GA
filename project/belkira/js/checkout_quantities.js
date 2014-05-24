/**
@desc This provides the funcitonality for the checkout

*/

$("#update-total").click(function() {

	var grandTotal = 0;

	$('.stock-item').each(function(){



		$(this).addClass('current-stock');
	
		var qty = $('.current-stock .item-qty').val();
		var dollar = $('.current-stock .cut-price').text();
		var unitP = parseFloat(dollar.replace(/[$,]+/g,""));
		var total = qty * unitP;

		$('.current-stock .line-total').text( '$' + parseFloat(total).toFixed(2));

		grandTotal += total

		$(this).removeClass('current-stock');

	});

	$('#grand-total').text( '$' + parseFloat(grandTotal).toFixed(2))


});


/*CLEAR TOTALS*/
$("#clear-total").click(function() {

	$('.stock-item').each(function(){

		$(this).addClass('current-stock');
		$('.current-stock .line-total').text('$0.00');
		$('.current-stock .item-qty').val('0');
		$(this).removeClass('current-stock');

	});

	$('#grand-total').text('$0.00');


});








// updated button - on.click

//get the quantity for row
//get the price for the row
//multiply both
//return multiply value into total cell on submit
//add each total to the grand total

//clear function to clear all the input quantities cells

/*var legQ = 0;
var legUnitP = 0;*/

$("#update-total").click(function() {

/*LEG*/
	var legQ = $('#leg-qty').val();

	var legDollar = $('#leg-price').text();

	var legUnitP = parseFloat(legDollar.replace(/[$,]+/g,""));

	var legTotal = legQ * legUnitP

	$('#leg-total').text( '$' + parseFloat(legTotal).toFixed(2));	

/*SHANK*/
	var shankQ = $('#shank-qty').val();

	var shankDollar = $('#shank-price').text();

	var shankUnitP = parseFloat(shankDollar.replace(/[$,]+/g,""));

	var shankTotal = shankQ * shankUnitP

	$('#shank-total').text( '$' + parseFloat(shankTotal).toFixed(2));	

/*CHUMP*/
	var chumpQ = $('#chump-qty').val();

	var chumpDollar = $('#chump-price').text();

	var chumpUnitP = parseFloat(chumpDollar.replace(/[$,]+/g,""));

	var chumpTotal = chumpQ * chumpUnitP

	$('#chump-total').text( '$' + parseFloat(chumpTotal).toFixed(2));	

/*BREAST*/
	var breastQ = $('#breast-qty').val();

	var breastDollar = $('#breast-price').text();

	var breastUnitP = parseFloat(breastDollar.replace(/[$,]+/g,""));

	var breastTotal = breastQ * breastUnitP

	$('#breast-total').text( '$' + parseFloat(breastTotal).toFixed(2));	

/*LOIN*/
	var loinQ = $('#loin-qty').val();

	var loinDollar = $('#loin-price').text();

	var loinUnitP = parseFloat(loinDollar.replace(/[$,]+/g,""));

	var loinTotal = loinQ * loinUnitP

	$('#loin-total').text( '$' + parseFloat(loinTotal).toFixed(2));

/*RACK*/
	var rackQ = $('#rack-qty').val();

	var rackDollar = $('#rack-price').text();

	var rackUnitP = parseFloat(rackDollar.replace(/[$,]+/g,""));

	var rackTotal = rackQ * rackUnitP

	$('#rack-total').text( '$' + parseFloat(rackTotal).toFixed(2));	

/*SHOULDER*/
	var shoulderQ = $('#shoulder-qty').val();

	var shoulderDollar = $('#shoulder-price').text();

	var shoulderUnitP = parseFloat(shoulderDollar.replace(/[$,]+/g,""));

	var shoulderTotal = shoulderQ * shoulderUnitP

	$('#shoulder-total').text( '$' + parseFloat(shoulderTotal).toFixed(2));	

/*NECK*/
	var neckQ = $('#neck-qty').val();

	var neckDollar = $('#neck-price').text();

	var neckUnitP = parseFloat(neckDollar.replace(/[$,]+/g,""));

	var neckTotal = neckQ * neckUnitP

	$('#neck-total').text( '$' + parseFloat(neckTotal).toFixed(2));	

/*TOTAL*/

	var grandTotal = (legTotal + shankTotal + chumpTotal + breastTotal + loinTotal + rackTotal + shoulderTotal + neckTotal)


$('#grand-total').text( '$' + parseFloat(grandTotal).toFixed(2));


});


/*CLEAR TOTALS*/
$("#clear-total").click(function() {
	$('#leg-qty').val('0');
	$('#leg-total').text('$0.00');
	$('#grand-total').text('$0.00');

});










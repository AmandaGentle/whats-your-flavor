$(document).ready(function() {


	// auto scroll to top of page	
	$('#go_top').click(function() {   // #go_top is the button that starts the scroll
		$('body').animate({scrollTop: 0}, 900); // you can adjust "900" to change speed of scroll
	});

	// auto scroll to "ONE"
	$("#go_van").click(function() {  // #go_one is the button that starts the scroll
    	$('html, body').animate({
        	scrollTop: $("#van_link").offset().top // #one is destination of scroll
    	}, 900);  // you can adjust "900" to change speed of scroll
	});

	// auto scroll to "TWO"
	$("#go_two").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#two").offset().top
    	}, 900);
	});

	// auto scroll to "THREE"
	$("#go_three").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#three").offset().top
    	}, 900);
	});
	
});
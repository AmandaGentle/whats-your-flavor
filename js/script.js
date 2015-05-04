$(document).ready(function() {


	// auto scroll to top of page	
	$('#go_top').click(function() {   // #go_top is the button that starts the scroll
		$('body').animate({scrollTop: 0}, 900); // you can adjust "900" to change speed of scroll
	});

	// auto scroll to "Vanilla"
	$("#go_van").click(function() {  // #go_one is the button that starts the scroll
    	$('html, body').animate({
        	scrollTop: $("#van_link").offset().top // #one is destination of scroll
    	}, 900);  // you can adjust "900" to change speed of scroll
	});

	// auto scroll to "Cookies 'n Cream"
	$("#go_oreo").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#oreo_link").offset().top
    	}, 900);
	});

	// auto scroll to "Cookie Dough"
	$("#go_cookie").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#cookie_start").offset().top
    	}, 900);
	});
	
		// auto scroll to "Mint Chip"
	$("#go_mint").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#mint_link").offset().top
    	}, 900);
	});
	
			// auto scroll to "Strawberry"
	$("#go_straw").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#straw_start").offset().top
    	}, 900);
	});
	
				// auto scroll to "Neapolitan"
	$("#go_nea").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#nea_start").offset().top
    	}, 900);
	});
	
					// auto scroll to "Coffee"
	$("#go_coffee").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#coffee_start").offset().top
    	}, 900);
	});
	
						// auto scroll to "Rocky Road"
	$("#go_rocky").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#rocky_start").offset().top
    	}, 900);
	});
	
							// auto scroll to "Chocolate"
	$("#go_choco").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#choco_start").offset().top
    	}, 900);
	});
	
								// auto scroll to "Chocolate"
	$("#go_method").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#info_start").offset().top
    	}, 900);
	});
	
	
	$('#nav').mouseenter(function() {
		$(this).animate({right: "0px"});
	});
	
	$('#nav').mouseleave(function() {
		$(this).animate({right: "-200px"});
	});
	
});
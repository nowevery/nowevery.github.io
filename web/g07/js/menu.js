//web menu	
	$(document).ready(function () {
		//Append a div with hover class to all the LI
		$('.menu_top dd').append('<div class="hover"></div>');
		
		$('.menu_top dd').hover(
			//Mouseover, fadeIn the hidden hover class	
			function() {
				$(this).children('div').stop(true, true).fadeIn(500);	
			}, 
			//Mouseout, fadeOut the hover class
			function() {
				$(this).children('div').stop(true, true).fadeOut(500);	
		})
	});

//top menu浮動
jQuery("document").ready(function($){
	
	var nav = $('.nav-container');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 85) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});

 


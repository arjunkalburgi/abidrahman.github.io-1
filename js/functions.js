var $document = $(document),
		windowHeight = $(window).height(),
		windowWidth = $(window).width();

$(document).scroll(function() {
	  if ($document.scrollTop() >= (windowHeight * 0.8)) {
		// user scrolled 50 pixels or more;
		// do stuff
		$(".navi_fade").fadeIn(700);
    $(".header").fadeIn(700);
	  }
	  else {
     $(".header").fadeOut(300);
		 $(".navi_fade").fadeOut(300);
	  }
});





//$(document).ready(function() {	
//	var windowHeight = $(window).height();
//			
//	$(".contact_height").css('height', windowHeight),
//	$("#body").css('marginBottom', windowHeight);
//});
//
//$(window).resize(function() {	
//	var windowHeight = $(window).height();
//			
//	$(".contact_height").css('height', windowHeight),
//	$("#body").css('marginBottom', windowHeight);
//});

/*------------------------
TABLE OF CONTENTS
-------------------------
    - PRELOADER
	- STICKY ADD
    - SCROLL DOWN SPEED
	- MENU-BAR TOGGLE
	- COUNTER
    - SCROLL TOP SHOW
	- SCROLL TOP CLICK EVENT
    - TESTIMONIAL CAROUSEL
    - NUTRITION CAROUSEL
    - ACCORDIAN COLLAPSE
    - HOME	CAROUSEL
    - INIT WOW
 ----------------------*/

(function($)  {
	"use strict"; // Start of use strict
	
	// PRELOADER
    $(window).on('load', function() {
        $('.preloader').delay(3000).fadeOut('slow');
    });
	
	// STICKY ADD
	window.onscroll = function() {myFunction()};
	var header = document.getElementById("navigation");
	var sticky = header.offsetTop;
	function myFunction() {
	  if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	  } else {
		header.classList.remove("sticky");
	  }
	}
	
	// SCROLL DOWN SPEED
	$('a.page-scroll').click(function(event) {
		var targetHref = $(this).attr('href');
		$('html, body').animate({		
			scrollTop: $(targetHref).offset().top		
		}, 1250);
		event.preventDefault();
	});
	
	// MENU-BAR TOGGLE
	$('.bar-toggler').on('click', function () {
		$('.menu-bar').toggleClass('active');
		$('.bar-toggler').toggleClass('change');
	});
	
    // COUNTER
    $('.counter-data').appear(function() {
		$('.counter-number').countTo();
    });
	
    // SCROLL TOP SHOW
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//SCROLL TOP CLICK EVENT
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	
	//  ACCORDION COLLAPSE
	$('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
	}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
	});
	
	//  HOME CAROUSEL
	$('.home-inner').owlCarousel({
		loop: true,
		margin: -1,
		autoplay: true,
		dots: true,
		nav:true,
		navText: ["<i class='fal fa-angle-left'></i>","<i class='fal fa-angle-right'></i>"],
		autoplayTimeout: 7000,
		smartSpeed: 1200,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});


	// INIT WOW
	new WOW().init();

		
})(jQuery);
jQuery(function($) {'use strict',
	
	//Countdown js
	 $("#countdown").countdown({
			date: "24 March 2017 00:00:00",
			format: "on"
		},
		
		function() {
			// callback function
		});
	

	
	//Scroll Menu

	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.main-nav').addClass('fixed-menu animated slideInDown');
					$('.event-nav').addClass('fixed-event-nav');
				} else {
					$('.main-nav').removeClass('fixed-menu animated slideInDown');
					$('.event-nav').removeClass('fixed-event-nav');
				}
			});
		}else{
			
			$('.main-nav').addClass('fixed-menu animated slideInDown');
				
		}
	}

	function arrowToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth < 500 ){
			$('p.right').addClass('hidden');
			$('p.left').addClass('hidden');	
		}
	}

	menuToggle();
	arrowToggle();
	
	
	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul, .arrow').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});

});




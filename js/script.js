var $window = $(window);
	
	$window.on('scroll', function(e) {
		var scrollTop = $window.scrollTop();
		$('.nav-wrapper').toggleClass('#14b2c6', scrollTop > 10);
		$('nav ul a').toggleClass('white-text', scrollTop > 10);
		$('nav .brand-logo').toggleClass('white-text', scrollTop > 10);
		$('.nav-wrapper').toggleClass('white', scrollTop < 10);


			});

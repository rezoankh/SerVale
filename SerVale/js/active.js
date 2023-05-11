(function($) {
	"use strict";

	if ($.fn.owlCarousel) {
		// Hero Slider Active Code
		$(".features-slides").owlCarousel({
			items: 5,
			loop: true,
			autoplay: false,
			smartSpeed: 2000,
			margin: 50,
			nav: false,
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2
				},
				992: {
					items: 3
				},
				1200: {
					items: 5
				}
			}
		});
	}

	// Search Active Code
	$("#search-btn, #closeBtn").on("click", function() {
		$("body").toggleClass("search-form-on");
	});

	// matchHeight Active Code
	if ($.fn.matchHeight) {
		$(".equal-height").matchHeight();
	}

	// ScrollUp Active Code
	if ($.fn.scrollUp) {
		$.scrollUp({
			scrollSpeed: 50,
			scrollText: '<i class="fas fa-chevron-up" aria-hidden="true"></i>'
		});
	}

	// onePageNav Active Code
	if ($.fn.onePageNav) {
		$("#listingNav").onePageNav({
			currentClass: "active",
			scrollSpeed: 2000,
			easing: "easeOutQuad"
		});
	}

	// PreventDefault a Click
	$("a[href='#']").on("click", function($) {
		$.preventDefault();
	});

	// // wow Active Code
	// if ($.fn.init) {
	// 	new WOW().init();
	// }

	var $window = $(window);

	// Sticky Active JS
	$window.on("scroll", function() {
		if ($window.scrollTop() > 0) {
			$("body").addClass("sticky");
		} else {
			$("body").removeClass("sticky");
		}
	});

	// input field empty check
	$(".input-field")
		.focusout(function() {
			if ($(this).val() != "") {
				$(this)
					.siblings("label")
					.addClass("label-transform");
			} else {
				// If it is blank.
				$(this)
					.siblings("label")
					.removeClass("label-transform");
			}
		})
		.trigger("focusout");
})(jQuery);

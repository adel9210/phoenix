/*global $, window, document*/

$(document).ready(function () {
	"use strict";
	
	$('html').niceScroll();
	
	$('#license-year').html(new Date().getFullYear());
	
	
	$('.sidebar-icon').on('click', function (e) {
		e.preventDefault();
		$('.sidebar').addClass('open');
		if ($('.sidebar').hasClass('open')) {
			$('.navbar-close-icon, .sidebar-menu-items>ul>li').on('click', function (e) {
				e.preventDefault();
				$('.sidebar').removeClass('open');
			});
		}
	});
	
	$('.sidebar-icon').on('click', function(){
		$('.sidebar').slideDown();
		$(this).css('display', 'none');
	});

	$('#closeBtn').on('click', function(){
		$('.sidebar').slideUp(function(){
			$('.sidebar-icon').css('display', 'block')
		});
	})
	
	$(window).scroll(function () {
		
        if ($(this).scrollTop() < 20) {
            
			$(".navbar-default").css("background-color", "transparent");
			$(".navbar-default").css("padding", '8px 0');
			$(".navbar-default").css("transition", 'all 0.5s ease-in-out');
									
        } else {
					
            $(".navbar-default").css("background-color", "rgba(19,16,16,0.7)");
			$(".navbar-default").css("padding", '0 0');
		}
	});
	
	
	$(window).scroll(function () {
		
        if ($(this).scrollTop() < 20) {
            
			$(".navbar-default-p").css("background-color", "#000");
			$(".navbar-default-p").css("padding", '8px 0');
			$(".navbar-default-p").css("transition", 'all 0.5s ease-in-out');
									
        } else {
					
            $(".navbar-default-p").css("background-color", "rgba(19,16,16,0.7)");
			$(".navbar-default-p").css("padding", '0 0');
		}
	});
	
	




	
});




    // When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {
	"use strict";
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

window.onscroll = function () {
	"use strict";
	scrollFunction();
};


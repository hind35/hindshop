$(document).ready(function() {
	// Change mMode Color
	var colorMode=$('.opction .myMode div');
	colorMode.click(function () {
		$("link[href*='mode']").attr("href",$(this).attr("data-value"));
	});
 //Fade Opciton
  	$('.mode').click(function(){
  		$('.opction2').fadeToggle();
  		// this.css('right':'0px');
  	});

// navbar
$('ul li a').click(function() {
			$('html , body').animate({
			scrollTop:$('#'+ $(this).data('value')).offset().top - 10
		},1000);
		// $('nav ul').css('color: red');
	});

// smoth nuvber 
$(window).scroll(function () {
	 var sc=$(window).scrollTop();
	 if (sc > 100) {
	 	$('.colorNav.wight').addClass("sticky");
	 	console.log("top");
	 } else {
	 	$('.colorNav.wight').removeClass("sticky");
	 	console.log("remove");
	 }

});
	// scrollTop
	//ScrollUP
	  $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scroll-upp').fadeIn('slow');
        } else {
            $('.scroll-upp').fadeOut('slow');
        }
    });
    // video pup
	$('#videolink').magnificPopup({
		type:'inline',
		midClick:true
	});
		$('html').niceScroll({
		cursorcolor:'#036096',
		cursorborder:'1px solid #036096',
		cursorwidth:5,
		cursorborderriduos:2,
	});
function toggle() {
	var videos=document.querySelector('video');
	videos.classList.toggle("active");
	// videos.pause();
	// videos.currentTime=0;
}
	}); 

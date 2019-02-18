(function($) {

	'use strict';
// owl carousel
var majorCarousel = $('.js-carousel-1');
majorCarousel.owlCarousel({
loop:true,
autoplay: true,
stagePadding: 7,
margin: 20,
animateOut: 'fadeOut',
animateIn: 'fadeIn',
nav: true,
autoplayHoverPause: true,
items: 3,
navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
responsive:{
  0:{
    items:1,
    nav:false
  },
  600:{
    items:2,
    nav:false
  },
  1000:{
    items:3,
    nav:true,
    loop:false
  }
  }
});

// owl carousel
var major2Carousel = $('.js-carousel-2');
major2Carousel.owlCarousel({
loop:true,
autoplay: true,
stagePadding: 7,
margin: 20,
animateOut: 'fadeOut',
animateIn: 'fadeIn',
nav: true,
autoplayHoverPause: true,
items: 4,
navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
responsive:{
  0:{
    items:1,
    nav:false
  },
  600:{
    items:3,
    nav:false
  },
  1000:{
    items:4,
    nav:true,
    loop:false
  }
}
});


var contentWayPoint = function() {
    var i = 0;
    $('.element-animate').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
            
            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function(){

                $('body .element-animate.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        var effect = el.data('animate-effect');
                        if ( effect === 'fadeIn') {
                            el.addClass('fadeIn element-animated');
                        } else if ( effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft element-animated');
                        } else if ( effect === 'fadeInRight') {
                            el.addClass('fadeInRight element-animated');
                        } else {
                            el.addClass('fadeInUp element-animated');
                        }
                        el.removeClass('item-animate');
                    },  k * 100);
                });
                
            }, 100);
            
        }

    } , { offset: '95%' } );
};
contentWayPoint();



})(jQuery);
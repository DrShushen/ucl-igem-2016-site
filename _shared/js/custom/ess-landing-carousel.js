// Landing page carousel.

$(document).ready(function(){

    var essLandingCarousel = $('#ess-landing-carousel');

    essLandingCarousel.owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        //responsiveClass: true,
        dots: true,
        //smartSpeed: 500,
        nav: true,
        navText: [
            "<i class='icon-chevron-left icon-white'></i>",
            "<i class='icon-chevron-right icon-white'></i>"
        ],
        autoHeight: true
    });

    // Forced resize hacks - due to the fact that owl carousel's events aren't working properly.
    // Rely on certain image ratio.
    var ratio = 0.35166666;

    var essTarget = $('#ess-landing-carousel.owl-carousel .owl-stage-outer');
    // Initial height - pre-set.
    essTarget.css('height', (ratio * $(window).width()) + 'px');

    // Refresh height immediately on window resize.
    $(window).resize(function() {
        essTarget.css('height', (ratio * $(window).width()) + 'px');
    });

});
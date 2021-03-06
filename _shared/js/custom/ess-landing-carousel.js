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

    // Forced resize hacks - due to the fact that owl carousel's events aren't working properly. -----------------------

    // Set up variables:
    // Rely on certain image ratio.
    var essLandingCarouselRatio = 0.35166666;
    var essLandingCarouselCssTarget = $('#ess-landing-carousel.owl-carousel .owl-stage-outer');
    var essLandingCarouselData = $('.owl-carousel').data('owlCarousel');
    var essLandingCarouselFixDelay = 60;

    // Initial run.
    setTimeout(
        function() { essLandingCarouselSizingFix(); },
        essLandingCarouselFixDelay);

    // Window resize runs.
    $(window).resize(function() {
        essLandingCarouselSizingFix();
    });

    function essLandingCarouselSizingFix() {
        // Carousel data refresh.
        if (essLandingCarouselData !== undefined) {
            essLandingCarouselData.onThrottledResize();
        }
        // Physical size.
        if (essLandingCarouselCssTarget !== undefined) {
            essLandingCarouselCssTarget.css('height', (essLandingCarouselRatio * $(window).width()) + 'px');
        }
    }

    // -----------------------------------------------------------------------------------------------------------------

});
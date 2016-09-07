var navShrinkParams = {};

$(window).scroll(function() {

    if (!($('.cd-overlay').hasClass('is-visible'))) { // Only act if nav menu is not open.
        var header = $('header');
        if ($(document).scrollTop() > navShrinkParams.currentHeaderHeight) {
            if (!header.hasClass('shrink')) header.addClass('shrink');
        } else {
            if (header.hasClass('shrink')) header.removeClass('shrink');
        }
    }

});

$(window).load(function() {
    navShrinkSetVars();
});

$(window).resize(function() {
    navShrinkSetVars();
});

$('header').mouseenter(function() {
    headerUnShrink();
});

$('header').click(function() {
    headerUnShrink();
});

$('header').mouseleave(function() {
    if (!($('.cd-overlay').hasClass('is-visible'))) { // Nav menu not open
        headerShrink();
    }
});

$('.cd-overlay').click(function() {
    if ($('.cd-overlay').hasClass('is-visible')) { // Nav menu open
        headerShrink();
    }
});

// Define variables.
(function() {

    // Adaptation to varied logo sizes

    var $logo_height_int = 45; // change this to actual logo height
    var $original_height_int = 23;
    var $addition_factor = ( $logo_height_int -  $original_height_int)/2;
    var $subtraction_factor = -1* $addition_factor/2;

    navShrinkParams.header_height_S = 60 +  $addition_factor;
    navShrinkParams.header_height_L = 80 +  $addition_factor;

})();

// Helpers
function navShrinkSetVars() {
    // Case: big nav
    if ($("header").has(".cd-nav").length) {
        navShrinkParams.currentHeaderHeight = navShrinkParams.header_height_L;
    }
    // Case: small nav
    else {
        navShrinkParams.currentHeaderHeight = navShrinkParams.header_height_S;
    }
}

function headerShrink() {
    var header =$('header');
    if (!header.hasClass('shrink') && $(document).scrollTop() > navShrinkParams.currentHeaderHeight) {
        header.addClass('shrink');
    }
}

function headerUnShrink() {
    var header =$('header');
    if (header.hasClass('shrink')) {
        header.removeClass('shrink');
    }
}
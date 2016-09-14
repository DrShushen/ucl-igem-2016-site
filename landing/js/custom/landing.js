$(document).ready(function($) {
    var menuLandingHeaderHeight = 80; // HAS A COUNTERPART IN _menu-landing-variables.scss, MUST KEEP SYNCHRONISED!
    $('#fullpage').fullpage({
        css3: 'true',
        //anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        //fixedElements: '#landing-header',
        menu: '#cd-primary-nav',
        paddingTop: menuLandingHeaderHeight,
        continuousHorizontal: true,
        slidesNavigation: true,
        scrollOverflow: true,
        scrollOverflowOptions: {
            mouseWheelSpeed: 3.5,
            shrinkScrollbars: true
        }
    });
});
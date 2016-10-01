// Main content theme: Flew-based.
// Corresponding JS.

;(function () {

    'use strict';



    //<editor-fold desc="Original">

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var fullHeight = function() {

        if ( !isMobile.any() ) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
                $('.js-fullheight').css('height', $(window).height());
            });
        }

    };

    var sliderMain = function() {

        $('#ess-template-hero .flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            directionNav: true,
            start: function(){
                setTimeout(function(){
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            },
            before: function(){
                setTimeout(function(){
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }

        });

        $('#ess-template-hero .flexslider .slides > li').css('height', $(window).height());
        $(window).resize(function(){
            $('#ess-template-hero .flexslider .slides > li').css('height', $(window).height());
        });

    };

    var centerBlock = function() {
        $('.ess-template-section-with-image .ess-template-box').css('margin-top', -($('.ess-template-section-with-image .ess-template-box').outerHeight()/2));
        $(window).resize(function(){
            $('.ess-template-section-with-image .ess-template-box').css('margin-top', -($('.ess-template-section-with-image .ess-template-box').outerHeight()/2));
        });
    };

    var responseHeight = function() {
        setTimeout(function(){
            $('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
        }, 1);

        $(window).resize(function(){
            setTimeout(function(){
                $('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
            }, 1);
        })
    };


    var mobileMenuOutsideClick = function() {

        $(document).click(function (e) {
            var container = $("#ess-template-offcanvas, .js-ess-template-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ( $('body').hasClass('offcanvas-visible') ) {

                    $('body').removeClass('offcanvas-visible');
                    $('.js-ess-template-nav-toggle').removeClass('active');

                }


            }
        });

    };


    var offcanvasMenu = function() {
        $('body').prepend('<div id="ess-template-offcanvas" />');
        $('#ess-template-offcanvas').prepend('<ul id="ess-template-side-links">');
        $('body').prepend('<a href="#" class="js-ess-template-nav-toggle ess-template-nav-toggle"><i></i></a>');
        $('#ess-template-offcanvas').append($('#ess-template-header nav').clone());
    };


    var burgerMenu = function() {

        $('body').on('click', '.js-ess-template-nav-toggle', function(event){
            var $this = $(this);

            $('body').toggleClass('ess-template-overflow offcanvas-visible');
            $this.toggleClass('active');
            event.preventDefault();

        });

        $(window).resize(function() {
            if ( $('body').hasClass('offcanvas-visible') ) {
                $('body').removeClass('offcanvas-visible');
                $('.js-ess-template-nav-toggle').removeClass('active');
            }
        });

        $(window).scroll(function(){
            if ( $('body').hasClass('offcanvas-visible') ) {
                $('body').removeClass('offcanvas-visible');
                $('.js-ess-template-nav-toggle').removeClass('active');
            }
        });

    };


    var toggleBtnColor = function() {
        if ( $('#ess-template-hero').length > 0 ) {
            $('#ess-template-hero').waypoint( function( direction ) {
                if( direction === 'down' ) {
                    $('.ess-template-nav-toggle').addClass('dark');
                }
            } , { offset: - $('#ess-template-hero').height() } );

            $('#ess-template-hero').waypoint( function( direction ) {
                if( direction === 'up' ) {
                    $('.ess-template-nav-toggle').removeClass('dark');
                }
            } , {
                offset:  function() { return -$(this.element).height() + 0; }
            } );
        }
    };



    var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('animated') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            } else {
                                el.addClass('fadeInUp animated');
                            }

                            el.removeClass('item-animate');
                        },  k * 200, 'easeInOutExpo' );
                    });

                }, 100);

            }

        } , { offset: '85%' } );
    };

    var testimonialCarousel = function(){
        var owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            animateOut: 'fadeOut',
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoHeight: true
        });
    };


    $(function(){
        fullHeight();
        sliderMain();
        centerBlock();
        responseHeight()
        mobileMenuOutsideClick();
        offcanvasMenu();
        burgerMenu();
        toggleBtnColor();
        contentWayPoint();
        testimonialCarousel();
    });

    //</editor-fold>


}());
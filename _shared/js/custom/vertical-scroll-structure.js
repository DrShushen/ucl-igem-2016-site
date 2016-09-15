(function($){

    // Set up scroll structure.
    $(window).on("load",function(){

        var navItemsSelector = "#vertical-scroll-nav a";
        var navSectionOffsetAtLeast = 70; // HAS A COUNTERPART IN _vertical-scroll-structure-variables.scss !

        /* Page Scroll to id fn call */
        $(navItemsSelector).mPageScroll2id({
            highlightSelector: navItemsSelector,
            scrollSpeed: 500,
            scrollEasing: "easeInOutQuad",
            offset: navSectionOffsetAtLeast,
            forceSingleHighlight: true
        });

    });

})(jQuery);



jQuery(document).ready(function($) {

    // Fix some highlighting issues.
    $(window).on("scrollstop", function () {

        var navItemsSelector = "#vertical-scroll-nav a";
        $(navItemsSelector).each(function() {
            if ($(this).hasClass('mPS2id-clicked')) $(this).removeClass('mPS2id-clicked');
        });

    });

});
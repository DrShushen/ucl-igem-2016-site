// Explicitly sets "_top" attribute to all links without a target attribute, so that each linked page is reloaded properly.

$(document).ready(function($) {

    var timeOutForSafety = 1000;

    // Just to ensure this DOES run:
    setTimeout(function ($) {
        essLinkFixer();
    }, timeOutForSafety);
    $(window).load(function() {
        essLinkFixer();
    });

    // Function.
    function essLinkFixer() {
        var targetPropToSet = "_top";
        $('#globalWrapper a').each( function () {
            var targ = $(this).prop("target");
            if ((targ == null || targ == "") && targ !== targetPropToSet) {
                $(this).prop("target", targetPropToSet);
            }
        });
    }

});
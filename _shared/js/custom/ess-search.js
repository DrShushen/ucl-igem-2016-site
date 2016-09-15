jQuery(document).ready(function($) {

    var searchTemplate = 'https://www.google.co.uk/search?q=site:http://2016.igem.org/Team:UCL+';

    $('#cd-search-form').on('submit', function (event) {
        event.preventDefault();
        var searchVal = $(this).children('input').first().val();
        // Replace spaces with pluses (for Google).
        searchVal = searchVal.replace(/ /g,"_");
        var searchUrl = searchTemplate + searchVal;
        // Open link.
        window.open(searchUrl, '_blank');
    });

});
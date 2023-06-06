
$(document).ready(function() {
    // All images with the .lazy class
    $("img.lazy").each(function() {
        $(this).attr("src", "");
    });
    
    $(window).scroll(function() {
        $("img.lazy").each(function() {
            if(isScrolledIntoView($(this))) {
                $(this).attr("src", $(this).data("src")).on('load', function(){
                    $(this).css("filter", "blur(0)").css("opacity", "1");
                });
            }
        });
    });
    
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
});


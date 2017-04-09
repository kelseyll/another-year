$( document ).ready(function() {
    $("html").fadeIn(2000);
    $(window).scrollTop( 640 );
    function scrollToElement(scrollto) {
        $(window).scrollTop(scrollto.offset().top).scrollLeft(scrollto.offset().left);
    }
    $(document).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(document).scrollTop(0);
        }
        else if($(window).scrollTop() == 0) {
            $(document).scrollTop($(document).height());
        }
    });
});

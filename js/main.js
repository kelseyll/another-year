$( document ).ready(function() {
    $(".overlay span").hover(function() {
        $( this ).addClass("imbluedadadee");
    });
    $(document).scroll(function() {
        if(document.documentElement.clientHeight +
        $(document).scrollTop() >= document.body.offsetHeight )$(document).scrollTop(0);
    });
});

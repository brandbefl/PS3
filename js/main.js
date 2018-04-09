$(document).ready(function(){
    $("#slider-container").owlCarousel({
        items : 1,
        nav: false,
        dots: true
    });
    $(".menu-trigger").click(function(){
        $(".ul-menu").slideToggle(500);
    });
    $(window).resize(function() {
        if ($(window).width() > 500 ) {
            $(".ul-menu").removeAttr("style");
        }
    });
});
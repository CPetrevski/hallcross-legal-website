
$(document).ready(function(){
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100) {
            $('.navbar').addClass('cgn-navbar');
        } else {
            $('.navbar').removeClass('cgn-navbar')
        }
    });
});
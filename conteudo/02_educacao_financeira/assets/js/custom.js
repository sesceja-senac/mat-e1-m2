jQuery("document").ready(function($){
    
    var nav = $('.navbar');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 136) {
            nav.addClass("fixar");
        } else {
            nav.removeClass("fixar");
        }
    });

    var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
    console.log('pg_number:',pg_number)
    $('#navbarScroll a').eq(pg_number).addClass('ativo');
    $('#navbarScrollingDropdown span').html($('#navbarScroll a').eq(pg_number).text())
});
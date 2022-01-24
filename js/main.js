$(document).ready(function () {

    $('.humburger').click(function () {
        $(this).toggleClass('humburger_active');
    });

    $('.humburger').click(function () {
        $(".menu").toggleClass("menu_active");
        return false;
    });

    $('[data-modal=call_order]').on('click', function () {
        $('.overlay, #call_order').fadeIn('slow');
    });

    $('.popup__close').on('click', function () {
        $('.overlay, #call_order').fadeOut('slow');
    });

    $('.btn-more').click(function (e) {
        e.preventDefault();
        $('.descr-second').toggleClass('active');
        $('.btn-more').toggleClass('active');
    });

    $('#up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

    $('#down').click(function () {
        $('html, body').animate({
            scrollTop: $('#up').position().top - 60
        }, 2000);
    });
});
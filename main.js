$('.s-open').on('click', function() {
    $('body').css('overflow', 'hidden');
    $(this).next('.show').addClass('open');

})



$('.show .close').on('click', function() {
    $('body').removeAttr('style');
    $(this).parents().removeClass('open');
    $('.show-scroll,.img-scroll').scrollTop(0);

})

$(document).ready(function() {
    $(window).load(function() { //load函數
        $("#loading").fadeOut(500);
    });
});
$('.page.show').addClass('open');
AOS.init();
$(document).ready(function() {


    $('.nav-bar').on('click', function() {

        $(this).toggleClass('open');
        $('.menu-nav').fadeToggle();
        console.log(5455);
        // if ($(this).val() == 1) {
        //     $('body').removeAttr("style");
        //     // $('.mask-bg').fadeOut().removeAttr("style");
        //     $(this).val(0);
        // } else {
        //     $('body').css('overflow', 'hidden');
        //     // $('.mask-bg').fadeIn();


        //     $(this).val(1);
        // };
    })



    $('.privacy').on('click', function() {
        $('.privacy-page').fadeIn();
        $('.mask-bg').fadeIn();
    })
    $('.privacy-page').click(function() {
        event.stopPropagation(); //停止事件冒泡
    })

    $('.privacy-page .close').on('click', function() {
        $('.privacy-page').fadeOut();
        $('.mask-bg').fadeOut();
    })
    $('.mask-bg').on('click', function() {
        $('body').removeAttr("style");
        $(this).fadeOut();
        $('.privacy-page').fadeOut();
        $('.nav-bar').removeClass("open");
        $('.nav-bar').val(0);
    })

    // 首頁
    $('.index-banner').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        fade: true,
        speed: 2500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
    });


    $('.menu-nav a').click(function() {
        $('.menu-nav').fadeOut(200);
        $('.nav-bar').removeClass("open");
        var target = $(this.hash);

        $('html,body').animate({

            scrollTop: target.offset().top

        }, 800);

        return false;

    });

    $('.select-box').on('click', function() {
        $(this).children('.select-drop').fadeToggle(200);
        $(this).toggleClass('down');
    })

    $('.go-top').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 333);
        $('.tel-drop').fadeOut();
    });



    $('.tel img').on('click', function() {
        $(this).next('.tel-drop').fadeToggle();
    })
});
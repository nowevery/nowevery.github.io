$(document).ready(function() {
    $('.mobile-bar').on('click', function() {
        $('header').toggleClass('mobile-open');
        // $('.lang-title').removeClass("open");
        // $('header').removeClass('m-open');
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('body').addClass('is-sticky').fadeIn();
        } else {
            $('body').removeClass('is-sticky');
        }
    });
    // 首頁
    $('.index-banner').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        fade: true,
        speed: 2500,
        arrows: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                infinite: true,
                dots: true,
                arrows: false,
            }
        }, ]
    });
    $('.marquee-content').slick({
        autoplay: true,
        arrows: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        verticalSwiping: true,
        speed: 1000,
    });
    $('.photo-slick').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1100,
            settings: {

                slidesToShow: 3,
                slidesToScroll: 3,
            },
            breakpoint: 650,
            settings: {
        dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, 
        ]
    });
    $('.friendly-link').on('click', function() {
        $(this).toggleClass('open');
    })



 $('.left-menu-ul>li>.menu-arrow').click(function() {
        $(this).parents('.left-menu-ul').toggleClass('open');
        $(this).children('.fa-angle-down').toggleClass('fa-angle-up');
    })
    $('.two-tier>li>.menu-arrow').click(function() {
        $(this).parents('.two-tier').toggleClass('open');
        $(this).children('.fa-angle-down').toggleClass('fa-angle-up');
    })
    $('.active').parents('ul').addClass('open');
    $('.left-menu-ul .open').prev('.menu-arrow').children('.fa-angle-down').toggleClass('fa-angle-up');
});
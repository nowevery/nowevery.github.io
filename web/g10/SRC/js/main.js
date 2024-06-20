$(document).ready(function() {


    $('.nav-bar').on('click', function() {

        $(this).toggleClass('open');
        console.log(5455);
        if ($(this).val() == 1) {
            $('body').removeAttr("style");
            $('.mask-bg').fadeOut().removeAttr("style");
            $(this).val(0);
        } else {
            $('body').css('overflow', 'hidden');
            $('.mask-bg').fadeIn();
            $(this).val(1);
        };
    })

    $('.mask-bg').on('click', function() {
        $('body').removeAttr("style");
        $(this).fadeOut();
        $('.nav-bar').removeClass("open");
        $('.nav-bar').val(0);
    })
    $('.menu-drop a').parent('.menu-drop').prev('.show-1200').append('<i class="fas fa-angle-down"></i>');


    $('nav .menu-a').on('click', function() {

        $(this).children('.menu-drop').fadeToggle();
        if ($(this).val() == 1) {
            $(this).children('.show-1200').children('.fas').removeAttr("style");

            $(this).val(0);
        } else {
            $(this).children('.show-1200').children('.fas').css('transform', 'rotate(-180deg)');

            $(this).val(1);
        };

    });



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

    $('.news-wrap').owlCarousel({
        loop: false,
        margin: 17,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })


    if (jQuery(window).width() < 680) {
        $('.index-news-wrap').owlCarousel({
            loop: false,
            margin: 17,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
    } 

    $(window).resize(function() {
        if (jQuery(window).width() < 680) {
            $('.index-news-wrap').owlCarousel({
                loop: false,
                margin: 17,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            })
        } 
    })

    $('.list-link').click(function() {

        var target = $(this.hash);

        $('html,body').animate({

            scrollTop: target.offset().top

        }, 1000);

        // console.log($(this.hash));
        return false;

    });

    $('.select-box').on('click', function() {
        $(this).children('.select-drop').fadeToggle(200);
        $(this).toggleClass('down');
    })


});



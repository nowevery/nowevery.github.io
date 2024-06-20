$(document).ready(function() {


    $('.nav-bar').on('click', function() {

        $(this).toggleClass('open');
        if ($(this).val() == 1) {
            $('body').removeAttr("style");
            $('.mask-bg').fadeOut().removeAttr("style");
            $('.menu-nav .menu-drop').fadeOut();
            $(this).val(0);
            $('.search').children('.close').hide();
            $('.search').children('img').show();
        } else {
            $('body').css('overflow', 'hidden');
            $('.mask-bg').fadeIn();
            $(this).val(1);
            $('.search-bar').removeClass('open');
            $('.search-bar').val(0);
        };
    })

    $('.mask-bg').on('click', function() {
        $('body').removeAttr("style");
        $(this).fadeOut();
        $('.nav-bar').removeClass("open");
        $('.nav-bar').val(0);
    })
    $('.menu-a').children('a').append('<i class="fas fa-angle-down"></i>');
    $('.index-banner-box').siblings('header').addClass('i-menu-line')

    $('nav .menu-a').on('click', function() {

        $(this).children('.menu-drop').fadeToggle();
        if ($(this).val() == 1) {
            $(this).find('.fas').removeAttr("style");

            $(this).val(0);
        } else {
            $(this).find('.fas').css('transform', 'rotate(-180deg)');

            $(this).val(1);
        };

    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > 0) {
            $('header').addClass('h-w');
        } else {
            $('header').removeClass('h-w');
        }
    });
    $('.search').on('click', function() {
        if ($('.search-bar').val() == 1) {
            $('.search-bar').removeClass('open');
            $('.search-bar').val(0);
            $(this).children('.close').hide();
            $(this).children('img').show();
        } else {
            $('.search-bar').addClass('open');
            $('.nav-bar').removeClass('open');
            $('.mask-bg').removeAttr("style");
            $('.search-bar').val(1);
            $(this).children('.close').show();
            $(this).children('img').hide();
        };
    })
    // 首頁
    $('.index-banner').slick({
        // autoplay: true,
        dots: true,
        infinite: true,
        fade: true,
        speed: 2500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
    });

    if ($(window).width() > 1600) {
        var s = $('.content-wrap');
        var nav = $('.index-tabs-item a');
        s.waypoint({
            handler: function(direction) {
                var active = $(this);
                if (direction == 'up')
                    active = active.prev();
                var active_link = $('.index-tabs-item a[href="#' + active.attr('id') + '"]');

                nav.removeClass('active');
                active_link.addClass('active');
            },
            offset: '35%'
        });

        $('.index-tabs-item li a').click(function() {

            var target = $(this.hash);

            $('html,body').animate({

                scrollTop: target.offset().top

            }, 1000);

            // console.log($(this.hash));
            return false;

        });
        $(window).scroll(function() {
            let b_h = $('.index-banner-box').height() - 200;
            if ($(this).scrollTop() > b_h) {
                $('.index-tabs').fadeIn();
                console.log(b_h);
            } else {
                $('.index-tabs').fadeOut(100);
            }
        }).scroll();
    }





    $('.in').each(function() {
        var $this = $(this);
        $this.waypoint(function() {
            $this.addClass('fade-in');
        }, { offset: '100%' });
    });


    if ($(window).width() > 1025) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 180) {
                $('.go-top').fadeIn(222);
            } else {
                $('.go-top').stop().fadeOut(222);
            }
        }).scroll();
    }


    $('.go-top').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 333);
        console.log(1235);
    });

    $('.m-page-menu').on('click', function() {

        if ($(this).val() == 1) {
            $(this).next('.nav-class,.service-menu').fadeOut(100);
            $(this).val(0);
            $(this).children('.fas').removeAttr("style");
            console.log(1);
        } else {
            $(this).children('.fas').css('transform', 'scaleY(-1)');
            $(this).val(1);
            $(this).next('.nav-class,.service-menu').fadeIn();
            console.log(0);
        };
    });
    if ($(window).width() < 1024) {
        var scrolltop = new Array();
        var index = 0;
        scrolltop[0] = 0;
        $(document).scroll(function() {
            index++;
            scrolltop[index] = $(document).scrollTop();
            if (scrolltop[index] > scrolltop[index - 1]) {
                console.log("scroll down");
                $('.go-top').stop().fadeOut(100);
            } else {
                console.log("scroll up");
                $('.go-top').fadeIn(100);
            };
        })
    }

});

//placard
setTimeout(function() {
    $('.placard').fadeIn().css('display', 'flex');
}, 300);
$('.placard,.placard-close').click(function() {


    $('.placard').fadeOut();
})
$('.placard-content').click(function() {
    event.stopPropagation();
})
$(document).ready(function() {


    $('.nav-bar').on('click', function() {
        if ($(this).val() == 0) {
            $(this).addClass('open');
            $('.menu-nav').css('z-index','999');
            $('body').css('overflow','hidden')
            $(this).val(1);
            $('.menu-nav,.mask-bg').fadeIn();
        } else {
            $(this).removeClass('open');
            $('.menu-nav,body').removeAttr("style")
            $(this).val(0);
            $('.menu-nav,.mask-bg').fadeOut();
        };
    })



    $('#popup').on('click', function() {
        $('.popup').fadeIn(0);
        $('.mask-bg').fadeIn(0);
    })
    $('.popup').click(function() {
        event.stopPropagation(); //停止事件冒泡
    })

    $('.popup .close').on('click', function() {
        $('.popup').fadeOut();
        $('.mask-bg').fadeOut();
        $('html,body').scrollTop(0);
        
    })
    $('.mask-bg').on('click', function() {
        $('body,header').removeAttr("style");
        $(this).fadeOut();
        $('.popup').fadeOut();
        $('.nav-bar').removeClass("open");
        $('.nav-bar').val(0);
        $('.menu-nav').fadeOut();
        $('html,body').scrollTop(0);
    })

    // 首頁
    $('.index-banner').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        fade: true,
        speed: 5000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        pauseOnHover:false
    });

    $('.menu-nav a').click(function() {
        $('.menu-nav,.mask-bg').fadeOut(200);
        $('.nav-bar').val(0).removeClass("open");
        $('body').removeAttr("style");
        var target = $(this.hash);

        $('html,body').animate({

            scrollTop: target.offset().top

        }, 800);

        return false;

    });
    $('.section4 label a').click(function() {
        var target = $(this.hash);

        $('html,body').animate({

            scrollTop: target.offset().top

        }, 800);

        return false;

    });

    $('.in').each(function() {
        var $this = $(this);
        $this.waypoint(function() {
            $this.addClass('fade-in');
        }, { offset: '100%' });
    });
});

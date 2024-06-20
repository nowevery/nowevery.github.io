;
(function($) {
    function click_e() {
        $('.nav-bar').removeClass('open');
        $('.menu-nav,body').removeAttr("style");
        $('.nav-bar').val(0);
        $('.mask-bg').fadeOut();
        $('.menu-nav').animate({ right: "-320px" }, 0);

    }
    $('.nav-bar').on('click', function() {
        if ($(this).val() == 0) {
            $(this).addClass('open');
            $('.menu-nav').css('z-index', '999');
            $('body').css('overflow', 'hidden')
            $(this).val(1);
            $('.menu-nav').animate({ right: "0px" }, 0);
            $('.mask-bg').fadeIn();
            $('.pro-search,.m-menu-list,.search-drop,.lang-drop').fadeOut();
            $('.header-search,.header-lang').val(0);
        } else {
            click_e();

        };
    })


    if ($(window).width() <= 1300) {

        $('.lang').on('click', function() {
            $(this).children('.lang-drop').slideToggle();
            $(this).toggleClass('open');
        });
        $('.nav-a').on('click', function() {
            $(this).siblings('.nav-a').removeClass('open');
            $(this).siblings('.nav-a').children('.nav-drop').slideUp();
            $(this).children('.nav-drop').slideToggle();
            // $('.nav-a').find('.nav-sub-drop').slideUp();
            // $('.sub-open').removeClass('open');
            // $(this).toggleClass('open');
        });
        $('.nav-a').on('click', '.nav-drop', function(e) {
            e.stopPropagation();
        })
        $('.nav-drop').on('click','.sub-drop', function() {
            $(this).siblings('.sub-drop').children('.drop-class').slideUp();
            $(this).children('.drop-class').slideToggle();
            const oH2 = $('.sub-drop > a').outerHeight();
            const menuOffset2 = $(this).index() * oH2 + oH2;
            $('.menu-nav').animate({
                scrollTop: menuOffset2
            }, 750)
        });
        // $('.sub-open').on('click', function() {
        //     $(this).siblings('.sub-open').removeClass('open');
        //     $(this).siblings('.sub-open').children('.nav-sub-drop').slideUp();
        //     $(this).children('.nav-sub-drop').slideToggle();
        //     $(this).toggleClass('open');
        // });
        // $('.nav-sub-drop a.active').parent('.nav-sub-drop').show().parents('.nav-drop').show();
        // $('.nav-drop a.active').parent('.nav-drop').show();

        $('.menu-nav').on('click', '.nav-a', function(e) {
            const oH = $('.nav-a > a').outerHeight();
            const menuOffset = $(this).index() * oH;
            $('.menu-nav').animate({
                scrollTop: menuOffset
            }, 750)
        });

    }

    $('.header-search').on('click', function() {

        if ($(this).val() == 0) {
            $(this).val(1);

            $('.lang-drop,.pro-search,.m-menu-list').fadeOut();

            $('.header-lang').val(0);
            $('.search-drop').slideDown();
            click_e();
        } else {
            $(this).val(0);
            $('.search-drop').slideUp();
        };

        click_e();
    })
    $('.header-search').on('click', '.search-drop', function(e) {
        e.stopPropagation();
    })

    $('.header-lang').on('click', function() {

        if ($(this).val() == 0) {
            $(this).val(1);

            $('.search-drop,.pro-search,.m-menu-list').fadeOut();
            $('.header-search').val(0);
            $('.lang-drop').slideDown();
        } else {
            $(this).val(0);
            $('.lang-drop').slideUp();
        };

        click_e();
    })
    $('.header-lang').on('click', '.lang-drop', function(e) {
        e.stopPropagation();
    })

    $('.index-video').on('click', function() {
        $(".video-view").css('display', 'flex');
        $(".video-view iframe").show();

        let thisYoutubeId = $(this).find('.yt-video').attr('data-youtube-id');
        let video = '<iframe id="video' + thisYoutubeId + '" src="' + $(this).find('.yt-video').attr('data-video') + '" webkitAllowFullScreen mozallowfullscreen allowFullScreen frameBorder="0" data-ytid="' + thisYoutubeId + '"></iframe>';
        $(this).find('.yt-video').replaceWith(video);
    })
    $('.video-close').on('click', function() {
        $(".video-view,.search-top,.mask-bg").fadeOut();
        $('.video-view iframe').each(function() {
            this.contentWindow.postMessage('{"event": "command", "func": "stopVideo", "args": ""}', '*');
        });
    })


    $(document).on('blur', '.input-row input', function(e) {
        if ($(this).val()) {
            $(this).parent('.input-row').addClass('has-value')
        } else {
            $(this).parent('.input-row').removeClass('has-value')
        }
    })


    $('.in').each(function() {
        $(this).addClass('fade-in');
    });

    $('.cookie-btn').on('click', function() {
        $(this).parents('.cookie').fadeOut();
    })

    //venobox
    if ($(window).width() > 768) {

        $('.venobox').venobox({
            framewidth: '', // default: ''
            frameheight: '', // default: ''
            titleattr: 'data-title', // default: 'title'
            numeratio: true, // default: false
            infinigall: true, // default: false
        });

    } else {
        $('.venobox').removeAttr('href');
    }
    $('.active').parents('.sub-title-drop').prev('.sub-title').addClass('active')

    $(".row-menu .sub-title").on('click', function(e) {
        $(this).toggleClass('active');
    })

    $('.pro-search').parents('.content').addClass('f-h');
    $('.m-advanced').on('click', function() {
        $('.search-drop,.lang-drop').fadeOut();
        $('.pro-search').fadeIn(200);
        $('.mask-bg').fadeIn(200);
        $('body').css('overflow', 'hidden');
    })
    $('.m-menu').on('click', function() {
        $('.search-drop,.lang-drop').fadeOut();
        $('.m-menu-list').fadeIn(200);
        $('.mask-bg').fadeIn(200);
        $('body').css('overflow', 'hidden');
    })
    $('.mask-bg').on('click', function() {
        $(this).fadeOut();
        $('.nav-bar').removeClass('open');
        $('.menu-nav,body').removeAttr("style");
        $('.menu-nav').animate({ right: "-320px" }, 0);
        $('.nav-bar').val(0);
        $('.row-menu .pro-search,.m-menu-list').fadeOut();
    })

    $('.m-close').on('click', function() {
        $('.row-menu .pro-search,.m-menu-list').fadeOut();
        click_e();
    })

    $('.goTop-box').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 222);
    });


})($)
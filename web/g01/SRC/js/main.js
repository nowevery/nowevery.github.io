


    $('.nav-bar').on('click', function() {
        if ($(this).val() == 0) {
            $(this).addClass('open');
            $('.menu-nav').css('z-index', '999');
            $('body').css('overflow', 'hidden')
            $(this).val(1);
            $('.menu-nav').animate({ right: "0px" }, 0);
            $('.search-top').removeAttr("style");
            $('.mask-bg').fadeIn();
        } else {
            $(this).removeClass('open');
            $('.menu-nav,body').removeAttr("style");
            $(this).val(0);
            $('.menu-nav').animate({ right: "-320px" }, 0);
            $('.mask-bg').fadeOut();
        };
    })

    $('.mask-bg').on('click', function() {
        $(this).fadeOut();
        $('.nav-bar').removeClass('open');
        $('.menu-nav,body').removeAttr("style");
        $('.menu-nav').animate({ right: "-320px" }, 0);
        $('.nav-bar').val(0);
    })





    $('.nav-sub-drop').parent('.menu-item,.three-m').addClass('sub-open');

    $(".nav-a").on("click", ".nav-drop", function(e) {
        e.stopPropagation()
    })


    if ($(window).width() <= 1300) {
        $('.nav-a>a,.sub-open>a').click(function(e) {
            e.preventDefault();
        });
        $('.lang').on('click', function() {
            $(this).children('.lang-drop').slideToggle();
            $(this).toggleClass('open');
        });
        $('.nav-a').on('click', function() {
            $(this).siblings('.nav-a').removeClass('open');
            $(this).siblings('.nav-a').children('.nav-drop').slideUp();
            $(this).children('.nav-drop').slideToggle();
            $('.nav-a').find('.nav-sub-drop').slideUp();
            $('.sub-open').removeClass('open');
            $(this).toggleClass('open');
        });
        $('.sub-open').on('click', function() {
            $(this).siblings('.sub-open').removeClass('open');
            $(this).siblings('.sub-open').children('.nav-sub-drop').slideUp();
            $(this).children('.nav-sub-drop').slideToggle();
            $(this).toggleClass('open');
        });
         $('.nav-sub-drop a.active').parent('.nav-sub-drop').show().parents('.nav-drop').show();
       $('.nav-drop a.active').parent('.nav-drop').show();
    }
    $('.m-search').on('click', function() {
        $('.search-top').slideToggle();
        if ($(this).val() == 0) {
            $(this).children('.fas').css('color', '#2150a2')
            $(this).val(1);
        } else {
            $(this).children('.fas').removeAttr("style");
            $(this).val(0);
        };

        $('.nav-bar').removeClass('open');
        $('.menu-nav,body').removeAttr("style");
        $('.nav-bar').val(0);
        $('.menu-nav').animate({ right: "-320px" }, 0);
        $('.mask-bg').fadeOut();
    })



    $(document).on('blur', '.input-row input', function(e) {
        if ($(this).val()) {
            $(this).parent('.input-row').addClass('has-value')
        } else {
            $(this).parent('.input-row').removeClass('has-value')
        }
    })


    $('.in').each(function() {
        var $this = $(this);
        $this.waypoint(function() {
            $this.addClass('fade-in');
        }, { offset: '100%' });
    });



    $('.cookie-btn').on('click', function() {
        $(this).parents('.cookie').fadeOut();
    })


    $(window).scroll(function() {
        if ($(this).scrollTop() > 180) {
            $('.goTop-box').fadeIn(222);
        } else {
            $('.goTop-box').stop().fadeOut(222);
        }
    }).scroll();

    $('.goTop-box').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });

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

    $(".left-menu .sub-title").on('click', function(e) {
        $(this).toggleClass('active');
    })

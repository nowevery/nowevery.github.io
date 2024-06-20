;
(function($) {
    $('body').each(function() {
        $(this).has('.index-bg').css('background', '#fff');
    });


    $('.nav-sub-drop').parent('.menu-item,.three-m').addClass('sub-open');

    $(".nav-a").on("click", ".nav-drop", function(e) {
        e.stopPropagation()
    })
    $('.nav-bar').on('click', function() {
        if ($(this).val() == 0) {
            $(this).addClass('open');
            $('body').css('overflow', 'hidden')
            $(this).val(1);
            $('.menu-nav').slideDown();;
            $('.search-top').removeAttr("style");
            $('.mask-bg').fadeIn();
        } else {
            $(this).removeClass('open');
            $('body').removeAttr("style");
            $(this).val(0);
            $('.menu-nav').slideUp();
            $('.mask-bg').fadeOut();
        };
        $('.share-drop,.search-top').hide();
    })
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

    if ($(window).width() <= 1300) {
        $('.nav-drop a.active').parent('.nav-drop').show().parent('.nav-a').addClass('open');
    }

    function click_e() {
        $('.nav-bar').removeClass('open');
        $('.menu-nav,body').removeAttr("style");
        $('.nav-bar').val(0);
        $('.mask-bg').fadeOut();
    }

    $('.m-search').on('click', function() {
        $('.search-top').slideToggle();
        // if ($(this).val() == 0) {
        //     $(this).children('.fas').css('color', '#2150a2')
        //     $(this).val(1);
        // } else {
        //     $(this).children('.fas').removeAttr("style");
        //     $(this).val(0);
        // };

        $('.menu-nav,.share-drop').hide();
        click_e();

    })

    $('.header-share').on('click', function() {
        $('.share-drop').slideToggle();
        // if ($(this).val() == 0) {
        //     $(this).val(1);
        // } else {
        //     $(this).val(0);
        // };

        $('.menu-nav,.search-top').hide();
        click_e();
    })

  
    $(document).on('blur', '.input-row input', function(e) {
        if ($(this).val()) {
            $(this).parent('.input-row').addClass('has-value')
        } else {
            $(this).parent('.input-row').removeClass('has-value')
        }
    })
 

    $('.in').each(function() {
        let $this = $(this);
        $this.waypoint(function() {
            $this.addClass('fade-in');
        }, { offset: '100%' });
    });


    $(window).scroll(function() {
        let b_h = ($('body').height() / 3);
        if ($(this).scrollTop() > b_h) {
            $('.goTop-box').fadeIn(222);
        } else {
            $('.goTop-box').stop().fadeOut(222);
        }

        // let f_h = $('footer').height();
        // let w_h = ($('.inquiry-box').height() - f_h);
        // if ($(window).width() > 760) {
        
        //     if ($(this).scrollTop() > w_h) {
        //         $('.inquiry-btn').fadeOut(222);
        //     } else {
        //         $('.inquiry-btn').fadeIn(222);
        //     }
        // } else {

        //     if ($(this).scrollTop() > w_h) {
        //         $('.inquiry-btn').fadeOut(222);
        //     } else {
        //         $('.inquiry-btn').fadeIn(222);
        //     }
        // }

    }).scroll();

    $('.goTop-box').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 222);
    });

    $('.row-menu a').hover(function() {
        $(this).prev().addClass('a-hover');
    }, function() {
        $(this).prev().removeClass('a-hover');
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

    $("row-menu .sub-title").on('click', function(e) {
        $(this).toggleClass('active');
    })


    $('.list-link').click(function() {

        let target = $(this.hash);

        $('html,body').animate({

            scrollTop: target.offset().top

        }, 1000);

        // console.log($(this.hash));
        return false;

    });

    // $('.inquiry-box .add_btn').on('click', function() {

    //     if ($(this).val() == 0) {
    //         $(this).parents('ul').addClass('add');
    //         $(this).val(1);
    //         $(this).text('已加入詢價');
    //         $('#add_item').fadeIn().delay(1000).fadeOut(1000);
    //     } else {
    //         $(this).parents('ul').removeClass('add');
    //         $(this).val(0);
    //         $(this).html('<i class="fas fa-plus-circle"></i>加入詢價');
    //         $('#remove_item').fadeIn().delay(1000).fadeOut(1000);
    //     };
    // });

    
    //產品觀看細項
    $('.ul-table-close').on('click', function() {
        $('.ul-table-box').hide();
        console.log(121154);
    });
    $('.view').on('click', function() {
        $('.ul-table-box').show();
        console.log(121154);
    });
    console.log(121154);
})($)
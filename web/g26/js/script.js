$(function () {
    function checkScrollPosition() {
        const scrollPosition = $(window).scrollTop();
        if (scrollPosition > 0) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
        if (scrollPosition > 80) {
            $(".page-nav").addClass("scrolled");
        } else {
            $(".page-nav").removeClass("scrolled");
        }
    }

    $(document).ready(function () {
        checkScrollPosition();
    });

    $(window).scroll(function () {
        checkScrollPosition();
    });




    $(document).on('click', '.m-bar', function () {
        $("header").addClass('scrolled');
        $("body").toggleClass('openMenu');
        $(".lang").removeClass('open');
        $("#mask").removeClass('openLang');
    });

    $(document).on('click', '#mask', function () {
        $("body").removeClass('openMenu');
        $(".lang").removeClass('open');
        $("#mask").removeClass('openLang');
    });
    $(document).on('click', '.nav-item.arrow', function () {
        $(".nav-item.arrow").not(this).removeClass("open");
        $(this).toggleClass('open');
    });

    $(document).on('click', '.lang', function () {
        $("body").removeClass('openMenu');
        $(this).toggleClass('open');
        $("header").addClass('scrolled');
        $("#mask").toggleClass('openLang');
    });

    $('.index-banner').slick(
        {
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
            cssEase: 'linear'
        }
    );
    $('.index-case-slick').slick(
        {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000, variableWidth: true,
            prevArrow: '<div class="case-arrow-left"></div> ',
            nextArrow: '<div class="case-arrow case-arrow-right"></div> ',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false
                    }
                }
            ]
        }
    );





    $('.photo-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.photo-slick-nav'
    });
    $('.photo-slick-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.photo-slick',
        dots: false,
        focusOnSelect: true,
        prevArrow: '<div class="case-arrow-left"></div> ',
        nextArrow: '<div class="case-arrow case-arrow-right"></div> ',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });




    // anchor

    $(".anchor-item").click(function () {
        $(".anchor-item").removeClass("active");
        $(this).addClass("active");
        updateActiveText();

        var targetIndex = $(this).index();
        var targetOffset = $(".anchor").eq(targetIndex).offset().top;
        $("html, body").animate({ scrollTop: targetOffset }, 800);
    });

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var activeIndex = -1;

        $(".anchor").each(function (index) {
            var targetOffset = $(this).offset().top;

            if (scrollPosition >= targetOffset - 0 && scrollPosition < targetOffset + $(this).height() - 0) {
                activeIndex = index;
            }
        });

        if (activeIndex !== -1) {
            updateActiveMenuItem(activeIndex);
            updateActiveText(activeIndex);
        }
    });

    function updateActiveText(activeIndex) {
        var activeText = $(".anchor-item").eq(activeIndex).text();
        $(".page-nav-m").text(activeText);
    }

    function updateActiveMenuItem(activeIndex) {
        $(".anchor-item").removeClass("active");
        $(".anchor-item").eq(activeIndex).addClass("active");
    }

    // $(document).on('click', '.page-nav-m', function (e) {
    //     e.stopPropagation();
    //     $(".page-nav-m+ul").slideToggle();
    // });

    // $(document).on('click', function (e) {
    //     if (!$(e.target).closest('.page-nav-m').length && !$(e.target).closest('.page-nav-m+ul').length) {
    //         $(".page-nav-m+ul").slideUp();
    //     }
    // });

    // $(document).on('click', '.anchor-item a', function () {
    //     $(".page-nav-m+ul").slideUp();
    // });

    // $(document).on('click', '.page-nav-m+ul, .page-nav-m+ul *', function (e) {
    //     e.stopPropagation();
    // });
    $(document).on('click', '.page-nav-m', function (e) {
        e.stopPropagation();
        $(".page-nav-m").toggleClass('opened');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.page-nav-m').length && !$(e.target).closest('.page-nav-m+ul').length) {
            $(".page-nav-m").removeClass('opened');
        }
    });

    $(document).on('click', '.anchor-item a', function () {
        $(".page-nav-m").removeClass('opened');
    });

    $(document).on('click', '.page-nav-m+ul, .page-nav-m+ul *', function (e) {
        e.stopPropagation();
    });


    function handleBr() {
        const windowWidth = $(window).width();
        const spanElement = $('.service-section-item li span');
    
        if (windowWidth < 1600) {
          spanElement.find('br').remove();  
        } 
      }
    
      handleBr();
    
      $(window).resize(handleBr);

      new WOW().init();
      


});



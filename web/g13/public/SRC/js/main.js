$(document).ready(function() {
    var local = window.location.href;
    var link = $('.shortcut a');
    for (i = 0; i < link.length; i++) {
        var cd = link.length
        if (local.toLowerCase() == link[i].href.toLowerCase()) {
            link[i].parentElement.className = "active";
        }
    }


    // form
    $().ready(function() {
        $("#commentForm").validate({
            rules: {
                know: {
                    required: true
                },
                project: {
                    required: true
                }
            },

            messages: {
                know: {
                    required: "This field is required."
                },
                project: {
                    required: "This field is required."
                }
            },
        });
    });



    //cm
    $('.cm-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,

        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
    });
    $('.license-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });


    // if($(window).width() < 1200) {
    $('.nav-bar,.m-bg').on('click', function() {
        $(this).toggleClass('close');
        $('.m-bg').fadeToggle();
        $('.top-menu').slideToggle();
        if ($(this).val() == 1) {
            $('body').removeAttr('style');
            $(this).val(0);
        } else {
            $('body').css('overflow', 'hidden');
            $(this).val(1);
        }
    });


    $('.drop').on('click', function() {
        $(this).children('.fa-chevron-down').toggleClass('fa-chevron-up');
        $(this).next('.menu-drop').slideToggle();
    });



    // };

    //index
    $('.quality-slick').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,

        responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }

            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $('.video_butt').click(function() {
        $('.video_all_bg').slideToggle();
        $('.video_show').show();
    });
    $('.olcat_video ').click(function() {
        $('.video_all_bg').slideToggle();
        $('.video_show').hide();
        $('.video iframe').each(function() {
            this.contentWindow.postMessage('{"event": "command", "func": "stopVideo", "args": ""}', '*');
        });
    });

    $('.venobox').venobox();
});
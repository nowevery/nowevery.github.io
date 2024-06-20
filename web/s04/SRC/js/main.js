$(document).ready(function() {
    // $('.nav-bar,.m-bg').on('click', function() {
    //     $(this).toggleClass('close');
    //     $('.m-bg').fadeToggle();
    //     $('.top-menu').slideToggle();
    //     if ($(this).val() == 1) {
    //         $('body').removeAttr('style');
    //         $(this).val(0);
    //     } else {
    //         $('body').css('overflow', 'hidden');
    //         $(this).val(1);
    //     }
    // });

    // $('.drop').on('click', function() {
    //     $(this).children('.fa-chevron-down').toggleClass('fa-chevron-up');
    //     $(this).next('.menu-drop').slideToggle();

    // });

    $('.nav-bar').on('click', function() {
        $(this).toggleClass('open');
        $('.top-menu').toggleClass('open');
        $('.mask-bg').toggleClass('open');
        if ($('.nav-bar').hasClass('open')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').removeAttr("style");
        }
    });

    $('.login-style .nav-bar').on('click', function() {
        $(this).toggleClass('b-w');
    });

    $('.mask-bg').on('click', function() {
        $(this).toggleClass('open');
        $('.top-menu').toggleClass('open');
        $('.nav-bar').toggleClass('open');
    });

    $('.m-top-lang').on('click', function() {
        $(this).toggleClass('arrow-up');
        $(this).find('.drop-down').fadeToggle();
    });

    $('.no-top').prev('header').addClass('border-no');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('header').addClass('bf');
        } else {
            $('header').removeClass('bf');
        }
    });
    $('.hit-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.prod-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    if ($('.charity-slide .charity-item').length > 3) {
        $('.charity-slide').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }


    $('.prod-gallery-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });


    $('.tab-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        // infinite: false,
        autoplay: true,
            autoplaySpeed: 3000
    });
$('#video_paly').css('opacity','0');
    $('.prod-video').on('click', function() {
        $('.prod-video>input,.prod-video>.video-pic').hide();
        $('#video_paly').css('opacity','1');
        document.getElementById("video_paly").play();
    });


    $('.gallery-item').on('click', function() {
        // $('.prod-video input').show();     
        document.getElementById("video_paly").pause();
    })


    $('.prod-gallery').find('.gallery-i').hide();
    $('.prod-gallery').find('.gallery-i').eq(0).show();
    var d = document.getElementsByClassName('gallery-item'); // 获取所有li元素
    for (var i = 0; i < d.length; i++) {
        d[i].index = i; // 为第i个li元素添加一个index属性，赋值为i
        d[i].addEventListener('click', function() {
            console.log(this.index);
            var qq = this.index;
            // console.log(qq);
            // 为第i个li元素添加一个click事件，当元素被点击时，则会在控制台输出索引
            $('.prod-gallery').find('.gallery-i').hide();;
            $('.prod-gallery').find('.gallery-i').eq(qq).show();
            $('.gallery-item').removeClass('active');
            $(this).addClass('active');
        })

    }
    $('.qa-title').on('click', function() {
        $(this).next('.qa-content').slideToggle();
        $(this).children('img').toggleClass('active');
    })
    $('.leave-comments .comments-btn').on('click', function() {
        $(this).parent('.leave-comments').next('.leave-comments-box').fadeIn(200);
        $(this).fadeOut(100);
    })
    $('.leave-comments-btn .comments-no').on('click', function() {
        $('.leave-comments .comments-btn').fadeIn(200);
        $('.leave-comments-box').fadeOut(100);
    })
    // $('.input-row input').each(function(i, ele) {
    //     if($(ele).val()) {
    //         $(ele).parent('.input-row').addClass('has-value')
    //     }
    // });
    $('#terms-open').on('click', function() {
        $('.terms-open').fadeIn(200).css('display', 'flex');
    })
    $('.order-ask').on('click', function() {
        $('.ask-open').fadeIn(200).css('display', 'flex');
    })
    $('.lightbox .lightbox-close').on('click', function() {
        $('.lightbox').fadeOut(200);
    })
    $('.lightbox').on('click', function() {
        $('.lightbox').fadeOut(200);
    })
    $('.lightbox').on('click', '.lightbox-content', function(e) {
        e.stopPropagation()
    })

    $(document).on('blur', '.input-row input', function(e) {
        if ($(this).val()) {
            $(this).parent('.input-row').addClass('has-value')
        } else {
            $(this).parent('.input-row').removeClass('has-value')
        }
    })

    // $('.show_pass').click(function () {
    //     let pass_type = $('input.password').attr('type');

    //     if (pass_type === 'password' ){
    //         $('input.password').attr('type', 'text');
    //         $('.show_pass').removeClass('fa-eye-slash').addClass('fa-eye');
    //     } else {
    //         $('input.password').attr('type', 'password');
    //         $('.show_pass').removeClass('fa-eye').addClass('fa-eye-slash');
    //     }
    // })

    $('.show_pass').click(function() {
        let pass_type = $(this).siblings('input.password').attr('type');

        if (pass_type === 'password') {
            $(this).siblings('input.password').attr('type', 'text');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            $(this).siblings('input.password').attr('type', 'password');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        }
    })
    $('.member-step-btn').on('click', function() {
        $(this).parents('.member-info-item').removeClass('active');
        $(this).parents('.member-info-item').next('.member-info-item').addClass('active');
    })

    // member
    var local = window.location.href;
    var link = $('.member .left-column-nav li a');
    for (i = 0; i < link.length; i++) {
        var cd = link.length
        if (local.toLowerCase() == link[i].href.toLowerCase()) {
            link[i].parentElement.className = "active";
        }

    }

    //qa
    $('.left-column-nav .title').on('click', function() {

        if ($(window).width() < 1025) {
            $(this).toggleClass('open');
            $(this).siblings('li').slideToggle(100);
        }
    });

    //blog
    $('.left-column .title').on('click', function() {

        if ($(window).width() < 1300) {
            $(this).toggleClass('open');
            $(this).siblings('li').slideToggle(100);
        }
    });
    //products_detail
    if ($('.content-height').height() >= 200) {
        $('.content-more').css('display', 'block');
    } else {
        $('.content-more').css('display', 'none');
        
    }

    $('.content-more').on('click', function() {
        $(this).prev('.content-height').removeClass('content-height');
        $(this).hide();
    });


    //index-logo
    // if ($('.logo-content').height() >= 150) {
    //     console.log($('.logo-content').height());
    //     $(this).addClass('logo-content-height');
    //     $(this).next('.logo-more').css('display', 'block');
    // } else {
    //     // $('.logo-more').css('display', 'none');        
    // }
    $('.logo-more').on('click', function() {
        $(this).prev('.logo-content').toggleClass('logo-content-height');
        $(this).show();
        if($(this).val()==1){
            $(this).html('展開全部').append('<i class="fas fa-chevron-down"></i>');
            $(this).val(0);
            } else {
            $(this).html('收合').append('<i class="fas fa-chevron-up"></i>');
            $(this).val(1);
        };
    });
    // $('.tab-section label').on('click', function() {
    //     $('.logo-more').show();
    //     $('.logo-content').addClass('logo-content-height');
    // });
    $('.tab-box').each(function() {
        if($(this).height() > 250) {
            $(this).children('.logo-content').addClass('logo-content-height');
            $(this).children('.logo-content').next('.logo-more').show();
            

        }
    });



    $('.m-fixed-cart').on('click', function() {
        $('.products_detail').addClass('m-open-cart');
        $(this).hide();
        $('.m-cart-mask').show();
    });
    $('.m-cart-mask,.donate-btn .btn').on('click', function() {
        $('.products_detail').removeClass('m-open-cart');
        $('.m-fixed-cart').show();
    });
    $('.m-cart-mask').on('click', function() {
        $('.products_detail').removeClass('m-open-cart');
        $('.m-fixed-cart').show();
    });

    $('.dream-drop').on('click', function() {
        $(this).prev('.shopcart-right-prod').slideToggle(100);
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
    });

});
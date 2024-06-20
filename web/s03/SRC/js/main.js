$(document).ready(function() {
    // 浮動header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('h-w').fadeIn();
        } else {
            $('header').removeClass('h-w');
        }
    });
    $('.search-icon').on('click', function() {
        $(this).toggleClass('open');
        // $('.lang-title').removeClass("open");
        // $('header').removeClass('m-open');
    })
    $('.search-close').on('click', function() {
        $('.search-icon').toggleClass('open');
        // $('.lang-title').removeClass("open");
        // $('header').removeClass('m-open');
    })
    $('.nav-bar,.mobile-close').on('click', function() {
        $('.mobile-menu').fadeToggle();
    })
    $('.nav-bar').on('click', function() {
        $('body').css('overflow', 'hidden');
        $('.search-icon').removeClass('open');
    })
    $('.mobile-close').on('click', function() {
        $('body').removeAttr("style");
    })
    $('.menu-hover').mouseenter(function() {
        $('.menu-hover>a').css({ "background": "#292929", "color": "#fff", "font-weight": "400" });
    })
    $('.menu-hover').mouseleave(function() {
        $('.menu-hover>a').removeAttr("style");
    })
    // 首頁
    $('.index-banner-box').prev('header').addClass('border-no');
    $('.index-banner').slick({
        autoplay: false,
        arrows: true,
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
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
    $('.index-carousel').slick({
        dots: true,
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.go-top').fadeIn(222);
        } else {
            $('.go-top').stop().fadeOut(222);
        }
    }).scroll();
    $('.go-top').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });

    //手機選單
    var $left = $('.m-menu-left-title');
    $($left.eq(0).addClass('active').find('a').attr('href')).siblings('.m-menu-box').hide();

    $left.click(function() {
        $($(this).find('a').attr('href')).show().siblings('.m-menu-box').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
    });

    var $top = $('.m-menu-top-a');
    $($top.eq(0).addClass('active').find('a').attr('href')).siblings('.tab-box').hide();


    $top.click(function() {
        $($(this).attr('href')).show().siblings('.tab-box').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
    });
    $('#box2 .m-menu-left-title').eq(0).addClass('active');
    //常見問題
    $('.qa-item').click((function() {
        $(this).toggleClass('q-open');
        if ($(this).find('.qa-icon').val() == 1) {
            $(this).find('.qa-icon').text("+");
            $(this).find('.qa-icon').val(0);
        } else {
            $(this).find('.qa-icon').text("-");
            $(this).find('.qa-icon').val(1);
        };
    }))

    // 產品選單
    $('.two-tier li').parent('.two-tier').prev('span').append('<i class="fas fa-angle-down"></i>');
    $('.three-tier li').parent('.three-tier').prev('span').append('<i class="fas fa-angle-down"></i>');
    $('.m-left-open').click(function() {
        $(this).toggleClass('open');
    })
    $('.left-menu-ul>li>.prod-arrow').click(function() {
        $(this).parents('.left-menu-ul').toggleClass('open');
        $(this).children('.fa-angle-down').toggleClass('fa-angle-up');
    })
    $('.two-tier>li>.prod-arrow').click(function() {
        $(this).parents('.two-tier').toggleClass('open');
        $(this).children('.fa-angle-down').toggleClass('fa-angle-up');
    })
    $('.active').parents('ul').addClass('open');
    $('.left-menu-ul .open').prev('.prod-arrow').children('.fa-angle-down').toggleClass('fa-angle-up');

    // 產品篩選排序
    $('.filter .sort').on('click', function() {
        $('.filter .sort').removeClass('active');
        // $(this).addClass('active');
        // $(this).children().toggleClass('fa-sort-down fa-sort-up');
        if ($(this).val() == 1) {
            $('.filter .sort').removeClass('active');
           $(this).addClass('active');
           $(this).children().toggleClass('fa-sort-up fa-sort-down');
            $(this).val(0);
        } else {
            $('.filter .sort').removeClass('active');
            $(this).val(1);
            $(this).addClass('active');
           $(this).children().toggleClass('fa-sort-down fa-sort-up');
        };
    });
    // 產品排列
    $('.filter .th').on('click', function() {
        if ($(this).children().has('fa-th-list')) {
            $(this).children().toggleClass('fa-th-list fa-border-all');
            $('.prod-right-content').toggleClass('two one');
        }
    });


    // video
    $('.v-pause').click(function() {
        $('.y-video').each(function() {
            this.contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', '*');
        });
    });
    // $(window).resize(function(){
    if ($(window).width() < 1024) {
        $('.prod-slick .video-box').remove();
        $('.venobox.yt-btn').removeAttr('data-gall');
    }
    // });

    $('.prod-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.prod-slick-nav',
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true
            }
        }, ]
    });
    $('.prod-slick-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.prod-slick',
        dots: false,
        focusOnSelect: true
    });

    //prod-tabs
    $('.tab1').addClass('active');
    $('#tab2,#tab3').hide();
    $('.tab1').click(function() {
        $('#tab1').show().siblings('.prod-tabs-box').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
    });
    $('.tab2').click(function() {
        $('#tab2').show().siblings('.prod-tabs-box').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
    });
    $('.tab3').click(function() {
        $('#tab3').show().siblings('.prod-tabs-box').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
    });
    // var $tabs = $('.prod-tabs-title');
    // $($tabs.eq(0).addClass('active').find('a').attr('href')).siblings('.prod-tabs-box').hide();

    // $tabs.click(function() {
    //     $($(this).find('a').attr('href')).show().siblings('.prod-tabs-box').hide();
    //     $(this).addClass('active').siblings('.active').removeClass('active');
    // });

    
    $('.slick-recommend').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    //venobox
    $('.venobox').venobox({
        framewidth: '', // default: ''
        frameheight: '', // default: ''
        titleattr: 'data-title', // default: 'title'
        numeratio: true, // default: false
        infinigall: true, // default: false
    });


    $('.m-m-cart').on('click', function() {
        $('.prod-info-right .m-fixed').addClass('open');
        $('body').css('overflow', 'hidden');
        $('.m-fixed-bg').addClass('open');
    });
    $('.m-fixed-bg,.m-fixed-x,.d-cart.s-n').on('click', function() {
        $('body').removeAttr('style');
        $('.prod-info-right .m-fixed ,.m-fixed-bg ').removeClass('open');
    });

    // add-cart
    $('.addCart').on('click', function() {
        $('.add-cart-info').fadeIn().delay(1000).fadeOut(1000);
    })

    // 加入最愛
    $('.price .fa-heart').on('click', function() {
        if ($(this).val() == 1) {
            $(this).addClass('far').removeClass('fas');
            $(this).val(0);
        } else {
            $(this).addClass('fas').removeClass('far');
            $(this).val(1);
            $('.add-love-info').fadeIn().delay(1000).fadeOut(1000);
        };
    });
    // $('.prod-love').on('click', function() {
    //     $('.add-love-info').fadeIn().delay(1000).fadeOut(1000);
    // })

    $('.price').has('.far.fa-heart', function() {
        console.log('000');
        $('.price .far.fa-heart').on('click', function() {
            $('.add-love-info').fadeIn().delay(1000).fadeOut(1000);
        })
    })
    $('.prod-love').on('click', function() {
        if ($(this).val() == 1) {
            $(this).html('<i class="far fa-heart"></i>加入喜愛清單');
            $(this).val(0);
        } else {
            $(this).html('<i class="fas fa-heart"></i>已加入喜愛清單');
            $(this).val(1);
            $('.add-love-info').fadeIn().delay(1000).fadeOut(1000);
        };
    });

    $('#agree2').click(function() {
        $('#agree').prop('checked', true);
    })

    // member
    var local = window.location.href;
    var link = $('.member-left a');
    for (i = 0; i < link.length; i++) {
        var cd = link.length
        if (local.toLowerCase() == link[i].href.toLowerCase()) {
            link[i].parentElement.className = "active";
        }
    }
    var link_o = $('.order-menu a');
    for (i = 0; i < link_o.length; i++) {
        if (local.toLowerCase() == link_o[i].href.toLowerCase()) {
            link_o[i].parentElement.className = "order-menu-a active";
            console.log('1');

        }
    }

    $('.m-member-menu').click(function() {
        $('.member-left').toggleClass('hide-1024');
    })
    $('.member-right').click(function() {
        $('.member-left').addClass('hide-1024');
    })
    // 訂單詢問
    $('.Order-ask').click(function() {
        $('.O-a-j').fadeIn().css("display", "flex");
    })
    $('.jump-x,.O-a-j').click(function() {
        $('.O-a-j').removeAttr('style');
    })
    // 匯款回復
    $('.Order-reply').click(function() {
        $('.O-r-j').fadeIn().css("display", "flex");
    })
    $('.jump-x,.O-r-j').click(function() {
        $('.O-r-j').removeAttr('style');
    })
    // 取消訂單
    $('.Order-cancel').click(function() {
        $('.O-c-j').fadeIn().css("display", "flex");
    })
    $('.jump-x,.O-c-j').click(function() {
        $('.O-c-j').removeAttr('style');
    })
    $(".order-jump").on("click", ".order-jump-inner", function(e) {
        e.stopPropagation()
    })

    // 購物車
    $('select#sp1').change(function() {
        if ($(this).val() == "0") {
            $(".sp1-a").fadeOut(100);
            $(".sp1-b").fadeOut(100);
        }

        if ($(this).val() == "1") {
            $(".sp1-a").fadeIn(300);
            $(".sp1-b").fadeOut(100);

            // $(".sp2 option[value='3-5']").attr("disabled","disabled");
            // $(".sp2 option[disabled='disabled']").css({"display":"none"});
        }

        if ($(this).val() == "2") {
            $(".sp1-b").fadeIn(300);
            $(".sp1-a").fadeOut(100);
        }
    });

    $('select#sp2').change(function() {
        if ($(this).val() == "2-0") {
            $(".sp2-a,.sp2-b,.sp2-c").fadeOut(100);
        }

        if ($(this).val() == "2-1") {
            $(".sp2-a").fadeIn(300);
            $(".sp2-b,.sp2-c").fadeOut(100);
        }

        if ($(this).val() == "2-2") {
            $(".sp2-b").fadeIn(300);
            $(".sp2-a,.sp2-c").fadeOut(100);
        }

        if ($(this).val() == "2-3") {
            $(".sp2-c").fadeIn(300);
            $(".sp2-a,.sp2-b").fadeOut(100);

        }

    });

    //placard
    setTimeout(function() {
        $('.placard').fadeIn().css('display', 'flex');
    }, 1000);
    $('.placard,.placard-close').click(function() {


        $('.placard').fadeOut();
    })
    $('.placard-content').click(function() {
        event.stopPropagation(); //停止事件冒泡
    })
});

// quantity
function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});


//cookie
$('.cookie-btn').on('click', function() {
    $(this).parents('.cookie').hide();
    console.log(111111);
})


// $('.user_editor iframe');

// $('.user_editor iframe').wrap("<p></p>").parent('p').addClass('embed-container');
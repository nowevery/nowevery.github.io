$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).width() > 1024) {
            var h1 = window.innerHeight;
            // var h2 = h1 / 10;
            var h3 = $('header').outerHeight(true);
            if ($(this).scrollTop() > 10) {
                $('header').addClass('top-fixed').fadeIn();
                $('body').css('padding-top', h3);
            } else {
                $('header').removeClass('top-fixed');
                $('body').removeAttr("style");
            }
        } else {
            $('header').removeClass('top-fixed');
            $('body').removeAttr("style");
        }

        if ($(window).width() < 1024) {
            var h1 = $('body').height();
            var h_f = $(window).height() + 50;
            var h2 = h1 - h_f - $('footer').height();
            if ($(this).scrollTop() > h2) {
                $('.shopcart.shopping-item .order-detail-box:last-of-type').fadeIn(100);
            } else {
                $('.shopcart.shopping-item .order-detail-box:last-of-type').fadeOut(100);
            }
        }
    });

    $('.filter .f-btn').on('click', function() {
        if ($(this).val() == 0) {
            $(this).siblings('.f-btn').removeClass('active');
            $(this).siblings('.f-btn').val(0);
            $(this).addClass('active');
            $(this).val(1);
        } else {
            $(this).removeClass('active');
            $(this).val(0);
        };
    })



    $('.nav-bar').on('click', function() {
        $('nav.nav').addClass('open');
        $('.mask-bg').fadeIn();
        $('body').css('overflow', 'hidden');
    })


    $('#sign-box').on('click', function() {
        $(this).addClass('active');
        $('.sign-box').fadeIn();
        $('.register-box').fadeOut();
        $('#register-box').removeClass('active');
    })


    $('#register-box').on('click', function() {
        $(this).addClass('active');
        $('.register-box').fadeIn();
        $('.sign-box').fadeOut();
        $('#sign-box').removeClass('active');
    })

    $('.close-btn').on('click', function() {
        $(this).parent().removeClass('open');
        $('.mask-bg').fadeOut(100);
        $('body').removeAttr("style");
    })

    // 手機選單
    $('.nav-drop a').parents('.nav-drop ').prev('.nav-a .nav-title').append('<i class="fas fa-angle-down"></i>');

    $('.nav-title .fas').on('click', function() {
        if ($(this).val() == 1) {
            $(this).css('transform', 'rotateX(0deg)');
            $(this).parents('.nav-a').removeClass('open');
            $(this).val(0);
        } else {
            $(this).css('transform', 'rotateX(-180deg)');
            $(this).parents('.nav-a').addClass('open');
            $(this).val(1);
        };
    })



    $('.mobile-menu').click((function() {
        $(this).next('.left-menu').slideToggle(200);
        $(this).children('i').toggleClass('fa-chevron-up');
    }))


    $('.pro-slick').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        arrows: false,
        asNavFor: '.pro-slick-nav',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    $('.pro-slick-nav').slick({
        slidesToShow: 4,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        asNavFor: '.pro-slick',
        arrows: false,
        // centerMode: true,
        focusOnSelect: true,
    });
    //常見問題
    $('.qa-title').click((function() {
        $(this).next('.qa-text').slideToggle();
        console.log(1);
        // $(this).toggleClass('q-open');
        if ($(this).find('.fas').val() == 1) {
            $(this).find('.fas').removeClass('fa-chevron-down');
            $(this).find('.fas').addClass('fa-chevron-up');

            $(this).find('.fas').val(0);
            console.log(1);
        } else {
            $(this).find('.fas').removeClass('fa-chevron-up');
            $(this).find('.fas').addClass('fa-chevron-down');
            $(this).find('.fas').val(1);
            console.log(2);
        };
    }))



    $('#twzipcode').twzipcode();
    $('#agree2').click(function() {
        $('#agree').prop('checked', true);
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
            $(".sp1-a,.sp1-b").fadeOut(100);
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
        if ($(this).val() == "0") {
            $(".sp2-a,.sp2-b,.sp2-c").fadeOut(100);
        }

        if ($(this).val() == "1") {
            $(".sp2-a,#send1").fadeIn(300);
            $(".sp2-b,.sp2-c,#send2").fadeOut(100);
        }

        if ($(this).val() == "2") {
            $(".sp2-b,#send2").fadeIn(300);
            $(".sp2-a,.sp2-c,#send1").fadeOut(100);

        }

        if ($(this).val() == "3") {
            $(".sp2-c,#send2").fadeIn(300);
            $(".sp2-a,.sp2-b,#send1").fadeOut(100);

        }

    });

    //placard
    // setTimeout(function() {
    //     $('.placard').fadeIn().css('display', 'flex');
    // }, 1000);
    // $('.placard,.placard-close').click(function() {

    //     $('.placard').fadeOut();
    // })
    // $('.placard-content').click(function() {
    //     event.stopPropagation(); //停止事件冒泡
    // })

    $('.logo-btn,.password-btn').on('click', function() {
        console.log(22545);
        $('.jump.login-info').fadeIn().css('display', 'flex');
    })
    $('.jump-box .close-bt,.login-info').click(function() {

        $('.login-info').fadeOut();
    })
    $('.jump-box').click(function() {
        event.stopPropagation();
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
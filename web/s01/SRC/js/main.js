$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).width() > 768) {
            if ($(this).scrollTop() > 100) {
                $('header').addClass('top-fixed').fadeIn();
                $('body').css('padding-top', '100px');
            } else {
                $('header').removeClass('top-fixed');
                $('body').removeAttr("style");
            }
        }
    });

    $('.header-top').on('click', function() {
        $(this).css('height', 'auto');
        if ($(this).val() == 0) {
            $(this).css('height', 'auto');
            $(this).val(1);
        } else {
            $(this).removeAttr("style");
            $(this).val(0);
        };
    })
    if ($('.header-top').height() >48) {
        $('.header-top').addClass('arrow');   
    }
    $('.header-top.arrow').on('click', function() {
        $(this).toggleClass('down');
    })

    if ($(window).width() < 800) {
        $('.shopping .shop-right').on('click', function() {
            // $(this).children('.shop-total').eq(0).fadeToggle();
            $(this).toggleClass('open');
            $('.shop-item').fadeToggle();
        });
    }



    $(document).on('blur', '.input-row input', function(e) {
        if ($(this).val()) {
            $(this).parent('.input-row').addClass('has-value')
        } else {
            $(this).parent('.input-row').removeClass('has-value')
        }
    })



    $('.nav-bar').on('click', function() {
        $(this).parent().next('nav').addClass('open');
        $('.mask-bg').fadeIn();
        $('body').css('overflow', 'hidden');
    })

    $('.addcart_btn').on('click', function() {
        $('.r-cart').toggleClass('open');
        $('.mask-bg').fadeIn();
    })

    $('.mask-bg').on('click', function() {
        $('.r-cart,nav.nav').removeClass('open');
        $(this).fadeOut(100);
        $('body').removeAttr("style");
    })

    $('.close-btn').on('click', function() {
        $(this).parent().removeClass('open');
        $('.mask-bg').fadeOut(100);
        $('body').removeAttr("style");
    })

    $('.menu-sub').prev('.menu-a').append('<i class="fas fa-chevron-down"></i>');
    $('.menu-drop').prev('.menu-a').append('<i class="fas fa-chevron-down"></i>');
    $('.menu-a .fas').on('click', function() {
        $(this).parent('.menu-a').next('.menu-drop').fadeToggle(200);
        $(this).parent('.menu-a').next('.menu-sub').fadeToggle(200);
    })

    $('.menu-sub .active').parent('.menu-sub').prev('.menu-a').children('.fa-chevron-down').toggleClass('fa-chevron-up');

    $('.menu-a .fa-chevron-down').on('click', function() {
        $(this).toggleClass('fa-chevron-up');
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.gotop').fadeIn(222);
        } else {
            $('.gotop').stop().fadeOut(222);
        }
    }).scroll();
    $('.gotop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });

    $('.mobile-menu').click((function() {
        $(this).next('.left-menu').slideToggle(200);
        $(this).children('i').toggleClass('fa-chevron-up');
    }))


    $('.index-banner').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        fade: true,
        speed: 1500,
        arrows: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        responsive: [{

            breakpoint: 520,
            settings: {
                arrows: false,
            }
        }]
    });
    $('.four-slide').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{

            breakpoint: 760,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });




    if ($(window).width() > 1200) {
        $('.zoom').zoom();
    }


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
    setTimeout(function() {
        $('.placard').fadeIn().css('display', 'flex');
        $('.placard,.placard-close').click(function() {

        $('.placard').fadeOut();
    })
    }, 500);

    $('.placard-content').click(function() {
        event.stopPropagation(); //停止事件冒泡
    })

    $('.logo-btn,.password-btn').on('click', function() {
        console.log(22545);
        $('.jump.login-info').fadeIn().css('display', 'flex');
    })
    $('.jump-box .close-bt,.login-info').click(function() {

        $('.login-info').fadeOut();
    })
    $('.jump-box').click(function() {
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

// 複製連結

window.Clipboard = (function(window, document, navigator) {
    var textArea,
        copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range,
            selection;

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {
        document.execCommand("Copy");
        document.body.removeChild(textArea);
    }

    copy = function(text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
    };

    return {
        copy: copy
    };
})(window, document, navigator);

$(".copy_link").on("click", function() {
    var $this = $(this),
        value = $this.prev("input").val();
    window.Clipboard.copy(value);
    $('.copy_info').show().delay(800).fadeOut(200);
});


$(".favorite_btn").on("click", function() {
    $('.favorite_info').show().delay(800).fadeOut(200);
});
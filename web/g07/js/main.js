// -------------------- header --------------------
let header = {
    menuSetting() {
        $('.menu .scrollbar-inner').scrollbar();
        // main li click
        let $mainLi = $('ul.main-list > li');
        $mainLi.on('click', function() {
            let vm = $(this);
            if (!vm.hasClass('active')) {
                vm.addClass('active').find('ul.sub-list').slideDown();
                vm.siblings().removeClass('active').find('ul.sub-list').slideUp();
            } else {
                vm.removeClass('active').find('ul.sub-list').slideUp();
            }
        });
        // sub li click
        let $subUl = $('ul.sub-list'),
            $subLi = $('ul.sub-list > li');
        $subUl.on('click', function(e) {
            e.stopPropagation();
        });
        $subLi.on('click', function() {
            let vm = $(this);
            if (!vm.hasClass('active')) {
                vm.addClass('active').find('ul.third-list').slideDown();
                vm.siblings().removeClass('active').find('ul.third-list').slideUp();
            } else {
                vm.removeClass('active').find('ul.third-list').slideUp();
            }
        });
        // third li click
        let $thirdUl = $('ul.third-list');
        $thirdUl.on('click', function(e) {
            e.stopPropagation();
        })
    },
    menuOpenFunc() {
        let $menu = $('section.menu');
        $menu.show();
        $('body').css('overflow-y', 'hidden');
        setTimeout(() => {
            $menu.addClass('show');
        }, 100);
    },
    menuCloseFunc() {
        let $menu = $('section.menu');
        $menu.removeClass('show');
        $('body').css('overflow-y', 'visible');
        setTimeout(() => {
            $menu.hide();
        }, 600);
    },
    menuOpenClose() {
        let $menuBtn = $('a.menu-btn');
        $menuBtn.on('click', function() {
            let vm = $(this);
            if (!vm.hasClass('active')) {
                vm.addClass('active');
                header.menuOpenFunc();
            } else {
                vm.removeClass('active');
                header.menuCloseFunc();
            }
        });
    },
    langOpenCLose() {
        let $langBtn = $('.lang-box a.lang-btn'),
            $select = $('ul.lang-select');
        $langBtn.on('click', function(e) {
            e.stopPropagation();
            let vm = $(this);
            if (!vm.hasClass('active')) {
                vm.addClass('active');
                $select.slideDown();
            } else {
                vm.removeClass('active');
                $select.slideUp();
            }
        });
        $select.on('click', function(e) {
            e.stopPropagation();
        });
        $('body').on('click', function() {
            $langBtn.removeClass('active');
            $select.slideUp();
        });
    }
}

// header.headerScroll();
header.menuSetting();
header.menuOpenClose();
header.langOpenCLose();

if ($(window).width() < 1200) {
    $('.search').on('click', function() {
        $(this).children('form').fadeToggle();
        $('.lang-drop').fadeOut();
        $('section.menu.show').removeClass('show');
        $('.menu-btn.active').removeClass('active');
        $('.mask-bg2').fadeOut();
        $('.mask-bg').fadeToggle();console.log(0);

    })
    $('.lang-box').on('click', function() {
        $(this).children('.lang-drop').fadeToggle();
        $('.search form').fadeOut();
        $('section.menu.show').removeClass('show');
        $('.menu-btn.active').removeClass('active');
        $('.mask-bg').fadeOut();
        $('.mask-bg2').fadeToggle();
    })
    
    // $('.search form,.lang-drop').click(function() {
    //     
    // })
    $(".search form,.lang-drop").click(function(event){
    event.stopPropagation();
  });
}
$('.menu-btn').on('click', function() {
    $('.lang-drop,.search form,.mask-bg,.mask-bg2').fadeOut();
})
$('.mask-bg,.mask-bg2').on('click', function() {
  $(this).fadeOut();
    $('.lang-drop,.search form').fadeOut();

})
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('header').addClass('h-w').fadeIn();
    } else {
        $('header').removeClass('h-w');
    }
});

$('.venobox').venobox(); 

$('.qa-box li').on('click', function() {
  $(this).children(".answer").fadeToggle();
  $(this).toggleClass('qa-open');
})

$('.m-PageTitle').on('click', function() {
  $(this).next(".place").fadeToggle();
})


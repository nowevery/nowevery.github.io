$(document).ready(function() {
    $('.ind_banner_box').slick({
        autoplay: true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1100,
            settings: {
                infinite: true,
                dots: true,
                arrows: false,
            }
        }, ]
    });
    $('.ind_prod_w').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '160px',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });
    $('.ind_news_o').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '160px',
        responsive: [{
            breakpoint: 1024,
            settings: {
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
         {
            breakpoint: 375,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false,
            }
        }
        ]
    });
});
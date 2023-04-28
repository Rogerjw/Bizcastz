$(document).ready(function() {
    //Title for links
    $('a').each(function() {
        var this_text = $(this).text();
        if(this_text.length > 0) {
            $(this).attr('title', this_text);
        }
    });
    
    //Our services slider
    if($('#ourServices-slider .carousel-cell').length > 1) {        
        $('#ourServices-slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [          
                    {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    //Hamburger
    $('.hamburger').on('click',function() {
        $('body').toggleClass('menu-open');
        $('header nav').slideToggle();
    });
});

$(window).on('load', function() {
    //Loader
    $('.loader').fadeOut();
});

$(window).on('load scroll', function() {
    //Header sticky
    if($(this).scrollTop() > 200) {
        $('body').addClass('header-sticky');
    } else {
        $('body').removeClass('header-sticky');
    }
});
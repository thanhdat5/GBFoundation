$(() => {

    setMobileMenu();
    function closeMenu() {
        $('.gb-header-toggle').removeClass('open');
        $('.gb-header-menu').removeClass('show');
        $('body').removeClass('overflow-hidden');
    }
    function setMobileMenu() {
        if (window.innerWidth > 767) {
            closeMenu();
        } else {
            $('.gb-header-toggle').on('click', function () {
                $(this).toggleClass('open');
                $('.gb-header-menu').toggleClass('show');
                if ($(this).hasClass('open')) {
                    $('body').addClass('overflow-hidden');
                } else {
                    $('body').removeClass('overflow-hidden');
                }
            })
            $('.gb-header-menu li a').on('click', function () {
                closeMenu();
            })
        }
    }

    window.onresize = () => {
        setMobileMenu();
    }

    $('.gb-w-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
    });
    $('.gb-hp-portfolio-slide').slick({
        slidesToShow: 3,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: '100px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px',
                }
            },
        ]
    });
    
    AOS.init();

    window.setTimeout(() => {
        $('#GBLoader').fadeOut(300);
    }, 500);
})
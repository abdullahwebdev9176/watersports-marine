
$(".toggle-menu").click(function () {
    var menuTitle = $(this).attr('data-title');
    var menuId = '#' + menuTitle;

    $('.mega-menu-wrapper').find('.show-mega-menu').removeClass('show-mega-menu');
    $(menuId).addClass('show-mega-menu')
})

$(".close-mega-menu").click(function () {
    $(this).closest('.mega-menu-wrapper').find('.show-mega-menu').removeClass('show-mega-menu');
})

$('.arrival-slider').owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    nav: true,
    dots: false,
    navText: [
        '<img src="./assets/images/icons/prev.svg" alt="Prev" class="nav-arrow">',
        '<img src="./assets/images/icons/next.svg" alt="Next" class="nav-arrow">'
    ],
    responsive: {
        0: {
            items: 1.7
        },
        767: {
            items: 2.7
        },
        1200: {
            items: 3.7
        }
    }
})
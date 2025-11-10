
$(".toggle-menu").click(function () {
    var menuTitle = $(this).attr("data-title");
    var menuId = "#" + menuTitle;
    var $menu = $(menuId);


    if ($menu.hasClass("show-mega-menu")) {

        $menu.removeClass("show-mega-menu");
    } else {

        $(".desktop-header")
            .find(".show-mega-menu")
            .removeClass("show-mega-menu");
        $menu.addClass("show-mega-menu");
    }
});


$(".close-mega-menu").click(function () {
    $(this).closest('.mega-menu-wrapper').find('.show-mega-menu').removeClass('show-mega-menu');
})

$('.footer-accordion-header').click(function () {
    $(this).toggleClass('active');
    $(this).next('.footer-accordion-content').slideToggle(200);

    $(this).find('.arrow-icon').toggleClass('rotate');
});


$(".accordion-tab").on("click", function () {
    var e = "#" + $(this).attr("title");

    if ($(window).width() > 991) {

        $(".service-accordion-content .accordion-content-show")
            .removeClass("accordion-content-show");
        $(e).addClass("accordion-content-show");
    } else {

        $(this).next(".accordion-content").not(e).slideUp();
        $(this).after($(e).stop(true, true).slideToggle());
        $(this).find("span.fa").toggleClass("rotate90");
    }
});



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
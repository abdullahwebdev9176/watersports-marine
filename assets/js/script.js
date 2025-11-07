
$(".toggle-menu").click(function () {
    var menuTitle = $(this).attr('data-title');
    var menuId = '#' + menuTitle;

    $('.mega-menu-wrapper').find('.show-mega-menu').removeClass('show-mega-menu');
    $(menuId).addClass('show-mega-menu')
})

$(".close-mega-menu").click(function () {
    $(this).closest('.mega-menu-wrapper').find('.show-mega-menu').removeClass('show-mega-menu');
})
//begin code Ciro//
$(document).ready(function () {
    $('.next').on('click', function () {
        let currentImg = $('.active-slide');
        let nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active-slide').css('z-index', -10);
            nextImg.addClass('active-slide').css('z-index', 10);
        }
    });
    $('.prev').on('click', function () {
        let currentImg = $('.active-slide');
        let prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active-slide').css('z-index', -10);
            prevImg.addClass('active-slide').css('z-index', 10);
        }
    });
});
//einde code Ciro//

$(document).ready(function () {
    // FEATURES MOUSE OVER == DIETER
    $('.feature').hover(
        function () {
            $(this).children('.info').stop().show().fadeTo("slow", 1);
            $(this).children('h2').stop().hide().fadeTo("slow", 0).hide();
        },
        function () {
            $(this).children('.info').stop().fadeTo("slow", 0).hide();
            $(this).children('h2').stop().show().fadeTo("slow", 1);
        }
    )

    $('.tabs').cardTabs({ 'theme': 'themakleur' });
});
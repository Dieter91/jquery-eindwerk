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

    //back-to-top == DIETER

    const backToTop = $('#back-to-top')
    backToTop.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    })
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            backToTop.css('display', 'flex');
        } else {
            backToTop.hide();
        }
    })

    //Begin code Yens //
    $('#succes').hide();
    $(function () {

        // shows succes message
        $('#myForm').ajaxForm(function () {
            $('#succes').show();
        });
    });
}); //Einde code Yens //

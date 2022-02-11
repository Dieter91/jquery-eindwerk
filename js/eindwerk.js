//begin code Ciro//
$(document).ready(function () {
    setTimeout(function () {
        $('.jq-text').removeClass('hidden');
    }, 500);

    $(".slider > div:gt(0)").hide();

    setInterval(function () {
        $('.slider > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.slider');
    }, 6000);
    $('.next').on('click', function () {
        $('.slider > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.slider');
    });
    $('.prev').on('click', function () {  //* er zit hier ergens nog een foutje in *//
        $('.slider > div:last')
            .fadeOut(1000)
            .prev()
            .fadeIn(1000)
            .end()
            .prependTo('.slider');
    });
    //einde code Ciro//



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
    //TABS == DIETER
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
    //socials == DIETER//
    $('#share-bar').share({
        theme: 'square'
    });

    //Einde code Dieter// 
    // Begin code Yens//

    var options = { minMargin: 5, maxMargin: 15, itemSelector: ".item", firstItemClass: "first-item" };
    $(".container_galerij").rowGrid(options);

    $('.banner_contact').vide('./images/codingvid.mp4', {
        muted: true,
        loop: true,
        autoplay: true
    });

    $('.container li a').hover({
        function() {
            $(this).css('background-color', '#ffff');
        },
        function() {
            $(this).animate({ right: "100px" });
        }
    });
});

    // Einde code Yens//
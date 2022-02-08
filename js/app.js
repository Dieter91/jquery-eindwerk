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
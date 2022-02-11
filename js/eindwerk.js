//JQUERY text == Ciro//
$(document).ready(function () {
    setTimeout(function () {
        $(".jq-text").removeClass("hidden");
    }, 500);
    //Banner Slider == Ciro//
    $(".slider > div:gt(0)").hide();

    setInterval(function () {
        $(".slider > div:first")
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo(".slider");
    }, 6000);
    $(".next").on("click", function () {
        $(".slider > div:first")
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo(".slider");
    });
    $(".prev").on("click", function () {//* er zit hier ergens nog een foutje in *//
        $(".slider > div:last")
            .fadeOut(1000)
            .prev()
            .fadeIn(1000)
            .end()
            .prependTo(".slider");
    });
    //einde code Ciro//

    // FEATURES MOUSE OVER == DIETER
    $(".feature").hover(
        function () {
            $(this).children(".info").stop().show().fadeTo("slow", 1);
            $(this).children("h2").stop().hide().fadeTo("slow", 0).hide();
        },
        function () {
            $(this).children(".info").stop().fadeTo("slow", 0).hide();
            $(this).children("h2").stop().show().fadeTo("slow", 1);
        }
    );
    //TABS == DIETER
    $(".tabs").cardTabs({ theme: "themakleur" });

    //back-to-top == DIETER
    const backToTop = $("#back-to-top");
    backToTop.on("click", function () {
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            500
        );
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            backToTop.css("display", "flex");
        } else {
            backToTop.hide();
        }
    });
    //socials == DIETER//
    $("#share-bar").share({
        theme: "square",
    });

    //Einde code Dieter//
    // Begin code Yens//

    $(".banner_contact").vide("./images/codingvid.mp4", {
        muted: true,
        loop: true,
        autoplay: true,
    });
    $(document).ready(function () {
        $(".table").fancyTable({
            sortColumn: 0,
            sortOrder: "descending",
            sortable: true,
            pagination: true,
            inputStyle: "color:green;",
            globalSearch: true,
            matchCase: true,
            inputPlaceholder: "Zoeken",
            paginationClass: "btn btn-secondary",
            paginationClassActive: "btn-dark",
            perPage: "6",
            onUpdate: function () {
                let msg = $(".msg");
                let input = $("input");
                if ($("tbody").children(":visible").length == 0) {
                    msg.text("Geen zoekresultaten!");
                    msg.css("display", "block");
                    input.css("color", "red");
                } else {
                    msg.text("");
                    msg.css("display", "none");
                    input.css("color", "green");
                }
            },
        });
    });
});
//Einde code Yens//
//fancytables == DIETER
$(document).ready(function () {
    $(".table").fancyTable({
        sortColumn: 0,
        sortOrder: "descending",
        sortable: true,
        pagination: true,
        inputStyle: "color:green;",
        globalSearch: true,
        matchCase: true,
        inputPlaceholder: "Zoeken",
        paginationClass: "btn btn-secondary",
        paginationClassActive: "btn-dark",
        perPage: "6",
        onUpdate: function () {
            let msg = $(".msg");
            let input = $("input");
            if ($("tbody").children(":visible").length == 0) {
                msg.text("Geen zoekresultaten!");
                msg.css("display", "block");
                input.css("color", "red");
            } else {
                msg.text("");
                msg.css("display", "none");
                input.css("color", "green");
            }
        },
    });
});
//EINDE FANCY TABLES DIETER
$(document).ready(function () {
    //begin code Yens

    $("#succes").hide();
    // validatie
    $("#myForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                email: true,
            },
            number: {
                number: true,
                required: true,
                minlength: 8,
            },
        },
        messages: {
            name: {
                minlength: "Naam moet minimum 3 karakters bevatten",
            },
            email: {
                email: "De e-mail moet deze syntax bevatten: abc@domein.com",
            },
            number: {
                number: "vul alleen nummers in",
                minlength: "Telefoonnummer moet minimum 8 cijfers bevatten",
            },
        },
    });
});

//einde code yens
/* PlANETARIUM == Ciro */
$(function () {
    $(".planet").planetarium({
        autospin: "4500ms",
        angle: "50deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,1)",
        pattern: "images/texture-earth.jpg",
        size: "500x500",
        float: true,
        space: "body",
        ring: false,
        ringColor: "#fff",
        ringAngle: "20deg"
    });
});
/* EINDE CODE CIRO*/

/* TEXTILLATE == Ciro */
$(function () {
    $('.tlt').textillate({
        loop: true,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,

        in: {
            delayScale: 1.5,
            delay: 50,
            sync: true,
            shuffle: false,
            reverse: true,
        },

        out: {
            effect: 'hinge',
            delayScale: 1.5,
            delay: 10,
            sync: false,
            shuffle: true,
            reverse: false,
        },

        callback: function () { },
        type: 'char'

    });
});
/* einde code Ciro */
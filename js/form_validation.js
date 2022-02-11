

$(document).ready(function () {
    //begin code Yens

    $('#succes').hide();
    // validatie
    $("#myForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            number: {
                number: true,
                required: true,
                minlength: 8

            },
        },
        messages: {
            name: {
                minlength: "Naam moet minimum 3 karakters bevatten"
            },
            email: {
                email: "De e-mail moet deze syntax bevatten: abc@domein.com"
            },
            number: {
                number: "vul alleen nummers in",
                minlength: "Telefoonnummer moet minimum 8 cijfers bevatten"
            }

        }
    });
});







//einde code yens
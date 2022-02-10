

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
                required: true,
                minlength: 8
            },
        },
    });

    // Succesvol verzonden bericht
    (function () {

        $('#myForm').ajaxForm(function () {
            $('#succes').show();
        });

    });
});







//einde code yens
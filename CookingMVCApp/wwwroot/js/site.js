$(document).ready(function () {
    $('#calculateButton').click(function () {
        var hours = parseFloat($('#hours').val());

        // Validate input, if not then alert user
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number for hours.');
            return;
        }

        // Calculate hourly rate
        var hourlyRate = parseFloat($('#hourlyRate').val().replace('$', ''));
        var total = hours * hourlyRate;

        $('#total').val('$' + total.toFixed(2));
    });
});

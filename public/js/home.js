$(document).ready(function () {

    /*
    TODO:   The code below attaches a `keyup` event to `#number` text field.
            The code checks if the current number entered by the user in the
            text field does not exist in the database.

            If the current number exists in the database:
            - `#number` text field background color turns to red
            - `#error` displays an error message `Number already registered`
            - `#submit` is disabled

            else if the current number does not exist in the database:
            - `#number` text field background color turns back to `#E3E3E3`
            - `#error` displays no error message
            - `#submit` is enabled
    */
    $('#number').keyup(function () {
        // your code here
    });

    $('#submit').click(function () {
      var name = $('#name').val();
      var number = $('#number').val();
      $('#name').val('');
      $('#number').val('');
      
      $.get('/add', {name: name, number: number}, function(result){
        $('#contacts').append('<div class="contact">' + 
        '<img src="/images/icon.webp" class="icon">' +
        '<div class="info">' +
        '<p class="text">' + result.name + '</p>' +
        '<p class="text">' + result.number + '</p>' +
        '</div>' +
        '<button class="remove"> X </button>' + 
        '</div>');
      });
    });

    /*
    TODO:   The code below attaches a `click` event to `.remove` buttons
            inside the `<div>` `#contacts`.
            The code deletes the specific contact associated to the
            specific `.remove` button, then removes the its parent `<div>` of
            class `.contact`.
    */
    $('#contacts').on('click', '.remove', function () {
        // your code here
    });

})

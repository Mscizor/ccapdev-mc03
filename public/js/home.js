$(document).ready(function () {

    /*
      Handles checking if number in input is already in database
      prevents user from inputting that number if it's already in the
      collection
    */
    $('#number').keyup(function () {
      var number = $('#number').val();

      $.get('/getCheckNumber', {number: number}, function(result){
        if (result.number == number){
          $('#number').css('background-color', 'red');
          $('#error').text('Number already registered');
          $('#submit').prop('disabled', true);
        }
        else {
          $('#number').css('background-color', '#E3E3E3');
          $('#error').text('');
          $('#submit').prop('disabled', false);
        }
      })
    });

    /*
      Inserts the name and number into the database as well as render
      the inserted name and number into the contacts list
    */
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

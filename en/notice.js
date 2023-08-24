
$(document).ready(function() {
    $('#warning').on('click', function() {
        $('.warning').fadeOut(300, function(){
          $('.warning').remove();
        });
    });
});
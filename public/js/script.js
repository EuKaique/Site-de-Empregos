$(document).ready(function(){
    var menu = $('#menu');

    $(menu).on('click', function(){
        $('.nav-container ul').toggleClass('open');
    });
});


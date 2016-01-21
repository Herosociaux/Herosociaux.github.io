$(document).ready(function(){

  $('.scroll').click(function(){
    var page = $(this).attr('href');
    var speed = 500;
    $('html,body').animate({ scrollTop: $(page).offset().top }, speed);
    return false;

  });




});

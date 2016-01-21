$(document).ready(function(){
  $('.suggestions').hide();

    setTimeout(function() {   //calls click event after a certain time
       $('.suggestions').fadeIn();
    }, 2000);



  $('.scroll').click(function(){
    var page = $(this).attr('href');
    var speed = 500;
    $('html,body').animate({ scrollTop: $(page).offset().top }, speed);
    return false;

  });




});

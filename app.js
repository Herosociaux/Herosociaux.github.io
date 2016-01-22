$(document).ready(function(){
  $('.overlay').hide();





    $('.overlay').click(function(){
      $('.overlay').fadeOut();

    });
     $('.close-button').click(function(){
       $('.overlay').fadeOut();

     });

     $('.on-click').click(function(){
       $('.overlay').fadeIn();

     });



  $('.scroll').click(function(){
    var page = $(this).attr('href');
    var speed = 500;
    $('html,body').animate({ scrollTop: $(page).offset().top }, speed);
    return false;

  });




});

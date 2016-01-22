$(document).ready(function(){
  $('.overlay').hide();

    setTimeout(function() {   //calls click event after a certain time
       $('.overlay').fadeIn();
    }, 30000);



    $('.overlay').click(function(){
      $('.overlay').fadeOut();

    });
     $('.close-button').click(function(){
       $('.overlay').fadeOut();

     });




  $('.scroll').click(function(){
    var page = $(this).attr('href');
    var speed = 500;
    $('html,body').animate({ scrollTop: $(page).offset().top }, speed);
    return false;

  });




});

// JavaScript Document
$(function () {
  $(window).scroll(function () {
    if($(window).width() > 879){
      var LMOV = $(this).scrollTop();
      if( LMOV >= 50 ){
          $('.pageHeader02').fadeOut(200),
          $('header').css({"position":"fixed"},200);
      } else {
          $('.pageHeader02').fadeIn(200),
          $('header').css({"position":"absolute"},200);
      }      
    }


  });
});
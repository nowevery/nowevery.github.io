$(document).foundation()


$(document).ready(function(){

		
// ----------------------------------------------------- SEARCH 
	$('.search-button a').click(function(){

		$('.popup-search').stop(true,true).slideToggle(300);
		return false;
	});

// ----------------------------------------------------- MENU TOGGLE
	$('.nav-toggle a').click(function(){
		$('.mobile-menu').stop(true,true).slideToggle(500);
		return false;
	});
	$('.mobile-menu ul li a').prepend('<i class="icon-right-dir"></i>');
	

	
});




$(document).ready(function(){
  $(".ft").focus(function(){
    $(this).parent(".popup-search").stop(true);
  });
  $(".ft").blur(function(){
    $(this).parent(".popup-search").slideToggle(300);
  });
});

$(function(){
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();

　　//當高度小於100時，關閉區塊 
　　if($this_Top < 100){
　　　$('#top-bar').stop().animate({top:"0px"},300).css("border-bottom","none");
　　　}
　　　　if($this_Top > 100){
　　　　$('#top-bar').stop().animate({top:"-10px"},300).css({"border-bottom":"1px","border-bottom-color":"#666","border-bottom-style":"solid"});
　　　 }
　　}).scroll();
　});
});


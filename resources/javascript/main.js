$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 20) {
	    $(".navbar").css("background" , "#000000");
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })
})
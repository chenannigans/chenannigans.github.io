$(window).scroll(function() {
if ($(this).scrollTop() > 10){  
    $('.thenav').addClass("altnav");

  }
  else{
    $('.thenav').removeClass("altnav");
  }
});
$(document).ready(function(){
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    });
  });

  $(window).scroll(function(){
    if($("#floating-menu").offset().top > 1400 && $("#floating-menu").offset().top < 2820){
      $("#floating-menu a").css("color", "black");
    } else {
      $("#floating-menu a").css("color", "white");
    }
  });
});

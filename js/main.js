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
    var offset = $(window).scrollTop() + $("#floating-menu").position().top;

    if(offset > $("#about-top").first().position().top && offset < $("#about-bottom").position().top) {
      $("#floating-menu a").css("color", "black");
    } else if(offset > $("#mentor-top").first().position().top && offset < $("#mentor-bottom").position().top){
      $("#floating-menu a").css("color", "black");
    } else if(offset > $("#process-top").first().position().top && offset < $("#process-bottom").position().top){
      $("#floating-menu a").css("color", "black");
    } else if(offset > $("#contact-top").first().position().top && offset < $("#contact-bottom").position().top){
      $("#floating-menu a").css("color", "black");
    } else{
      $("#floating-menu a").css("color", "white");
    }
  });
});

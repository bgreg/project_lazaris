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
    var offset = $("#floating-menu").offset().top
    if(offset > 1300 && offset < 2820){
      $("#floating-menu a").css("color", "black");
    } else if(offset > 3566 && offset < 4399){
      $("#floating-menu a").css("color", "black");
    } else if(offset > 7496 && offset < 8960){
      $("#floating-menu a").css("color", "black");
    } else if(offset > 9703 && offset < 9900){
      $("#floating-menu a").css("color", "black");
    } else{
      $("#floating-menu a").css("color", "white");
    }
  });
});

$(document).ready(function() {
  var scrollTime = 0.3;
  var scrollDistance = 170;

  $(window).on("mousewheel DOMMouseScroll", function(event){
    event.preventDefault();	
    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $(window).scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);
      
    TweenMax.to($(window), scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
      ease: Power1.easeOut, // For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
      autoKill: true,
      overwrite: 5		
    });
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling
        window.location.hash = hash;
      });
    } 
  });
});

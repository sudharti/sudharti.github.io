/*function scrollDiv(element) {
  $("html, body").delay(100).animate({ scrollTop: $(element).offset().top }, 900);
};*/

$(document).ready(function(){
  
  $.backstretch("assets/img/back-edited.jpg", {
    centeredX: true,
    centeredY: true,
    fade: "slow"
  });

  /*$(".scroll-link").click(function(e){
    e.preventDefault();
    scrollDiv($(this).attr("href"));
  });*/

  $("#phone").popover();

  /*$(window).on('scroll', function(){
    var topofDiv = $("#skills").offset().top;
    var height = $("#skills").outerHeight();
    if($(window).scrollTop() > (topofDiv - height)){
      $('.progress .progress-bar').progressbar();
    }
  });*/

});

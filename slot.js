$(function(){
  $(".start").on("click", function(){
      var $target = $("tr #champion");
      $target.addClass("rolling")
  });

  $(".넛신").on("click", function(){
      var $target = $("tr #line");
      $target.addClass("rolling")
  });

  $(".몰라").on("click", function(){
      var $target = $("tr #build");
      $target.addClass("rolling")
  });

  $("#시작").on("click", function(){
    var $stop = $("tr #champion, tr #build, tr #line")
    if($stop.hasClass("rolling")){
      $stop.removeClass("rolling")
    }
  });
});
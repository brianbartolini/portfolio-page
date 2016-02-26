$(document).ready(function(){

$(".lightboxphoto").click(function(e){
    e.preventDefault();
    var imagehref= $(this).attr("href");
    console.log(imagehref);
    if($('.lightboxsection').length > 0){
      $(".content").html("<img src=" + imagehref + "/>");

      $('.lightboxsection').show();
    }
  else {
    var lightbox= "<div class= 'lightboxsection'><p>Click to close</p><div class='content'><img src=" + imagehref + "/></div></div>";

      $('body').append(lightbox);

  }
});
  $('body').on('click', ".liveboxsection", function(){
        $('.lightboxsection').hide();
  });

});

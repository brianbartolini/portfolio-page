$(document).ready(function(){

// $(".lightboxphoto").click(function(e){
//     e.preventDefault();
//     var imagehref= $(this).attr("href");
//     console.log(imagehref);
//     if($('.lightboxsection').length > 0){
//       $(".content").html("<img src=" + imagehref + "/>");

//       $('.lightboxsection').show();
//     }
//   else {
//     var lightbox= "<div class= 'lightboxsection'><p>Click to close</p><div class='content'><img src=" + imagehref + "/></div></div>";

//       $('body').append(lightbox);

//   }
// });
//   $('body').on('click', ".liveboxsection", function(){
//         $('.lightboxsection').hide();
//   });

    $('a.gallery').click(function(e){
      e.preventDefault();
      var first = $('a.gallery:first').attr('href');
      var last = $('a.gallery:last').attr('href');
      $('#overlay').show();
      $('#lightbox img').attr('src',$(this).attr('href'));
      $('#lightbox .title').html($(this).find('h3').html());
      $('#lightbox').show();
      $('#prev').show();
      $('#next').show();
      if(first == $(this).attr('href')){
        $('#prev').hide();
      } else if(last == $(this).attr('href')){
        $('#next').hide();
      }
    });

    $('#close').click(function(e){
      e.preventDefault();
      $('#overlay').hide();
      $('#lightbox').hide();
    });

    $('#next').click(function(e){
      e.preventDefault();
      var href = $('#lightbox img').attr('src');
      $('a.gallery[href="'+href+'"]').parent().next().children('a').trigger('click');
    });

    $('#prev').click(function(e){
      e.preventDefault();
      var href = $('#lightbox img').attr('src');
      $('a.gallery[href="'+href+'"]').parent().prev().children('a').trigger('click');
    });

    $('body').keydown(function(e){
      if($('#lightbox').is(':visible')){
        if(e.which==37 && $('#prev').is(':visible')){
          // left arrow
          $('#prev').trigger('click');
        } else if(e.which==39 && $('#next').is(':visible')){
          // right arrow
          $('#next').trigger('click');
        } else if(e.which==27){
          // escape
          $('#close').trigger('click');
        }
      }
    });

});

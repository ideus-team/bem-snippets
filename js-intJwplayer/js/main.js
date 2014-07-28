$(document).ready(function(){
  intJwplayer();
});

function intJwplayer(){

  $('.js-videoItem').each(function(){
    var videoID = $(this).attr( "id" );
    var videoItem = $(this).data( "video" );
    var imageItem = $(this).data( "image" );
    
    jwplayer(videoID).setup({
      file: videoItem,
      image: imageItem,
      width: 640,
      height: 360
    });
  }); 
}
$(document).ready(function () {
  $(".b-zoomImg").each(function () {
    var $this = $(this);
    var galery = $this.parent().next().attr('id');        
    $this.elevateZoom({
      gallery: galery,
      cursor: 'pointer', cursor: 'pointer', galleryActiveClass: '-state_current',  tintColour:'#e5e5e5', tintOpacity:'0.8', imageCrossfade: true, loadingIcon: 'res/img/spinner.gif', tint:true});
  });
  
  $(".b-zoomImg").bind("click", function (e) {
    var ez = $(this).data('elevateZoom');
    $.fancybox(ez.getGalleryList());
    return false;
  });
});
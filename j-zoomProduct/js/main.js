$(document).ready(function () {
imgZoom();
});

function imgZoom() {
//initiate the plugin and pass the id of the div containing gallery images
$("#zoom").elevateZoom({gallery:'b-productGallery', cursor: 'pointer', galleryActiveClass: 'active',  tintColour:'#6a2e92', tintOpacity:'0.5', imageCrossfade: true, loadingIcon: 'img/spinner.gif', tint:true}); 

//pass the images to Fancybox
$("#zoom").bind("click", function(e) {  
  var ez =   $('#zoom').data('elevateZoom');	
	//$.fancybox(ez.getGalleryList());
  return false;
});
}
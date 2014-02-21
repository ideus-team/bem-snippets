/**
 *  Authors: %Author Name%
*/

$(document).ready(function () {
 // booking
   activateBookFields();
   
  if ($('html').hasClass('-device_desktop')) { // or -device_tablet, -device_mobile
    //... write some code
  }
});

$(window).resize(function() {

});

$(window).load(function () {
   activateBookFields();();
   bookingReset();
});

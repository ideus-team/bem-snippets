/**  
  <div class="b-registrationControl">
    <select>
      <option value="select">select</option>
    </select>
  </div> 
**/

$(document).ready(function () {
  intSelectCustom();
});

function intSelectCustom(){
 $('select').css({
  position : "absolute",
  left     : 0,
  top      : 0,
  bottom   : 0,
  right    : 0,
  opacity  : 0
 }).each(function(){
  $(this).parent().prepend('<div class="value_select"></div>');
  var new_val = $(this).find('option:selected').text();
  $(this).prev().text(new_val);  
 });
  $('select').change(function() {
  var new_val = $(this).find('option:selected').text();
    $(this).prev().text(new_val);
  });
}
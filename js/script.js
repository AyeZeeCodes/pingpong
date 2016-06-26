
$(document).ready(function() {
  $("#ping").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    $("#output").html(pingPong(number));
  });
 });

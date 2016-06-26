function pingPong(number) {
  var number;
  output = "";
  for (i = 1; i <= number; i++) {
    output += logic(i) + '</br>';
  }
  return output;
}
function logic(number) {
  if (number % 15===0) {
    return 'pingpong';
  } else if (number % 5===0){
    return 'pong';
  } else if (number % 3===0) {
    return 'ping';
  } else {
    return number;
  }
}
$(document).ready(function() {
  $("#ping").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    $("#output").html(pingPong(number));
  });
 });

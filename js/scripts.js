$(document).ready(function() {
  var age = parseFloat(prompt("How old are you?"));

  if (age >= 18) {
    $('#old_guys').show();

  } else {
    var age_to_wait = 18 - age;

    $('#age_to_wait').text(age_to_wait);
    $('#minors').show();
  }
});

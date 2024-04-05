function init(){
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the input and button elements
  var input = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  var output = document.getElementById('textoutput');

  // Add click event listener to the button
  button.addEventListener('click', function() {
    // Get the value of the input field
    var inputValue = input.value;

    // Show an alert with the input value prefixed by your name
    alert("Your Name: " + inputValue);

    // Update the text of the h2 element
    output.textContent = inputValue;
  });
});
window.addEventListener('load', init);

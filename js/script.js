function init() {
  var button = document.getElementById('entrybutton');

  // Add click event handler directly to the button
  button.onclick = function() {
    var textbox = document.getElementById('entryinput');
    var inputValue = textbox.value;

    // Show an alert with the input value prefixed by your name
    alert("Your Name: " + inputValue);

    // Update the text of the h2 element
    document.getElementById('textoutput').textContent = inputValue;
  };
}

window.addEventListener('load', init);

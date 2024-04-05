function init() {
  var button = document.getElementById('entrybutton');

  function showAlertAndDisplayText() {
    var textbox = document.getElementById('entryinput');
    var inputValue = textbox.value;
    
    // Show an alert with the input value prefixed by your name
    alert("Your Name: " + inputValue);
    
    // Update the text of the h2 element
    document.getElementById('textoutput').textContent = inputValue;
  }

  button.addEventListener('click', showAlertAndDisplayText);
}

window.addEventListener('load', init);

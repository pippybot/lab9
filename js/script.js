function init() {
  var button = document.getElementById('entrybutton');

  function  showMeText(){
    var textbox =  document.getElementByID('entryinput');
    // Show an alert with the input value prefixed by your name
    // Update the text of the h2 element
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Evelyn Myers " + textbox.value);
  }

  // This is the  button being added to actually be clicked
  button.addEventListener('click', showMeText);
}

window.addEventListener('load', init);

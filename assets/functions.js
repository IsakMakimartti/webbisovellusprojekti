function whiteMode() {
  var element = document.body;
  element.classList.toggle("white-mode");
}

function alertBox() {
  alert("Submitted! Thanks you for answering the survey!");
}

function copyTextFromLi(liElement) {
  // Get the text from the li element
  var textToCopy = liElement.textContent;

  // Remove the "Email: " or "Phone: " text from the beginning of the string
  textToCopy = textToCopy.replace("Email: ", "").replace("Phone: ", "");
  
  var tempElement = document.createElement('textarea');
  tempElement.value = textToCopy;
  document.body.appendChild(tempElement);
  tempElement.select();
  tempElement.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');
  document.body.removeChild(tempElement);
  alert('Copied the text: ' + textToCopy);
}

function currentTime () {
  setInterval(function () {
    const d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
});
}
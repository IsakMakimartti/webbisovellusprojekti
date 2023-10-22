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

function fetchInfoText() {
  let file = "assets/text/infoText.txt"

  fetch (file)
  .then(x => x.text())
  .then(y => document.getElementById("infoText").innerHTML = y);
} 

fetch('http://api.weatherapi.com/v1/current.json?key=f30df9843f164ee8a99201506232210&q=Oulu&aqi=no')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // You can also use response.text() for non-JSON data
  })
  .then(data => {
    // Work with the data
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
function whiteMode() {
    var element = document.body;
    element.classList.toggle("white-mode");
  } 

function alertBox() {
  alert("Submitted! Thanks you for answering the survey!");
}

function playAudio(url) {
  new Audio(url).play();
}
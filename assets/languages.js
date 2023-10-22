const languages = ["C++", "C", "Java", "JavaScript", "node.js", "MySQL"];
const ulElement = document.getElementById("projectsLanguagesList");

languages.forEach(function(language) {
    const liElement = document.createElement("li");
    liElement.textContent = language;
    ulElement.appendChild(liElement);
  });
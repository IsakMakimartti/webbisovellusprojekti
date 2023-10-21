document.addEventListener('DOMContentLoaded', function () {
    // Get references to all elements with the "loadPageLink" class
    const navLinks = document.querySelectorAll('.navLinks');
  
    // Add a click event listener to each link with the "loadPageLink" class
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        // Prevent the default link behavior (navigating to the new page)
        event.preventDefault();
  
        // Inform the user that the page is loading
        alert('Loading the new page...');
  
        // After alerting the user, navigate to the new page
        window.location.href = link.getAttribute('href');
      });
    });
  });
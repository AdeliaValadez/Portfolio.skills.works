document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarNav = document.getElementById("navbar-nav");
  
    navbarToggler.addEventListener("click", function() {
      navbarNav.classList.toggle("show-nav");
    });
  });
  
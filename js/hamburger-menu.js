function toggleDropdown() {
    var navbarLinks = document.querySelector(".navbar-links");
    var hamburgerToggle = document.querySelector(".hamburger-toggle");
    var icon = hamburgerToggle.querySelector("i");
  
    if (navbarLinks.classList.contains('active')) {
      navbarLinks.classList.remove('active');
      // Force a reflow
      void navbarLinks.offsetWidth;
      navbarLinks.classList.add('closed');
  
      // Change icon to hamburger menu (bars)
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    } else {
      navbarLinks.classList.remove('closed');
      // Force a reflow
      void navbarLinks.offsetWidth;
      navbarLinks.classList.add('active');
  
      // Change icon to close menu (times)
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    }
  }
  
  document.querySelector('.hamburger-toggle').addEventListener('click', toggleDropdown);
  
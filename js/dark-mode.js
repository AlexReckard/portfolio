// Get the dark mode toggle button element
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Listen for the toggle button click event
darkModeToggle.addEventListener('click', function() {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');

  // Toggle the icon between moon and sun
  const icon = darkModeToggle.querySelector('i');
  if (icon.classList.contains('fa-moon')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

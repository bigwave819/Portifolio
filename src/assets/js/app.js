document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const icon = document.getElementById('icon');
  const body = document.body;
  
  // Check if dark mode preference is stored in localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Set initial dark mode state
  if (isDarkMode) {
      body.classList.add('dark');
  } else {
      body.classList.remove('dark');                
  }

  //Toggle dark mode when button is clicked
  icon.addEventListener('click', function(){
    const isNotDarkMode = body.classList.remove('dark');
    localStorage.setItem('darkMode', isNotDarkMode);
  });
  darkModeToggle.addEventListener('click', function() {
      const isDarkMode = body.classList.toggle('dark');
      // Save dark mode preference to localStorage
      localStorage.setItem('darkMode', isDarkMode);
  });
});

let hamburger = document.querySelector('#hamburger');
let navlinks = document.querySelector('#navlinks');

let line = hamburger.querySelector('#line');
let line2 = hamburger.querySelector('#line2');

hamburger.addEventListener('click', function() {
  if (navlinks.classList.contains('hidden')) {
    navlinks.classList.remove('hidden');
    line.classList.add('absolute', 'rotate-45');
    line2.classList.add('absolute', '-rotate-45');
    line2.classList.remove('mt-2');
  } else{
    navlinks.classList.add('hidden');
    line.classList.remove('absolute', 'rotate-45');
    line2.classList.remove('absolute', '-rotate-45');
    line2.classList.add('mt-2');
  }
});
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.add('hidden');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
          });
      }
  });
});

// Mobile detection and adjustments
if (/Mobi|Android/i.test(navigator.userAgent)) {
  // Reduce animations for mobile
  document.documentElement.style.setProperty('--animation-speed', '0.5s');
  
  // Disable complex hover effects
  document.body.classList.add('is-mobile');
}
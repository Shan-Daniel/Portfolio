document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      html.classList.add('dark');
  }

  // Toggle theme
  themeToggle.addEventListener('click', function() {
      html.classList.toggle('dark');
      
      // Save preference to localStorage
      const isDark = html.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
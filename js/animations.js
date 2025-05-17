document.addEventListener('DOMContentLoaded', function() {
  // Anime-style power-up effect for hero section
  const hero = document.querySelector('#home');
  if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'scale(0.8)';
      hero.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      
      setTimeout(() => {
          hero.style.opacity = '1';
          hero.style.transform = 'scale(1)';
          
          // Add energy pulse effect
          const pulse = document.createElement('div');
          pulse.style.position = 'absolute';
          pulse.style.top = '0';
          pulse.style.left = '0';
          pulse.style.width = '100%';
          pulse.style.height = '100%';
          pulse.style.background = 'radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(79,70,229,0) 70%)';
          pulse.style.borderRadius = 'inherit';
          pulse.style.opacity = '0';
          pulse.style.transform = 'scale(0.5)';
          pulse.style.transition = 'all 1s ease-out';
          hero.appendChild(pulse);
          
          setTimeout(() => {
              pulse.style.opacity = '1';
              pulse.style.transform = 'scale(1.5)';
              
              setTimeout(() => {
                  pulse.style.opacity = '0';
                  setTimeout(() => pulse.remove(), 1000);
              }, 500);
          }, 300);
      }, 200);
  }

  // Anime-style slide-in for sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
      
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
                  
                  // Add impact effect
                  if (entry.target.querySelector('h2')) {
                      const heading = entry.target.querySelector('h2');
                      heading.style.display = 'inline-block';
                      heading.style.backgroundImage = 'linear-gradient(90deg, #4f46e5, #9333ea)';
                      heading.style.backgroundSize = '0% 3px';
                      heading.style.backgroundRepeat = 'no-repeat';
                      heading.style.backgroundPosition = 'left bottom';
                      heading.style.transition = 'background-size 0.8s ease';
                      
                      setTimeout(() => {
                          heading.style.backgroundSize = '100% 3px';
                      }, 300);
                  }
              }
          });
      }, { threshold: 0.1 });
      
      observer.observe(section);
  });

  // Anime-style hover effects for cards
  document.querySelectorAll('.card-hover').forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)';
          card.style.boxShadow = '0 25px 50px -12px rgba(79, 70, 229, 0.3)';
          
          // Add sparkle effect
          const sparkle = document.createElement('div');
          sparkle.innerHTML = '✦✦✦';
          sparkle.style.position = 'absolute';
          sparkle.style.top = '-15px';
          sparkle.style.right = '10px';
          sparkle.style.color = '#4f46e5';
          sparkle.style.fontSize = '20px';
          sparkle.style.opacity = '0';
          sparkle.style.transition = 'all 0.3s ease';
          sparkle.style.textShadow = '0 0 8px rgba(79, 70, 229, 0.8)';
          card.appendChild(sparkle);
          
          setTimeout(() => {
              sparkle.style.opacity = '1';
              sparkle.style.transform = 'translateY(10px)';
          }, 50);
      });
      
      card.addEventListener('mouseleave', () => {
          card.style.transform = '';
          card.style.boxShadow = '';
          
          const sparkle = card.querySelector('div');
          if (sparkle) {
              sparkle.style.opacity = '0';
              setTimeout(() => sparkle.remove(), 300);
          }
      });
  });

  // Anime-style button effects
  document.querySelectorAll('button, a[href^="#"]').forEach(btn => {
      btn.addEventListener('mousedown', () => {
          btn.style.transform = 'scale(0.95)';
      });
      
      btn.addEventListener('mouseup', () => {
          btn.style.transform = '';
      });
      
      btn.addEventListener('mouseenter', () => {
          btn.style.filter = 'drop-shadow(0 0 8px rgba(79, 70, 229, 0.6))';
      });
      
      btn.addEventListener('mouseleave', () => {
          btn.style.filter = '';
      });
  });
});

// Updated Performance Charts Animation
function animateCharts() {
    const charts = document.querySelectorAll('.performance-chart');
    
    charts.forEach(chart => {
      const percent = chart.getAttribute('data-percent');
      const path = chart.querySelector('path.stroke-current');
      const circumference = 2 * Math.PI * 15.9155;
      const offset = circumference - (percent / 100) * circumference;
      
      // Immediately set the final state but animate it
      path.style.strokeDasharray = `${circumference} ${circumference}`;
      path.style.strokeDashoffset = offset;
      
      // Force hardware acceleration
      chart.style.transform = 'translateZ(0)';
    });
  }
  
  // Trigger immediately (no intersection observer)
  document.addEventListener('DOMContentLoaded', animateCharts);


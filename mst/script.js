// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Parallax effect for hero section
const hero = document.querySelector('.h-screen');
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  alert('Form submitted! (Demo only)');
});
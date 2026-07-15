// ===========================================================
// Syavira Amalia — Portfolio Script
// ===========================================================

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// Nav background elevation on scroll
const siteNav = document.querySelector('.site-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    siteNav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
  } else {
    siteNav.style.boxShadow = 'none';
  }
});

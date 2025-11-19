/* -------------------------------------------------
   NAVIGATION (mobile toggle + scroll‑spy)
------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const navList = document.querySelector('.nav-list');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.nav-list a');
  const sections = document.querySelectorAll('section[id]');
  const backToTop = document.getElementById('backToTop');
  const yearSpan = document.getElementById('year');

  // Mobile menu toggle
  hamburger.addEventListener('click', () => navList.classList.toggle('show'));

  // Close menu after clicking a link (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => navList.classList.remove('show'));
  });

  // Scroll‑spy – add .active class to nav link that matches the section in viewport
  const activateLink = () => {
    let scrollPos = window.scrollY + 120; // offset for sticky header

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-list a[href="#${sec.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', () => {
    activateLink();

    // Show/hide back‑to‑top button
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // Back‑to‑top click
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // -------------------------------------------------
  // THEME TOGGLE (light / dark) – persisted in localStorage
  // -------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Adjust button icon
    themeToggleBtn.innerHTML = theme === 'dark'
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  };

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // -------------------------------------------------
  // CURRENT YEAR in footer
  // -------------------------------------------------
  const currentYear = new Date().getFullYear();
  if (yearSpan) yearSpan.textContent = currentYear;
});

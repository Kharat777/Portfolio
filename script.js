/* ---------- Mobile navigation toggle ---------- */
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});

/* ---------- Close navigation on link click (mobile) ---------- */
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('show');
  });
});

/* ---------- Footer year ---------- */
document.getElementById('currentYear').textContent = new Date().getFullYear();

/* ---------- Optional: Formspree success message ---------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    // Formspree will redirect automatically; this is just a placeholder.
    // You could add AJAX handling if you prefer.
  });
}

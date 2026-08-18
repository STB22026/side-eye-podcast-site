// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Close menu when a link is tapped (mobile)
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Signup form — placeholder handler until connected to a real email provider.
// See README.md for how to wire this up to Mailchimp / Beehiiv / Buttondown.
const signupForm = document.getElementById('signup-form');
const formNote = document.getElementById('form-note');

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    // Only intercept if the form hasn't been connected to a real provider yet
    if (signupForm.getAttribute('action') === '#') {
      e.preventDefault();
      formNote.textContent = 'Almost there! Connect this form to an email provider — see README.md.';
      formNote.style.color = '#b85f6a';
    }
    // Once action is set to a real provider URL, this will submit normally.
  });
}

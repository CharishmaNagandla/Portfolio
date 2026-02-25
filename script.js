function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    const submitButton = form.querySelector('button');
    submitButton.disabled = true;

    emailjs.sendForm('service_0suit2f', 'template_gu8879x', this)
      .then(() => {
          alert('Message sent successfully!');
          form.reset(); // Clear form
          submitButton.disabled = false;
      })
      .catch((error) => {
          alert('Oops! Something went wrong: ' + error.text);
          submitButton.disabled = false;
      });
});

const flipButtons = document.querySelectorAll('.flip-btn');

flipButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = btn.closest('.pr_card');
    card.classList.toggle('flipped');
    e.stopPropagation(); // prevents accidental parent click events
  });
});
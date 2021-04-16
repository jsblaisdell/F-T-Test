const form = document.getElementById('newsletterForm');

function submitForm(e) {
  const newsletterItems = document.querySelectorAll('.newsletter-list__item');
  const spinner = document.getElementById('spinner');

  const selectedNewsletters = [...newsletterItems].filter(newsletter => (
    newsletter.querySelector('.newsletter-list__checkmark-input').checked
  )).map(newsletter => (
    newsletter.querySelector('.newsletter-list__title').textContent
  ));

  const formSubmission = {
    selectedNewsletters,
    emailAddress: document.getElementById('email').value,
    optedOut: document.getElementById('optOut').checked
  }

  e.preventDefault();

  // Update form UI
  form.classList.add('newsletter-form--submitting');
  [...form.children].map((child, index) => {
    if (index <= 3) {
      child.setAttribute('aria-hidden', true);
    }
  });
  spinner.removeAttribute('aria-hidden');

  // Fake submitting form after 2 seconds
  setTimeout(() => {
    spinner.setAttribute('aria-hidden', true)

    if (Math.floor(Math.random() * 2)) {
      form.classList.add('newsletter-form--submitted');
      document
        .getElementById('submittedMessage')
        .removeAttribute('aria-hidden');
      console.log(formSubmission);

    } else {
      form.classList.add('newsletter-form--error');
      document
        .getElementById('errorMessage')
        .removeAttribute('aria-hidden');
      console.log('Error');
    }
  }, 2000);
}

form.addEventListener('submit', submitForm);

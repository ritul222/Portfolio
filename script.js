// Get the form element
const form = document.querySelector('form');

// Listen for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the form input values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const contact = document.querySelector('#contact').value;

  // Store the form data in an object
  const formData = {
    name,
    email,
    contact
  };

  // You can perform further actions with the formData object
  // such as sending it to a server or storing it in localStorage

  // Display the form data in the console
  console.log(formData);

  // Reset the form
  form.reset();
});

function submitForm(event) {
    event.preventDefault();  // Prevent the default form submission behavior
  
    // Retrieve the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate the email format using a simple regex (you can enhance this validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // You can perform further actions here, such as sending the form data to a server
  
    // For this example, we'll just alert the form data
    alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }
  
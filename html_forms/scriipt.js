function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkboxes = document.querySelectorAll('input[name="feedback"]:checked');
    const file = document.getElementById('file').files[0];
  
    if (!name || !email || checkboxes.length === 0 || !file) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Process the form data (you can modify this part to suit your needs)
    console.log('Form submitted with the following data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback options:', Array.from(checkboxes).map(checkbox => checkbox.value));
    console.log('File:', file);
  
    // Reset the form after submission (optional)
    document.getElementById('feedbackForm').reset();
  }
  
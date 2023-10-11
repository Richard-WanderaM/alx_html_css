function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subscription = document.querySelector('input[name="subscription"]:checked');
  
    if (name && email && subscription) {
      // Checking Form data validation
      console.log('Form submitted successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
  }
  
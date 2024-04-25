document.getElementById('personalDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Check if all fields are filled out
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const resume = document.getElementById('resume').value;
   
    
    if (firstName === '' || lastName === '' || email === '' || phone === '' || address === '' || resume === '' ) {
      alert('Please fill out all fields.'); // Display alert if any field is empty
      return;
    }
    
    // Form validation passed, you can now submit the form
  
    window.location.href = 'dashboard.html';

  });
  function handleLogin() {
    // Redirect to the login page
    window.location.href = "login.html"; // Change "login.html" to the actual path of your login page
}
document.getElementById('profile-picture').addEventListener('click', function() {
  document.getElementById('profile-input').click();
});

document.getElementById('profile-input').addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      document.getElementById('profile-picture').innerHTML = `<img src="${reader.result}" alt="Profile Picture">`;
    }
    reader.readAsDataURL(file);
  }
});



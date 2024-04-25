document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Example: Check if username and password match certain criteria
    if ((username === 'admin' || username==='gaya22026.it@rmkec.ac.in') && (password === 'password' || password==='86089790')) {
        // Redirect to dashboard or home page
        window.location.href = 'dashboard.html';
    } else {
        // Show error message
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});

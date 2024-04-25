const form = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const termsCheckbox = document.getElementById('terms-checkbox');

    if (!username || !email || !password || !confirmPassword) {
        showError('Please fill out all fields');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }

    if (!termsCheckbox.checked) {
        document.getElementById('terms-error').textContent = 'Please accept the terms and conditions';
        return;
    }
    // Additional validation logic goes here

    // If all validation passes, submit the form
    window.location.href = 'Profile.html';
});

function showError(message) {
    const errorSpan = document.createElement('span');
    errorSpan.textContent = message;
    errorSpan.classList.add('error');

    const errorField = document.getElementById('username-error');
    errorField.textContent = '';
    errorField.appendChild(errorSpan);
}
function handleLogin() {
    // Redirect to the login page
    window.location.href = "login.html"; // Change "login.html" to the actual path of your login page
}
// home.js

// Function to handle the signup button click event
function handleSignUp() {
    // Redirect to the sign up page
    window.location.href = "signup.html"; // Change "signup.html" to the actual path of your sign up page
}

// Add event listener to the signup button
document.getElementById("signupButton").addEventListener("click", handleSignUp);


// login.js

// Function to handle the login button click event
function handleLogin() {
    // Redirect to the login page
    window.location.href = "login.html"; // Change "login.html" to the actual path of your login page
}

// Add event listener to the login button
document.getElementById("loginButton").addEventListener("click", handleLogin);
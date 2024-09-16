document.addEventListener('DOMContentLoaded', () => {
    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form submission event listener
    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting
        event.preventDefault();

        // Retrieve and trim user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        let messages = [];

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain "@" and "."');
        }

        // Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks
            feedbackDiv.style.color = '#dc3545'; // Red for errors
        }
    });
});

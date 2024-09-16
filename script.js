<script src="/GractionCamp2024/Scripts/users.js"></script>
 


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username exists in the map
    if (userCredentials[username]) {
        const credentials = userCredentials[username];
        
        const userData = credentials.find(cred => cred.password === password);

        if (userData) {
            // Set sessionStorage to track login status
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('authenticatedPassword', password);

            // Redirect to the page if the password matches
            window.location.href = userData.page;
        } else {
            document.getElementById('errorMessage').textContent = 'Womp Womp...';
        }
    } else {
        document.getElementById('errorMessage').textContent = 'Womp Womp... How have you done this...';
    }
});


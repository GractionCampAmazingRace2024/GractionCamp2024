document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define a mapping of username and password pairs to their respective redirect pages
    const userCredentials = {
        'green': { password: 'green', page: 'Pages/green.html' },
        'purple': { password: 'purple', page: 'Pages/purple.html' },
        'blue': { password: 'blue', page: 'Pages/blue.html' },
        'orange': { password: 'orange', page: 'Pages/orange.html' },
        'yellow': { password: 'yellow', page: 'Pages/yellow.html' },
        'yellow': { password: 'clue', page: 'Pages/yellowclue1.html' } 
    };


    // Check if the username exists in the map
    if (userCredentials[username]) {
        const userData = userCredentials[username];

        // Check if the password matches
        if (password === userData.password) {
            window.location.href = userData.page;
        } else {
            document.getElementById('errorMessage').textContent = 'You May Not Proceed. Try Again';
        }
    } else {
        document.getElementById('errorMessage').textContent = 'Is Your Team Name Correct?';
    }
});

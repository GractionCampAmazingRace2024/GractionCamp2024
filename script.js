// Define a mapping of username and password pairs to their respective redirect pages
const userCredentials = {
    'green': [
        { password: 'green', page: 'Teams/Green/green.html' }
    ],
    'purple': [
        { password: 'purple', page: 'Teams/Purple/purple.html' }
    ],
    'blue': [
        { password: 'blue', page: 'Teams/Blue/blue.html' }
    ],
    'orange': [
        { password: 'orange', page: 'Teams/Orange/orange.html' }
    ],
    'yellow': [
        { password: 'yellow', page: 'Teams/Yellow/yellow.html' },
        { password: 'jovin', page: 'Teams/Yellow/yellowclue1.html' }
    ],
    'admin': [
        { password: 'admin', page: 'Teams/Admin/admin.html' },
        { password: 'challenge1', page: 'Teams/Admin/admin1.html' },
        { password: 'challenge2', page: 'Teams/Admin/admin2.html' }
    ],
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username exists in the map
    if (userCredentials[username]) {
        // Get the list of credentials for this username
        const credentials = userCredentials[username];
        
        // Find the credential that matches the password
        const userData = credentials.find(cred => cred.password === password);

        if (userData) {
            // Redirect to the page if the password matches
            window.location.href = userData.page;
        } else {
            // Display error if the password does not match
            document.getElementById('errorMessage').textContent = 'You may not proceed. Try again.';
        }
    } else {
        // Display error if the username is incorrect
        document.getElementById('errorMessage').textContent = 'Is your team name correct?';
    }
});


function ReturnToIndex() {
    window.location.href = '/GractionCamp2024/index.html'; // Replace 'index.html' with the path to your index page
}



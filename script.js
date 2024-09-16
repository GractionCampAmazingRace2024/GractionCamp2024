{/* <script src="/GractionCamp2024/Scripts/users.js"></script>
 */}

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


document.addEventListener('DOMContentLoaded', function() {
    const authenticatedUser = sessionStorage.getItem('authenticatedUser');
    const authenticatedPassword = sessionStorage.getItem('authenticatedPassword');

    if (!authenticatedUser || !userCredentials[authenticatedUser]) {
        window.location.href = '/GractionCamp2024/index.html';
        return;
    }

    const credentials = userCredentials[authenticatedUser];
    const userData = credentials.find(cred => cred.password === authenticatedPassword);

    if (!userData) {
        window.location.href = '/GractionCamp2024/index.html';
    }
});

function returnToIndex() {
    window.location.href = '/GractionCamp2024/index.html'; 
}



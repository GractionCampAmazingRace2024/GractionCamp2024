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

const errorMessages = [
    'Womp Womp...',
    'L Bozo',
    'Tough',
    'Skill Issue',
    'That was not very slay'
];


function getRandomErrorMessage() {
    const randomIndex = Math.floor(Math.random() * errorMessages.length);
    return errorMessages[randomIndex];
}


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
            history.pushState(null, null, '/GractionCamp2024/index.html'); // Push the fake entry
            history.pushState(null, null, '/GractionCamp2024/index.html'); // Push another fake entry for forward

        } else {
            document.getElementById('errorMessage').textContent = getRandomErrorMessage();
        }
    } else {
        document.getElementById('errorMessage').textContent = getRandomErrorMessage();
    }
});


function returnToIndex() {
    window.location.href = '/GractionCamp2024/index.html'; 
}



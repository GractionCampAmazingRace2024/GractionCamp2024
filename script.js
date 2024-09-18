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
    'That was not very slay',
    'ermmmm.... wrong',
    'Hint: Try Harder',
    'Amazing....',
    'Maybe I need to verify if you are a robot or not',
    'Womp Womp...',
    'What the sigma',
    'Chat... is this real?',
    'What the skibidi toilet',
    'One job...',
    'Embarassinggg....',
    'Are you even trying?',
    'Missed your shot...No Rizz',
    'You got this one day!',
    'Atleast you know what not to do',
    'You miss all the shots you don\'t take... I guess...'
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

            // Manipulate history to prevent back navigation
            history.pushState(null, null, userData.page);
            history.replaceState(null, null, userData.page);

        } else {
            document.getElementById('errorMessage').textContent = getRandomErrorMessage();
        }
    } else {
        document.getElementById('errorMessage').textContent = getRandomErrorMessage();
    }
});

function returnToIndex() {
    window.location.href = '/GractionCamp2024/index.html';

    // Manipulate history to ensure back navigation is not possible
    history.pushState(null, null, '/GractionCamp2024/index.html');
    history.replaceState(null, null, '/GractionCamp2024/index.html');
}

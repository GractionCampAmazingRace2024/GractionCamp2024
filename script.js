const userCredentials = {
    'green': [
        { password: 'green', page: '/GractionCamp2024/Teams/Green/green.html' }
    ],
    'purple': [
        { password: 'purple', page: '/GractionCamp2024/Teams/Purple/purple.html' }
    ],
    'blue': [
        { password: 'blue', page: '/GractionCamp2024/Teams/Blue/blue.html' }
    ],
    'orange': [
        { password: 'orange', page: '/GractionCamp2024/Teams/Orange/orange.html' }
    ],
    'yellow': [
        { password: 'yellow', page: '/GractionCamp2024/Teams/Yellow/yellow.html' },
        { password: 'jovin', page: '/GractionCamp2024/Teams/Yellow/yellowclue1.html' }
    ],
    'admin': [
        { password: 'admin', page: '/GractionCamp2024/Teams/Admin/admin.html' },
        { password: 'challenge1', page: '/GractionCamp2024/Teams/Admin/admin1.html' },
        { password: 'challenge2', page: '/GractionCamp2024/Teams/Admin/admin2.html' }
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
    'You miss all the shots you dont take... I guess...'
];

function getRandomErrorMessage() {
    const randomIndex = Math.floor(Math.random() * errorMessages.length);
    return errorMessages[randomIndex];
}

document.querySelector('.dropdown-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission on dropdown button click
    document.querySelector('.dropdown-content').classList.toggle('show');
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        document.querySelector('#teamSelection').value = value;
        document.querySelector('.dropdown-button').textContent = this.textContent;
        document.querySelector('.dropdown-content').classList.remove('show');
    });
});

// Close dropdown if clicked outside
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('teamSelection').value; // Get the selected team from the custom dropdown
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
            window.location.replace(userData.page);

        } else {
            document.getElementById('errorMessage').textContent = getRandomErrorMessage();
        }
    } else {
        document.getElementById('errorMessage').textContent = getRandomErrorMessage();
    }
});

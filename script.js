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

// Clear error message on dropdown click
document.querySelector('.dropdown-button').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
    document.getElementById('errorMessage').textContent = ''; 
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        document.querySelector('#teamSelection').value = value;
        document.querySelector('.dropdown-button').textContent = this.textContent;
        document.querySelector('.dropdown-content').classList.remove('show');
        document.getElementById('errorMessage').textContent = ''; 
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
    document.getElementById('errorMessage').textContent = ''; 
});

// Only show error message after form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('teamSelection').value; 
    const password = document.getElementById('password').value;

    // Clear previous error message
    document.getElementById('errorMessage').textContent = '';

    // Check if the username exists in the map
    if (userCredentials[username]) {
        const credentials = userCredentials[username];
        
        const userData = credentials.find(cred => cred.password === password);

        if (userData) {
            // Set sessionStorage to track login status
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('authenticatedPassword', password);
            window.location.replace(userData.page);

        } else {
            // Show error message only if the password is incorrect
            document.getElementById('errorMessage').textContent = getRandomErrorMessage();
        }
    } else {
        // Show error message if the username is invalid
        document.getElementById('errorMessage').textContent = getRandomErrorMessage();
    }
});

function returnToIndex() {
    window.location.replace('/GractionCamp2024/index.html'); // Use replace to prevent back navigation
}


function goFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  }
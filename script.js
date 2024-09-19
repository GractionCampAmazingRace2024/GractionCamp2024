const userCredentials = {
    'green': [
        { password: 'green', page: '/GractionCamp2024/Teams/Green/green.html' },
        { password: 'bush', page: '/GractionCamp2024/Teams/Green/green1.html' },
        { password: 'F0re5t', page: '/GractionCamp2024/Teams/Green/green2.html' },
        { password: '2468IcanCount', page: '/GractionCamp2024/Teams/Green/green3.html' },
        { password: 'outOfIdeas@123', page: '/GractionCamp2024/Teams/Green/green4.html' }
    ],
    'purple': [
        { password: 'purple', page: '/GractionCamp2024/Teams/Purple/purple.html' },
        { password: '1nd1g0', page: '/GractionCamp2024/Teams/Purple/purple1.html' },
        { password: 'Traction+', page: '/GractionCamp2024/Teams/Purple/purple2.html' },
        { password: 'HunuaF@lls', page: '/GractionCamp2024/Teams/Purple/purple3.html' },
        { password: 'password', page: '/GractionCamp2024/Teams/Purple/purple4.html' }
    ],
    'blue': [
        { password: 'blue', page: '/GractionCamp2024/Teams/Blue/blue.html' },
        { password: 'oceanBlu3', page: '/GractionCamp2024/Teams/Blue/blue1.html' },
        { password: 'bedobedobedo', page: '/GractionCamp2024/Teams/Blue/blue2.html' },
        { password: 'badamTisss', page: '/GractionCamp2024/Teams/Blue/blue3.html' },
        { password: 'bluepers', page: '/GractionCamp2024/Teams/Blue/blue4.html' }
    ],
    'orange': [
        { password: 'orange', page: '/GractionCamp2024/Teams/Orange/orange.html' },
        { password: 'mandarin', page: '/GractionCamp2024/Teams/Orange/orange1.html' },
        { password: 'testerPassword', page: '/GractionCamp2024/Teams/Orange/orange2.html' },
        { password: 'password', page: '/GractionCamp2024/Teams/Orange/orange3.html' },
        { password: 'willTheCodeBreak', page: '/GractionCamp2024/Teams/Orange/orange4.html' }
    ],
    'yellow': [
        { password: 'yellow', page: '/GractionCamp2024/Teams/Yellow/yellow.html' },
        { password: 'JovinWasHere', page: '/GractionCamp2024/Teams/Yellow/yellowclue1.html'},
        { password: 'Gino', page: '/GractionCamp2024/Teams/Yellow/yellowclue2.html' },
        { password: 'pleaseWork!', page: '/GractionCamp2024/Teams/Yellow/yellowclue3.html' },
        { password: '@isaacIsntHere', page: '/GractionCamp2024/Teams/Yellow/yellowclue4.html' }
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
    'You miss all the shots you dont take... I guess...',
    'This is a whole mood… for the wrong reasons',
    'Yikes! Not even close',
    'L + Ratio',
    'Not the vibes',
    'Sus password',
    "It's giving... Fail",
    'Oopsies...',
    'Hard Pass',
    'No bueno...',
    'You hate to see it...',
    '...',
    "That's a no from me",
];

function getRandomErrorMessage() {
  const randomIndex = Math.floor(Math.random() * errorMessages.length);
  return errorMessages[randomIndex];
}

// Clear error message on dropdown click
document.querySelector(".dropdown-button").addEventListener("click", function () {
    document.querySelector(".dropdown-content").classList.toggle("show");
    document.getElementById("errorMessage").textContent = "";
});

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    document.querySelector("#teamSelection").value = value;
    document.querySelector(".dropdown-button").textContent = this.textContent;

    // Set the background color of the dropdown button
    document.querySelector(".dropdown-button").style.backgroundColor =
      getComputedStyle(this).backgroundColor;

    // Update border color and gradient based on the selected team
    const color = teamColors[value];
    if (color) {
      document.querySelector(".login-container").style.animation = 'none'; // Stop the animation
      document.querySelector(".login-container").style.borderColor = color;
      document.querySelector(".login-container").style.boxShadow = `0 0 30px ${color}`;
      document.getElementById("gradient-submit").style.background = `linear-gradient(to bottom, ${color} 20%, black 20%, black 80%, ${color} 80%)`;
      document.querySelector(".mainBody").style.background = `linear-gradient(to bottom, ${color} 15%, black 15%, black 85%, ${color} 85%)`;
      document.body.style.backgroundColor = color;
    }

    document.querySelector(".dropdown-content").classList.remove("show");
    document.getElementById("errorMessage").textContent = "";
  });
});

// Close dropdown if clicked outside
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-button")) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
  document.getElementById("errorMessage").textContent = "";
});

// Only show error message after form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting automatically

  const username = document.getElementById("teamSelection").value;
  const password = document.getElementById("password").value;

  // Clear previous error message
  document.getElementById("errorMessage").textContent = "";

  // Ensure that a team is selected and a password is entered
  if (!username) {
    document.getElementById("errorMessage").textContent =
      "Please select a team.";
    return;
  }

  if (!password) {
    document.getElementById("errorMessage").textContent =
      "Please enter your password.";
    return;
  }

  // Check if the username exists in the map
  if (userCredentials[username]) {
    const credentials = userCredentials[username];

    const userData = credentials.find((cred) => cred.password === password);

    if (userData) {
      // Set sessionStorage to track login status
      sessionStorage.setItem("authenticatedUser", username);
      sessionStorage.setItem("authenticatedPassword", password);
      window.location.replace(userData.page);
    } else {
      // Show error message only if the password is incorrect
      document.getElementById("errorMessage").textContent =
        getRandomErrorMessage();
    }
  } else {
    // Show error message if the username is invalid
    document.getElementById("errorMessage").textContent =
      getRandomErrorMessage();
  }
});

function returnToIndex() {
  window.location.replace("/GractionCamp2024/index.html"); // Use replace to prevent back navigation
}




// Map team colors to their corresponding gradient backgrounds
const teamColors = {
  'green': '#92d14f',
  'purple': '#cd66ff',
  'blue': '#01b0f1',
  'orange': '#ffc000',
  'yellow': 'yellow',
  'admin': 'red'
};



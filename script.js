const userCredentials = {
  green: [
    { password: "green", page: "greenPage", css: "green.css" },
    { password: "bush", page: "c2", css: "green.css" },
    { password: "F0re5t", page: "c3", css: "green.css" },
    { password: "2468IcanCount", page: "c4", css: "green.css" },
    { password: "outOfIdeas@123", page: "c1", css: "green.css" },
  ],
  purple: [
    { password: "purple", page: "purplePage", css: "purple.css" },
    { password: "1nd1g0", page: "c1", css: "purple.css" },
    { password: "Traction+", page: "c2", css: "purple.css" },
    { password: "HunuaF@lls", page: "c3", css: "purple.css" },
    { password: "password", page: "c4", css: "purple.css" },
  ],
  blue: [
    { password: "blue", page: "bluePage", css: "blue.css" },
    { password: "oceanBlu3", page: "c1", css: "blue.css" },
    { password: "bedobedobedo", page: "c2", css: "blue.css" },
    { password: "badamTisss", page: "c4", css: "blue.css" },
    { password: "bluepers", page: "c3", css: "blue.css" },
  ],
  orange: [
    { password: "orange", page: "orangePage", css: "orange.css" },
    { password: "mandarin", page: "c2", css: "orange.css" },
    { password: "testerPassword", page: "c3", css: "orange.css" },
    { password: "password", page: "c1", css: "orange.css" },
    { password: "willTheCodeBreak", page: "c4", css: "orange.css" },
  ],
  yellow: [
    { password: "yellow", page: "yellowPage", css: "yellow.css" },
    { password: "JovinWasHere", page: "c4", css: "yellow.css" },
    { password: "Gino", page: "c3", css: "yellow.css" },
    { password: "pleaseWork!", page: "c2", css: "yellow.css" },
    { password: "@isaacIsntHere", page: "c1", css: "yellow.css" },
  ],
  admin: [
    { password: "admin", page: "adminPage", css: "admin.css" },
    { password: "challenge1", page: "c1", css: "admin.css" },
    { password: "challenge2", page: "c2", css: "admin.css" },
    { password: "rrtime", page: "rickRollPage", css: "admin.css" },
  ],
};

const errorMessages = [
  "Womp Womp...",
  "L Bozo",
  "Tough",
  "Skill Issue",
  "That was not very slay",
  "ermmmm.... wrong",
  "Hint: Try Harder",
  "Amazing....",
  "Maybe I need to verify if you are a robot or not",
  "Womp Womp...",
  "What the sigma",
  "Chat... is this real?",
  "What the skibidi toilet",
  "One job...",
  "Embarassinggg....",
  "Are you even trying?",
  "Missed your shot...No Rizz",
  "You got this one day!",
  "Atleast you know what not to do",
  "You miss all the shots you dont take... I guess...",
  "This is a whole mood… for the wrong reasons",
  "Yikes! Not even close",
  "L + Ratio",
  "Not the vibes",
  "Sus password",
  "It's giving... Fail",
  "Oopsies...",
  "Hard Pass",
  "No bueno...",
  "You hate to see it...",
  "...",
  "That's a no from me",
  "Yikes...",
  "Sucks to suck...",
  "Did you drop the phone?",
];

// Map team colors to their corresponding gradient backgrounds
const teamColors = {
  green: "#92d14f",
  purple: "#cd66ff",
  blue: "#01b0f1",
  orange: "#ffc000",
  yellow: "yellow",
  admin: "red",
};

const teamThemeMusic = {
  green: 10,
  purple: 60,
  blue: 30,
  orange: 8,
  yellow: 70,
  admin: 0,
};

let currentThemeMusicId = ""; // Variable to store the currently playing theme music

function getRandomErrorMessage() {
  const randomIndex = Math.floor(Math.random() * errorMessages.length);
  return errorMessages[randomIndex];
}

// Show/hide dropdown on button click
document
  .querySelector(".customButton")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from propagating to the document
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("show");
    // Close other dropdowns if open
    document.querySelectorAll(".dropdown-content").forEach((otherDropdown) => {
      if (
        otherDropdown !== dropdown &&
        otherDropdown.classList.contains("show")
      ) {
        otherDropdown.classList.remove("show");
      }
    });
    document.getElementById("errorMessage").textContent = "";
  });

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
  if (!event.target.matches(".customButton")) {
    document.querySelectorAll(".dropdown-content.show").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
    document.getElementById("errorMessage").textContent = "";
  }
});

// Update team selection and button style on dropdown item click
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    document.querySelector("#teamSelection").value = value;
    document.querySelector(".customButton").textContent = this.textContent;
    const bgColor = getComputedStyle(this).backgroundColor;
    document.querySelector(".customButton").style.backgroundColor = bgColor;
    const color = teamColors[value];
    if (color) {
      const loginContainer = document.querySelector(".login-container");
      loginContainer.style.animation = "none"; // Stop the animation
      loginContainer.style.borderColor = color;
      loginContainer.style.boxShadow = `0 0 30px ${color}`;
      document.getElementById(
        "gradient-submit"
      ).style.background = `linear-gradient(to bottom, ${color} 20%, black 20%, black 80%, ${color} 80%)`;
      document.querySelector(
        ".mainBody"
      ).style.background = `linear-gradient(to bottom, ${color} 15%, black 15%, black 85%, ${color} 85%)`;
      document.body.style.backgroundColor = color;

      const colorTheme = `${[value]}Theme`;
      console.log("Color Theme is:", colorTheme);
      playThemeMusic(colorTheme, `${teamThemeMusic[value]}`);
      console.log("Color Time Should be:", `${teamThemeMusic[value]}`);
    }
    document.querySelector(".dropdown-content").classList.remove("show");
    document.getElementById("errorMessage").textContent = "";
  });
});

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting automatically
  const username = document.getElementById("teamSelection").value;
  const password = document.getElementById("password").value;
  document.getElementById("errorMessage").textContent = "";
  if (!username) {
    document.getElementById("errorMessage").textContent =
      "Please select a team first.";
    return;
  }
  if (!password) {
    document.getElementById("errorMessage").textContent =
      "Please enter your password.";
    return;
  }
  if (userCredentials[username]) {
    const credentials = userCredentials[username];
    const userData = credentials.find((cred) => cred.password === password);

    if (userData) {
      sessionStorage.setItem("authenticatedUser", username);
      sessionStorage.setItem("authenticatedPassword", password);

      document
        .querySelectorAll(".page")
        .forEach((page) => (page.style.display = "none"));
      document.getElementById(userData.page).style.display = "block";
      playThemeMusic("unlockSound");

      document.getElementById("iphoneline").style.display = "none";
      const linkElement = document.getElementById("dynamic-css");
      linkElement.href = `/GractionCamp2024/CSS/${user.css}`;
    } else {
      document.getElementById("errorMessage").textContent =
        getRandomErrorMessage();

      // Play fail sound
      const failSound = document.getElementById("failSound");
      failSound.volume = 0.3;
      failSound.play().catch((error) => {
        console.log("Error playing fail sound:", error);
      });

      failSound.addEventListener("ended", () => {
        if (currentThemeMusicId) {
          const currentMusicElement =
            document.getElementById(currentThemeMusicId);
          if (currentMusicElement) {
            currentMusicElement.volume = 1; // Restore to original volume
          }
        }
      });
    }
  } else {
    // Show error message if the username is invalid
    document.getElementById("errorMessage").textContent =
      getRandomErrorMessage();
  }
});

// Returns each teams page to the index and starts a theme music
function returnToIndex() {
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = "none";
  });

  document.getElementById("indexPage").style.display = "block";

  sessionStorage.removeItem("authenticatedUser");
  sessionStorage.removeItem("authenticatedPassword");

  // Clear the password input field
  document.getElementById("password").value = "";

  document.getElementById("dynamic-css").href = "/GractionCamp2024/style.css";
  document.getElementById("iphoneline").style.display = "block";

  // Remove any lingering error messages
  document.getElementById("errorMessage").textContent = "";

  // Play random theme music
  const themeMusicOptions = ["themeMusic", "themeMusic1", "themeMusic2"];
  const randomThemeMusicElement =
    themeMusicOptions[Math.floor(Math.random() * themeMusicOptions.length)];
  playThemeMusic(randomThemeMusicElement);
}

document.addEventListener("DOMContentLoaded", function () {
  function loadingScreen() {
    const button = document.getElementById("startButton");
    let countdown = 0;
    button.disabled = true;
    const interval = setInterval(() => {
      if (countdown < 100) {
        console.log(countdown);
        const randomIncrement = Math.floor(Math.random() * 5) + 1;
        countdown = Math.min(countdown + randomIncrement, 100);
        console.log(countdown);
        button.innerHTML = `${countdown}% Loaded...`;
      } 
      else if(countdown > 100){
        countdown = 100
        console.log(countdown);
      }
      else if(countdown === 100){

        setTimeout(() => {
          clearInterval(interval);
          button.innerHTML = "Click Me";
          button.disabled = false;
        }, 2000); // 1-second delay (1000 milliseconds)
      }
    }, 300);
  }
  loadingScreen()
  preloadRickRoll()
});

// Shows the indexPage and closes off the loading page and starting the theme musc
function homePage() {
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById("indexPage").style.display = "block";
  document.getElementById("dynamic-css").href = "/GractionCamp2024/style.css";
  document.getElementById("iphoneline").style.display = "block";
  document.body.style.backgroundColor = "yellow";
  document.documentElement.style.backgroundColor = "yellow";
  playThemeMusic("themeMusic");
  

}

// Team music player // Play team music
function playThemeMusic(audioFile, startTime = 0) {
  if (currentThemeMusicId) {
    const currentMusicElement = document.getElementById(currentThemeMusicId);
    if (currentMusicElement) {
      currentMusicElement.pause();
      currentMusicElement.currentTime = 0; // Reset the music to the start
    }
  }
  const audioElement = document.getElementById(audioFile);
  if (audioElement) {
    audioElement.currentTime = startTime;
    audioElement.play(); // Play the selected audio
    currentThemeMusicId = audioFile; // Store the new audio's ID
  } else {
    console.error(`Audio file with ID ${audioFile} not found`);
  }
}

// Rick Roll Video
let isPreloaded = false;

// function preloadRickRoll() {
//   const video = document.getElementById("rickRollVideo");
//   const startTime = performance.now();
//   video.load();
//   video.addEventListener("loadeddata", function () {
//     const endTime = performance.now();
//     const loadTime = (endTime - startTime) / 1000;
//     console.log(`Rick Roll video preloaded in ${loadTime.toFixed(2)} seconds`);
//     document.getElementById("playButton").style.display = "inline";
//   });
// }
function preloadRickRoll() {
  const video = document.getElementById("rickRollVideo");
  const startTime = performance.now();
  video.preload = "auto"; // Set the preload attribute to 'auto'
  video.load();
  
  // Monitor the buffering progress
  const checkBuffering = setInterval(() => {
    const buffered = video.buffered;
    const duration = video.duration;
    
    if (buffered.length > 0) {
      const loaded = buffered.end(0); // Get how much of the video is buffered
      console.log(`Buffered: ${(loaded / duration * 100).toFixed(2)}%`);
      
      if (loaded >= duration) {
        const endTime = performance.now();
        const loadTime = (endTime - startTime) / 1000;
        console.log(`Rick Roll video fully preloaded in ${loadTime.toFixed(2)} seconds`);
        document.getElementById("playButton").style.display = "inline";
        clearInterval(checkBuffering); // Stop checking when the video is fully loaded
      }
    }
  }, 500); // Check every 500 milliseconds
}


function playRickRoll() {
  const video = document.getElementById("rickRollVideo");
  video.style.display = "block"; // Optionally make it visible
  video.play(); // Play the video
}

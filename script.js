const userCredentials = {
  green: [
    { password: "Gr33nF0l!@ge", page: "Challenge9", css: "CSS/green.css" },
    { password: "Fr0gst0mp!ng", page: "Challenge5", css: "CSS/green.css" },
    { password: "Gr@ssBl@de", page: "Challenge2", css: "CSS/green.css" },
    { password: "F!eld0fDr3@mz", page: "Challenge7", css: "CSS/green.css" },
    { password: "M!ntyM0rning", page: "Challenge4", css: "CSS/green.css" },
    { password: "F0r3stC@n0py", page: "Challenge3", css: "CSS/green.css" },
    { password: "Gr33nG!ant", page: "Challenge6", css: "CSS/green.css" },
    { password: "LushV3rd@nt", page: "Challenge1", css: "CSS/green.css" },
    { password: "Spr!ngL3@ps", page: "Challenge8", css: "CSS/green.css" },
    { password: "JONO", page: "Challenge10", css: "CSS/green.css" }, 
  ],
  purple: [
    { password: "Purpl3V!0l3t", page: "Challenge5", css: "CSS/purple.css" },
    { password: "L@v3nd3rDr3@m", page: "Challenge3", css: "CSS/purple.css" },
    { password: "R0yalR@!n", page: "Challenge7", css: "CSS/purple.css" },
    { password: "Gr@p3Spl@sh", page: "Challenge2", css: "CSS/purple.css" },
    { password: "Am3thystGl0w", page: "Challenge4", css: "CSS/purple.css" },
    { password: "Tw!l!ghtDr!ft", page: "Challenge8", css: "CSS/purple.css" },
    { password: "V!0l3tM!st", page: "Challenge1", css: "CSS/purple.css" },
    { password: "Purpl3P@th", page: "Challenge10", css: "CSS/purple.css" },
    { password: "Plum3cst@sy", page: "Challenge6", css: "CSS/purple.css" },
    { password: "PRIYA", page: "Challenge9", css: "CSS/purple.css" }, // Added
  ],
  blue: [
    { password: "Blu3T!d3", page: "Challenge7", css: "CSS/blue.css" },
    { password: "W@v3r!d3r", page: "Challenge9", css: "CSS/blue.css" },
    { password: "S@pph!r3Spl@sh", page: "Challenge3", css: "CSS/blue.css" },
    { password: "0c3@nD3pth", page: "Challenge6", css: "CSS/blue.css" },
    { password: "Blu3Lag00n", page: "Challenge4", css: "CSS/blue.css" },
    { password: "Aqu@t!cDr34m", page: "Challenge10", css: "CSS/blue.css" },
    { password: "BluM00n", page: "Challenge5", css: "CSS/blue.css" },
    { password: "Blu3Sk!es", page: "Challenge2", css: "CSS/blue.css" },
    { password: "D33pS3@V3ntur3", page: "Challenge8", css: "CSS/blue.css" },
    { password: "ASHLYN", page: "Challenge1", css: "CSS/blue.css" }, // Added
  ],
  orange: [
    { password: "0r@ng3Sunr!s3", page: "Challenge3", css: "CSS/orange.css" },
    { password: "T!gerStr!p3s", page: "Challenge9", css: "CSS/orange.css" },
    { password: "CitrusFl@re", page: "Challenge7", css: "CSS/orange.css" },
    { password: "FieryBl@z3", page: "Challenge6", css: "CSS/orange.css" },
    { password: "T@ng3rin3Sp!c3", page: "Challenge1", css: "CSS/orange.css" },
    { password: "Autumn@ir", page: "Challenge2", css: "CSS/orange.css" },
    { password: "M@ndr!nG!ng3r", page: "Challenge5", css: "CSS/orange.css" },
    { password: "Bl@z!ngStr!d3", page: "Challenge10", css: "CSS/orange.css" },
    { password: "0r@ng3R@d!@nc3", page: "Challenge4", css: "CSS/orange.css" },
    { password: "JAMES", page: "Challenge8", css: "CSS/orange.css" }, // Added
  ],
  yellow: [
    { password: "Y3ll0wL!ght", page: "Challenge4", css: "CSS/yellow.css" },
    { password: "G0ld3nB3@ms", page: "Challenge1", css: "CSS/yellow.css" },
    { password: "L3m0nSpr!tz", page: "Challenge9", css: "CSS/yellow.css" },
    { password: "Sunn!D@ze", page: "Challenge6", css: "CSS/yellow.css" },
    { password: "H0n3yGl0w", page: "Challenge5", css: "CSS/yellow.css" },
    { password: "B!tt3rSw33t", page: "Challenge2", css: "CSS/yellow.css" },
    { password: "Saffr0nFl@r3", page: "Challenge8", css: "CSS/yellow.css" },
    {
      password: "M@r!g0ldSpr!nkl3s",
      page: "Challenge7",
      css: "CSS/yellow.css",
    },
    { password: "M!dD@ySh!n3", page: "Challenge3", css: "CSS/yellow.css" },
    { password: "CIARA", page: "Challenge10", css: "CSS/yellow.css" }, // Added
  ],

  admin: [
    { password: "admin", page: "Challenge1", css: "CSS/admin.css" },
    { password: "settings", page: "adminPage", css: "CSS/admin.css" },
    { password: "rrtime", page: "rickRollPage", css: "RickRolled/rickRoll.css"},
  ],
};

let currentThemeMusicId = ""; // Variable to store the currently playing theme music
// let challengeStart, challengeEnd;
// let timerRunning = false; // Flag to track if the timer is running
// let roundTimers = [];

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

const loadedAudioStatus = {}; // Object to track loading status of each audio

const audioIds = [
  "failSound",
  "unlockSound",
  "themeMusic",
  "blueTheme",
  "greenTheme",
  "orangeTheme",
  "yellowTheme",
  "purpleTheme",
  "adminTheme",
  "miiShop",
  "themeMusic1",
  "themeMusic2",
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
  // green: 10,
  // purple: 60,
  // blue: 30,
  // orange: 8,
  // yellow: 70,
  // admin: 23,
  green: 0,
  purple: 0,
  blue: 0,
  orange: 0,
  yellow: 0,
  admin: 0,
};

function audioLoaded() {
  let allLoaded = true;
  let totalAudioPercentage = 0;
  let totalAudios = audioIds.length;
  let bufferedInfo = "";

  audioIds.forEach((id) => {
    const audioElement = document.getElementById(id);
    if (audioElement) {
      const state = audioElement.readyState;

      // Only proceed if the audio has not been marked as loaded
      if (!loadedAudioStatus[id]) {
        if (state < 4) {
          console.log(`${id} - Ready State: ${state}`);
          allLoaded = false;
          bufferedInfo += `<div id='fullybuffered' >${id} | 100% Loaded</div>`;
        }

        // Calculate percentage of audio loaded
        else if (audioElement.buffered.length > 0) {
          const bufferedAmount = audioElement.buffered.end(0);
          const totalDuration = audioElement.duration;
          const loadedPercentage = (bufferedAmount / totalDuration) * 100;
          bufferedInfo += `<div id='buffering' >${id} | Loading: ${Math.round(
            loadedPercentage.toFixed(2)
          )}%</div>`;
          console.log(`${id} - Loaded: ${loadedPercentage.toFixed(2)}%`);

          // Mark audio as loaded if fully buffered
          if (loadedPercentage >= 100) {
            loadedAudioStatus[id] = true; // Mark as loaded
          }

          totalAudioPercentage += loadedPercentage;
        }
      } else {
        // If already loaded, consider it fully buffered
        console.log(`${id} - Already Loaded`);
        bufferedInfo += `<div id='fullybuffered'>${id} | 100% Loaded</div>`; // Indicate it is fully loaded
      }
    } else {
      console.log(`${id} not found.`);
    }
  });

  document.getElementById("adminTest").innerHTML = bufferedInfo;

  const averageAudioPercentage = totalAudioPercentage / totalAudios;
  console.log(`Average Audio Loaded: ${averageAudioPercentage.toFixed(2)}%`);

  // Update allLoaded based on loadedAudioStatus
  allLoaded = Object.values(loadedAudioStatus).length === totalAudios;

  return { allLoaded, averageAudioPercentage };
}

function preloader() {
  playThemeMusic("miiTheme");
  const button = document.getElementById("startButton");
  button.innerHTML = "0% Loaded";
  button.disabled = true;

  const video = document.getElementById("rickRollVideo");
  const startTime = performance.now();
  video.style.display = "none"; // Hide the video from view

  video.preload = "auto";
  video.muted = true; // Mute the video to avoid sound before user interaction
  video.play(); // Start playing the video to force buffering

  // Monitor the buffering progress
  const checkBuffering = setInterval(() => {
    const buffered = video.buffered;
    const duration = video.duration;

    const skipButton = document.getElementById("skipButton");
    setTimeout(() => {
      skipButton.style.display = "inline";
    }, 15000); //TIMER FOR HOW LONG YOU WANT THE TIMER TO BE

    let videoLoadedPercentage = 0;
    if (buffered.length > 0) {
      const loaded = buffered.end(0); // Get how much of the video is buffered
      videoLoadedPercentage = (loaded / duration) * 100; // Calculate video loading percentage
      console.log(`Buffered: ${videoLoadedPercentage.toFixed(2)}%`);
    }

    // Get audio loading status
    const { allLoaded, averageAudioPercentage } = audioLoaded();
    let totalLoadedPercentage =
      (videoLoadedPercentage + averageAudioPercentage) / 2; // Combine percentages

    // Update button percentage
    button.innerHTML = `${totalLoadedPercentage.toFixed(2)}% Loaded`;

    // When both video and audio are fully loaded
    if (videoLoadedPercentage >= 100 && allLoaded) {
      video.pause(); // Pause the video after it's fully buffered
      video.currentTime = 0; // Reset the playback position to the start
      video.muted = false; // Restore the audio state

      const endTime = performance.now();
      const loadTime = (endTime - startTime) / 1000;
      console.log(`Preloading completed in ${loadTime.toFixed(2)} seconds`);

      // Update the button to allow starting the main content
      button.onclick = homePage;
      button.innerHTML = `100% Loaded`;
      button.disabled = false;
      button.innerHTML = "Press To Start <span>&#127884;</span>";

      clearInterval(checkBuffering); // Stop checking when the video is fully buffered
    }
  }, 500); // Check every 500 milliseconds
}

function runningTime() {
  const totalTime = (challengeEnd - challengeStart) / 1000; // Convert milliseconds to seconds

  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = Math.floor(totalTime % 60);

  // Format the output to always show two digits for minutes and seconds
  const formattedTime = `${hours}hours ${String(minutes).padStart(
    2,
    "0"
  )}minutes ${String(seconds).padStart(2, "0")}seconds`;

  console.log("Total running time:", formattedTime);
  return formattedTime;
}

function challengeStartTimer() {
  challengeStart = Date.now();
  console.log("Challenge started at: " + new Date(challengeStart));
}

function challengeEndTimer() {
  challengeEnd = Date.now();
  timerRunning = false; // Set the timer running flag to false
  const totalTime = runningTime(); // Optionally get the total running time
  console.log("Challenge ended at: " + new Date(challengeEnd));
  console.log(`Total Time: ${totalTime}`);
}

function updateChallengeTimer() {
  const indexPage = document.getElementById("indexPage");
  const loadingPage = document.getElementById("loadingPage");

  const indexPageVisible = getComputedStyle(indexPage).display === "block";
  const loadingPageVisible = getComputedStyle(loadingPage).display === "block";

  if (!indexPageVisible && !loadingPageVisible && timerRunning) {
    document.getElementById("timer").style.display = "inline-block";
    const now = new Date();
    const elapsed = Math.floor((now - challengeStart) / 1000); // Time elapsed in seconds
    const hours = Math.floor(elapsed / 3600);
    const minutes = Math.floor((elapsed % 3600) / 60);
    const seconds = elapsed % 60;
    const formattedTime = `${hours}h ${String(minutes).padStart(
      2,
      "0"
    )}m ${String(seconds).padStart(2, "0")}s`;

    document.getElementById("timer").innerText = formattedTime;
  } else {
    document.getElementById("timer").style.display = "none";
  }

  setTimeout(updateChallengeTimer, 1000); // Continue the loop
}

function getRandomErrorMessage() {
  const randomIndex = Math.floor(Math.random() * errorMessages.length);
  return errorMessages[randomIndex];
}

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
  const themeMusicOptions = [
    "themeMusic",
    "themeMusic1",
    "themeMusic2",
    "miiTheme",
    "miiShop",
  ];
  const randomThemeMusicElement =
    themeMusicOptions[Math.floor(Math.random() * themeMusicOptions.length)];
  playThemeMusic(randomThemeMusicElement);
}

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
    audioElement.muted = false;
    audioElement.play(); // Play the selected audio
    currentThemeMusicId = audioFile; // Store the new audio's ID
  } else {
    console.error(`Audio file with ID ${audioFile} not found`);
  }
}

function showAdminTest() {
  const adminTestElement = document.getElementById("adminTest");
  const adminButton = document.getElementById("adminButton");
  if (
    adminTestElement.style.display === "none" ||
    adminTestElement.style.display === ""
  ) {
    adminTestElement.style.display = "block"; // Show the element
    adminButton.style.color = "#12E2DC";
  } else {
    adminTestElement.style.display = "none"; // Hide the element
    adminButton.style.color = "#333";
  }
}

function playRickRoll() {
  const video = document.getElementById("rickRollVideo");
  const playButton = document.getElementById("playButton");
  const results = document.getElementById("resultsContent");

  const pageBackground = teamColors[(document.querySelector("#teamSelection").value)]
  document.getElementById("rickRollPage").style.display = "block";
  document.querySelector(".mainBody").style.backgroundColor = pageBackground;
  playButton.style.display = "none";
  
  video.style.display = "block";
  videoContainer.style.display = "flex";
  
  // Check if the video is fully buffered
  const isBuffered = video.buffered.length > 0 && video.buffered.end(0) >= video.duration;

  if (isBuffered) {
    document.querySelector(".mainBody").style.backgroundColor = "black";
    video.muted = false;
    video.play();

    video.addEventListener("ended", function () {
      video.style.display = "none";
      videoContainer.style.display = "none";
    });
  }

  // Always display the results regardless of whether the video plays
  results.style.display = "grid";
  document.querySelector(".mainBody").style.backgroundColor = pageBackground;
  document.getElementById("rickrollButton").onclick = function () {
    returnToIndex();
  };
  document.getElementById("rickrollButton").innerHTML = "Back";


  let headerLine = `<div class="resultHeaders">AMAZING RACE 2024 Results!
                      <div id="smallHeaders">Make sure to screenshot your results!</div>`;
                      
                      // <div id="smallHeaders">Below are your challenge times!</div>

  let resultsContent = ``;

  roundTimers.forEach((time, index) => {
    resultsContent += `<div class="challenges">${visitedChallenges[index]}: ${time}</div>`;
  });

  results.innerHTML = headerLine += resultsContent + '</div>';
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
      console.log("Theme Start Time:", `${teamThemeMusic[value]}`);
    }
    document.querySelector(".dropdown-content").classList.remove("show");
    document.getElementById("errorMessage").textContent = "";
  });
});

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
      const nextPage = document.getElementById(userData.page);
      nextPage.style.display = "block";

      playThemeMusic("unlockSound");

      console.log("Round Timers: ", roundTimers);
      console.log("Visited Pages: ", visitedChallenges);
      // When handling the login form submission or navigation to a new page
      if (
        !visitedChallenges.includes(userData.page) &&
        userData.page !== "indexPage"
      ) {
        if (timerRunning) {
          challengeEndTimer(); // End previous timer if there is one
        }

        // Check if the current page is a challenge page
        if (isChallengePage(userData.page)) {
          visitedChallenges.push(userData.page); // Mark challenge as visited
          challengeStartTimer(); // Start new timer for this challenge
        }
      }

      document.getElementById("iphoneline").style.display = "none";
      const linkElement = document.getElementById("dynamic-css");
      linkElement.href = `/GractionCamp2024/${userData.css}`;
      console.log("User Data / CSS is: ", userData.css);
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
    document.getElementById("errorMessage").textContent =
      getRandomErrorMessage();
  }
});

let challengeStart = null; // Start time for the current challenge
let challengeEnd = null; // End time for the current challenge
let timerRunning = false; // Flag to indicate if a timer is running
let roundTimers = []; // Store total times between challenges
let visitedChallenges = []; // Array to track visited challenges


function runningTime() {
  const totalTime = (challengeEnd - challengeStart) / 1000; // Convert to seconds
  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = Math.floor(totalTime % 60);

  // Format the output to always show two digits for minutes and seconds
  const formattedTime = `${hours}h ${String(minutes).padStart(2,"0")}m ${String(seconds).padStart(2, "0")}s`;
  return formattedTime;
}

function challengeStartTimer() {
  challengeStart = Date.now();
  timerRunning = true;
  updateChallengeTimer();
  console.log("Challenge started at: " + new Date(challengeStart));
}

function challengeEndTimer() {
  challengeEnd = Date.now();
  const totalTime = runningTime();
  roundTimers.push(totalTime); // Append time to roundTimers
  console.log("Challenge ended at: " + new Date(challengeEnd));
  console.log(`Total Time: ${totalTime}`);
}

function updateChallengeTimer() {

  if(timerRunning === true){
    const fixedTimer = document.getElementById("fixedTimer");
    const elapsed = Math.floor((Date.now() - challengeStart) / 1000); // Time elapsed in seconds
    const hours = Math.floor(elapsed / 3600);
    const minutes = Math.floor((elapsed % 3600) / 60);
    const seconds = elapsed % 60;
    const formattedTime = `${hours}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
    fixedTimer.innerText = formattedTime; // Display the timer text
    setTimeout(updateChallengeTimer, 1000); // Continue the loop
  }
}


// Function to check if the page is a challenge page
function isChallengePage(page) {
  return page.startsWith("Challenge");
}

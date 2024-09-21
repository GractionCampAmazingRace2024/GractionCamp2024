function returnToIndex() {
  const themeMusic = document.getElementById('themeMusic');

  // Attempt to play the music
  themeMusic.play().then(() => {
      // Redirect after a short delay
      setTimeout(() => {
          window.location.replace("/GractionCamp2024/homepage.html");
      }, 1000); // Adjust the delay if needed
  }).catch(error => {
      console.error("Failed to play music:", error);
      // Redirect immediately if playback fails
      window.location.replace("/GractionCamp2024/homepage.html");
  });
}
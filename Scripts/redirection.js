function returnToIndex() {
  const themeMusic = document.getElementById('themeMusic');
  themeMusic.play().then(() => {
      // Wait for the music to start playing, then redirect
      setTimeout(() => {
          window.location.replace("/GractionCamp2024/homepage.html");
      }, 1000); // Adjust the timeout duration as needed
  }).catch(error => {
      console.error("Failed to play music:", error);
      // Redirect immediately if playback fails
      window.location.replace("/GractionCamp2024/homepage.html");
  });
}

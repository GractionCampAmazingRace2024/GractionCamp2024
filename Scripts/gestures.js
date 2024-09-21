document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
  });

  document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.custom-dropdown');

    dropdown.addEventListener('mousedown', function (e) {
      e.preventDefault(); // Prevent default behavior like selection
    });
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    // Disable gesture zoom
    document.addEventListener(
      "gesturestart",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
  });
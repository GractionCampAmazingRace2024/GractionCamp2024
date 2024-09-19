
document.addEventListener("DOMContentLoaded", function () {
    // Disable zooming with multiple touches
    document.addEventListener(
        "touchstart",
        function (e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        },
        { passive: false }
    );
  
    // Disable gesture zoom
    document.addEventListener(
        "gesturestart",
        function (e) {
            e.preventDefault();
        },
        { passive: false }
    );
  });
  
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
  });
  


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

    if (username === 'green' && password === 'green') {
        
        window.location.href = 'Pages/green.html'; // Redirect to dashboard
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }

    if (username === 'purple' && password === 'purple') {
        
        window.location.href = 'Pages/purple.html'; // Redirect to dashboard
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
    
	if (username === 'blue' && password === 'blue') {
        
        window.location.href = 'Pages/blue.html'; // Redirect to dashboard
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }

    if (username === 'orange' && password === 'orange') {
        
        window.location.href = 'Pages/orange.html'; // Redirect to dashboard
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
    if (username === 'yellow' && password === 'yellow') {
        
        window.location.href = 'Pages/yellow.html'; // Redirect to dashboard
    } else {
        document.getElementById('errorMessage').textContent = 'Wrong Answer To Clue';
    }

	if (username === 'yellow' && password === 'clue') {
        
        window.location.href = 'Pages/yellowclue1.html'; // Redirect to dashboard
    } else {
        document.getElementById('errorMessage').textContent = 'Wrong Answer To Clue';
    }






});

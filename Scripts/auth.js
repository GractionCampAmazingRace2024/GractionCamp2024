<script src="/GractionCamp2024/Scripts/users.js"></script>


document.addEventListener('DOMContentLoaded', function() {
    const authenticatedUser = sessionStorage.getItem('authenticatedUser');
    const authenticatedPassword = sessionStorage.getItem('authenticatedPassword');

    if (!authenticatedUser || !userCredentials[authenticatedUser]) {
        window.location.href = '/GractionCamp2024/index.html';
        return;
    }

    const credentials = userCredentials[authenticatedUser];
    const userData = credentials.find(cred => cred.password === authenticatedPassword);

    if (!userData) {
        window.location.href = '/GractionCamp2024/index.html';
    }
});
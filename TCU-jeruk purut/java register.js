document.getElementById('register').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Validate password match
    if (password !== confirmPassword) {
        document.getElementById('pesan').innerHTML = 'Passwords do not match!';
        return;
    }
    
    // Get existing users from localStorage or initialize empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username already exists
    if (users.some(user => user.username === username)) {
        document.getElementById('pesan').innerHTML = 'Username already exists!';
        return;
    }
    
    // Create new user object
    const newUser = {
        fullname: fullname,
        username: username,
        email: email,
        password: password
    };
    
    // Add new user to users array
    users.push(newUser);
    
    // Save updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Show success message and redirect to login page
    document.getElementById('pesan').innerHTML = 'Registration successful! Redirecting to login page...';
    setTimeout(() => {
        window.location.href = 'Login.html';
    }, 2000);
}); 
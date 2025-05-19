const loginForm = document.getElementById('login'); // Get the form element by ID
const usernameInput = document.getElementById('username'); 
const passwordInput = document.getElementById('password');  
const pesan = document.getElementById('pesan'); 

let attemptCount = 0; 

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user with matching username and password
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Store current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Show success message and redirect to TCU Remake Main Page
        pesan.innerHTML = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'TCU-remake-main-page.html';
        }, 1000);
    } else {
        attemptCount++; 
       
        if (attemptCount >= 3) {
            pesan.innerHTML = 'Percobaan telah mencapai batas, coba lain kali.';
            pesan.style.color = 'red';
            loginForm.querySelector('button[type="submit"]').disabled = true;
        } else {
          
            const remainingAttempts = 3 - attemptCount;
            pesan.innerHTML = `Ada kesalahan, tersisa : ${remainingAttempts} percobaan`;
            pesan.style.color = 'orange';
        }
    }
});

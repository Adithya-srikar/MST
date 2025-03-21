document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically send these credentials to your server
    console.log('Login attempt:', { email, password });
    
    // Add login animation
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.style.width = button.offsetWidth + 'px';
    button.textContent = 'Logging in...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
});

// Add subtle animation to the login card
document.querySelector('.login-card').style.opacity = '0';
document.querySelector('.login-card').style.transform = 'translateY(20px)';

requestAnimationFrame(() => {
    document.querySelector('.login-card').style.transition = 'all 0.6s ease';
    document.querySelector('.login-card').style.opacity = '1';
    document.querySelector('.login-card').style.transform = 'translateY(0)';
});
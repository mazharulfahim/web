// JavaScript for the profile page

document.addEventListener('DOMContentLoaded', function() {
    // Popup functionality
    const aboutMeBtn = document.querySelector('.about-me-btn');
    const popup = document.getElementById('aboutMePopup');
    const closeBtn = document.querySelector('.close-btn');

    aboutMeBtn.addEventListener('click', () => {
        popup.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    // Close popup when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });
    // You can add interactive elements here
    
    // Example: Change profile information
    const profileInfo = {
        name: "Fahim"
    };
    
    // Update profile information
    document.querySelector('.name').textContent = profileInfo.name;
    
    // Add event listeners to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add animation effect when button is clicked
            this.classList.add('btn-active');
            
            // Remove the animation class after animation completes
            setTimeout(() => {
                this.classList.remove('btn-active');
            }, 300);
        });
    });
});
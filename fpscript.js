// Get references to buttons and trash can
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const trashCan = document.querySelector('.trash-can');
// Get reference to the audio element
const backgroundMusic = document.getElementById('backgroundMusic');

// Function to pause the background music
function pauseBackgroundMusic() {
    backgroundMusic.pause();
}

// Function to play the background music
function playBackgroundMusic() {
    backgroundMusic.play();
}

// Add event listeners to buttons
yesBtn.addEventListener('click', function() {
    alert("Look Here!"); // Replace this with your preferred action
});

noBtn.addEventListener('click', function() {
    // Apply animation to the "No" button
    noBtn.style.animation = 'flyToTrashCan 1.5s forwards';

    // After the animation ends, hide the button
    noBtn.addEventListener('animationend', function() {
        noBtn.style.display = 'none';
    });

    alert("Stop Playing Baby."); // Replace this with your preferred action
});

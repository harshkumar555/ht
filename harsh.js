// Select all the radio buttons for the star rating
const stars = document.querySelectorAll('.star-rating input[type="radio"]');
const ratingOutput = document.getElementById('user-rating');

// Add event listeners to all the radio buttons
stars.forEach(star => {
    star.addEventListener('change', () => {
        const ratingValue = star.value; // Get the value of the selected star
        ratingOutput.textContent = ratingValue; // Display the rating
    });
});

const squares = document.querySelectorAll('.square');

// Generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Assign random colors to all squares
function randomizeColors() {
    squares.forEach(sq => {
        sq.style.backgroundColor = getRandomColor();
    });
}

// Handle square click
squares.forEach(sq => {
    sq.addEventListener('click', function () {
        const selectedColor = this.style.backgroundColor;

        // Set all squares to the clicked color
        squares.forEach(s => {
            s.style.backgroundColor = selectedColor;
        });
    });
});

// Initialize on load
randomizeColors();

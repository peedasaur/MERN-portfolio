const squares = document.querySelectorAll('.square');


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function randomizeColors() {
    squares.forEach(sq => {
        sq.style.backgroundColor = getRandomColor();
    });
}


squares.forEach(sq => {
    sq.addEventListener('click', function () {
        const selectedColor = this.style.backgroundColor;

        
        squares.forEach(s => {
            s.style.backgroundColor = selectedColor;
        });
    });
});


randomizeColors();


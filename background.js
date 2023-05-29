function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setDynamicGradient() {
    const element = document.getElementById('dynamic-gradient');
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    element.style.background = 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';
}

setInterval(setDynamicGradient, 2000); // Change the gradient every 2 seconds

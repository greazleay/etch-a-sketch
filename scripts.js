// Function controlling button reset

function colorReset() {
    const gridItems = document.querySelectorAll('.item_mod');
    gridItems.forEach(e => {
        e.setAttribute('class', 'item');
    });
};

button.addEventListener('click', colorReset)

// Function controlling the slider

const adjustDivs = () => { 
    output.textContent = slider.value;
    // addDiv(Math.pow(parseInt(output.textContent), 2))

    
};

slider.addEventListener('input', adjustDivs);

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    color.addEventListener('click', (e) => {
        // e.target.value = `rgb(${r}, ${g}, ${b})`
    })
}
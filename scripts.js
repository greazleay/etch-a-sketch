// Function controlling button reset

function colorReset() {
    const gridItems = document.querySelectorAll('.item');
    gridItems.forEach(e => {
        e.setAttribute('style', `background-color: rgb(0, 60, 255)`);
    });
    color.defaultValue = "";
};

button.addEventListener('click', colorReset)

// Function controlling the slider

function adjustDivs() { 
    output.textContent = slider.value;
    grid.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
    
    let sliderSquare = Math.pow(slider.value, 2);
    let add = sliderSquare - grid.childElementCount;
    let sub = grid.childElementCount - sliderSquare;
    
    switch (true) {
        case grid.childElementCount < sliderSquare:
            gridItemAdder(add)
            break;
        case grid.childElementCount > slider.valueAsNumber:
            gridItemRemover(sub)
        default:
            break;
    }
};

slider.addEventListener('input', adjustDivs);

// Color Picker

color.addEventListener('change', () => { color.defaultValue = "#000000" })

// Generating Random Colors

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

random.addEventListener('click', () => { color.defaultValue = "1"})


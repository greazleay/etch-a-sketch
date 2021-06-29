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

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    color.addEventListener('click', (e) => {
        // e.target.value = `rgb(${r}, ${g}, ${b})`
    })
}


// Function controlling button reset

const colorReset = () => {
    const divBlocks = document.querySelectorAll('.item_mod');
    divBlocks.forEach(div => {
        div.setAttribute('class', 'item');
    });
};

button.addEventListener('click', colorReset)

// Function controlling the slider

const adjustDivs = () => { 
    output.textContent = slider.value;
    // addDiv(Math.pow(parseInt(output.textContent), 2))

    
};

slider.addEventListener('input', adjustDivs);
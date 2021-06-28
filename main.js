const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);



// Function to load scripts

const loadJS = (url) => {
    let script = document.createElement('script');
    script.src = url;
    body.appendChild(script)
};

loadJS('./scripts.js')

const h1 = document.createElement('h1');
h1.textContent = `Etch A Sketch`
container.appendChild(h1);

// Add Grid Controls

const controls = document.createElement('div');
controls.classList.add('controls');
container.appendChild(controls);

// Creates Slider and it's output

const label = document.createElement('label');
label.setAttribute('for', 'slider');
label.textContent = `Grid size`;
controls.appendChild(label);

const slider = document.createElement('input');
slider.setAttribute('type', 'range');
slider.setAttribute('name', 'slider');
slider.setAttribute('min', '1');
slider.setAttribute('max', '100');
slider.setAttribute('step', '1');
slider.setAttribute('value', '16');
controls.appendChild(slider);

const output = document.createElement('output');
output.classList.add('slider-output');
output.setAttribute('for', 'slider');
output.textContent = slider.value;
controls.appendChild(output);

// Color Picker control

const colorLabel = document.createElement('label');
colorLabel.setAttribute('for', 'color');
colorLabel.textContent = `Pick a color:`;
controls.appendChild(colorLabel);

const color = document.createElement('input');
color.setAttribute('type', 'color');
color.setAttribute('name', 'color');
controls.appendChild(color);

// Creates Reset Button

const button = document.createElement('button');
button.classList.add('btn');
button.textContent = `Reset`
controls.appendChild(button);

// Div container and square divs

const squares = document.createElement('div');
squares.classList.add('squares');
container.appendChild(squares);



// Function below creates a single div element

function divBlock() {
    let item = document.createElement('div');
    item.classList.add('item');
    item.addEventListener('mouseover', () => {
        item.setAttribute('class', 'item_mod');
    });
    squares.appendChild(item);
};

// Function below renders the div multiple times

function addDiv(num) {
    for (let i = 0; i < num; i++) {
        divBlock();
    }
}

function removeDiv() {
    squares.removeChild(squares.firstChild);   
}

function remover(num) {
    for (let i = 0; i < num; i++) {
        removeDiv();
    }
}

// let count = Math.pow(slider.valueAsNumber, 2)
let min = slider.valueAsNumber  - parseInt(slider.min) + 1;
let max = parseInt(slider.max) - slider.valueAsNumber;

// addDiv(Math.pow(min, 2));
addDiv(400)



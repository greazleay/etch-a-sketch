const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

// Function to load scripts

function loadJS(url) {
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
slider.setAttribute('min', '0');
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

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);



// Logic for adding and removing grid items

function gridItem() { 
    let item = document.createElement('div');
    item.classList.add('item');
    item.addEventListener('mouseover', () => {
        item.setAttribute('class', 'item item_mod');
    });
    grid.appendChild(item);
};

function removeGridItem(num) {
    for (let i = 0; i < num; i++) {
        gridItemRemover()
    }
}

// Loops for manipulating grid items multiple times

function addGridItem(num) {
    for (let i = 0; i < num; i++) {
        gridItem();
    }
}

function gridItemRemover() {
    let item = document.querySelector('.item');
    let grid = document.querySelector('.grid');
    grid.removeChild(item)
}

addGridItem(256)



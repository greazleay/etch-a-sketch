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

// Random Color Button

const random = document.createElement('button');
random.classList.add('btn');
random.textContent = `RGB`
controls.appendChild(random);

// Color Picker control

const colorLabel = document.createElement('label');
colorLabel.setAttribute('for', 'color');
colorLabel.textContent = `Change color:`;
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

// Grid Container

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

// Logic for adding and removing grid items

function addGridItem() { 
    let item = document.createElement('div');
    item.classList.add('item');
    item.addEventListener('mouseover', () => {
        switch (color.defaultValue) {
            case "":
                item.setAttribute('style', `background-color: blueviolet`);
                break;
            case "1":
                item.setAttribute('style', `background-color: ${randomColor()}`);
                break;
            default:
                item.setAttribute('style', `background-color: ${color.value}`)
                break;
        }
    });
    grid.appendChild(item);
};

function removeGridItem() {
    let item = document.querySelector('.item');
    let grid = document.querySelector('.grid');
    grid.removeChild(item)
}

// Loops for manipulating grid items multiple times

function gridItemAdder(num) {
    for (let i = 0; i < num; i++) {
        addGridItem();
    }
}

function gridItemRemover(num) {
    for (let i = 0; i < num; i++) {
        removeGridItem()
    }
}

gridItemAdder(256)



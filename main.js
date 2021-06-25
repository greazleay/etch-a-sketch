const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

// Helper function to load scripts

const loadJS = (url) => {
    let script = document.createElement('script');
    script.src = url;
    body.appendChild(script)
};

loadJS('./scripts.js')

const squares = document.createElement('div');
squares.classList.add('squares');
container.appendChild(squares);

// Function below creates a single div element

const singleDiv = () => {
    let item = document.createElement('div');
    item.classList.add('item');
    item.addEventListener('mouseover', () => {
        // e.target.setAttribute('style', 'backgroundColor: blue')
        item.style.backgroundColor = 'white'
    });
    squares.appendChild(item);
};

// Function below renders the div multiple times

const divMultiplier = (num) => {
    for (let i = 0; i < num; i++) {
        singleDiv();
    }
}

divMultiplier(256);

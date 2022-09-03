const gridWidth = 960;

const promptGridSize = document.querySelector('#gridSize');

promptGridSize.addEventListener('click', () => {
    let gridSize = prompt('Specify a grid size:');
    if (gridSize > 100) {
        console.log("Value too large, enter a smaller value (less than 100).");
        gridSize = 0;
    }
    generateGrid(gridSize);
})

function generateGrid(gridSize) {
    grid.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.toggle('cell');
            let divSize = `${Math.floor(gridWidth/gridSize)}px`;
            cell.style.width = divSize;
            cell.style.height = divSize;
            console.log(`gridWidth: ${gridWidth} gridSize: ${gridSize} divSize: ${divSize}`);
            grid.appendChild(cell);
            if (i > 0 && j == 0) {
                cell.style.clear = 'left';
            }
        }
    }
    const allCells = document.querySelectorAll('.cell');

    allCells.forEach((active) => {
        active.addEventListener('mouseover', () => {
        //active.classList.add('alpha-0');
        //genBackgroundColor(active);
        gradedShading(active);
        
        });
    });
}

function genBackgroundColor(cell) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    color = `rgb(${R}, ${G}, ${B})`;
    cell.style.backgroundColor = color;
}

function gradedShading(cell) {
    if (window.getComputedStyle(cell).getPropertyValue('--state') == 0) {
        cell.classList.add('alpha-1');
        cell.style.setProperty("--state", 1);
    }
    else if (cell.classList.contains('alpha-1')) {
        cell.classList.replace('alpha-1', 'alpha-2');
    }
    else if (cell.classList.contains('alpha-2')) {
        cell.classList.replace('alpha-2', 'alpha-3');
    }
    else if (cell.classList.contains('alpha-3')) {
        cell.classList.replace('alpha-3', 'alpha-4');
    }
    else if (cell.classList.contains('alpha-4')) {
        cell.classList.replace('alpha-4', 'alpha-5');
    }
    else if (cell.classList.contains('alpha-5')) {
        cell.classList.replace('alpha-5', 'alpha-6');
    }
    else if (cell.classList.contains('alpha-6')) {
        cell.classList.replace('alpha-6', 'alpha-7');
    }
    else if (cell.classList.contains('alpha-7')) {
        cell.classList.replace('alpha-7', 'alpha-8');
    }
    else if (cell.classList.contains('alpha-8')) {
        cell.classList.replace('alpha-8', 'alpha-9');
    }
    else if (cell.classList.contains('alpha-9')) {
        cell.classList.replace('alpha-9', 'alpha-10');
    }

}

/* if ( $('li.level1.item101').hasClass('active') ) {
    $('#main').addClass('woodwork');
  } */
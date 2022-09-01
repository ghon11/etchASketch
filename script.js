const gridWidth = 960;

const promptGridSize = document.querySelector('#gridSize');

promptGridSize.addEventListener('click', () => {
    let gridSize = prompt('Specify a grid size:');
    if (gridSize < 100) {
        console.log("Value too large, enter a smaller value (less than 100).");
        break;
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
        active.classList.add('active');
        });
    });
}


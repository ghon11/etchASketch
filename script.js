const gridSize = document.querySelector('#gridSize');

gridSize.addEventListener('click', () => {
    let gridValue = prompt('Specify a grid size:');
    generateGrid(gridValue);
})

function generateGrid(gridValue) {
    for (let i = 0; i < gridValue; i++) {
        for (let j = 0; j < gridValue; j++) {
            const cell = document.createElement('div');
            cell.classList.toggle('cell');
            grid.appendChild(cell);
            if (i > 0 && j == 0) {
                cell.style.clear = 'left';
            }
        }
    }
}

const allCells = document.querySelectorAll('.cell')

allCells.forEach((active) => {
    active.addEventListener('mouseover', () => {
        active.classList.add('active');
    });
});
const gridContainer = document.getElementById('gridContainer');
const gridSizeInput = document.getElementById('gridSize');

function generateGrid() {
    let gridSize = parseInt(gridSizeInput.value);
    gridSize = Math.min(gridSize, 100);
    clearGrid();
    createGrid(gridSize); 
}

function createGrid(gridSize) { 
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseenter', function() {
            this.classList.add('black-grid-item');
        });
        gridContainer.appendChild(gridItem);
    }
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

generateGrid();

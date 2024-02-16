const container = document.querySelector('#main');

function createGrid(gridSize) {
    //flex row div
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add('row-wrapper');
    rowWrapper.setAttribute('style', 'max-width:'+ gridSize*55 +'px;');    

    for (let i = 0; i < (gridSize*gridSize); i++){
        const div = document.createElement('div');
        div.classList.add('square-div');
        div.addEventListener('mouseover', function (e) {
            e.target.classList.toggle('active');
        });
        rowWrapper.appendChild(div);
        
    }
    container.appendChild(rowWrapper);
}

const newGridBtn = document.querySelector('#newGrid');
newGridBtn.addEventListener('click', function (e) {
    container.removeChild(container.lastChild);
    let gridSize = prompt("Enter a number for the new grid size");
    //container.removeChild();
    createGrid(gridSize);
  });

createGrid(16);

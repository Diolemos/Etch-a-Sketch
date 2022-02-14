const container = document.querySelector('.container');
// const buttonsContainer = document.querySelector('buttons');
let square = document.createElement("div");
square.classList.add('square');
let resetBtn = document.querySelector('.reset');


function populateContainer16() {
    container.style.gridTemplateColumns = "repeat(16,auto)";
    container.style.gridTemplateRows = "repeat(16,auto)";
    for (let i = 1; i <= (16 * 16); i++) {

        let square = document.createElement("div");
        square.classList.add('square');
        container.appendChild(square)

    }

}

function draw() {
    let allSquares = document.querySelectorAll('.square');
    allSquares.forEach((elem) => {
        elem.addEventListener('mouseenter', function () {
            this.style.backgroundColor = "black"
        })
    })
}



resetBtn.addEventListener('click', function updateboard() {

    let NumOfColsAndRows = +prompt('Drawing Board new size. Please indicate a number between 4 and 100');

    if (NumOfColsAndRows <= 100) {
        let allSquares = document.querySelectorAll('.square');
        for (i = 0; i < allSquares.length; i++) {
            allSquares[i].remove();
        }

        container.style.gridTemplateColumns = `repeat(${NumOfColsAndRows},auto)`;
        container.style.gridTemplateRows = `repeat(${NumOfColsAndRows},auto)`;
        for (let i = 1; i <= (NumOfColsAndRows * NumOfColsAndRows); i++) {

            let square = document.createElement("div");
            square.classList.add('square');
            container.appendChild(square)
        }
        draw()
    } else {
        alert('Sorry, Please select a number up to 100')
    }

})






// container.style.gridTemplateColumns = columns;
// container.style.gridTemplateRows = rows;


// function populateContainer() {


// }




populateContainer16()
draw()
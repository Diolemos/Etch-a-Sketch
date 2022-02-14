const container = document.querySelector('.container');
// const buttonsContainer = document.querySelector('buttons');
let square = document.createElement("div");
square.classList.add('square');


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










// container.style.gridTemplateColumns = columns;
// container.style.gridTemplateRows = rows;


// function populateContainer() {


// }




populateContainer16()
draw()
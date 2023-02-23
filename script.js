
// Setting up variables to interact with the DOM

const grid = document.querySelector(".grid");
const rangeInput = document.getElementById("range");
let gridColor = blackGrids;

const rangeText = document.querySelector(".range");
const showGrid = document.querySelector(".show-grid");

let i = 0;

// Function to set up initial grid value (16x16)

function setInitialGrid() {
    while (i < (16 * 16)) {
        const gridElements = document.createElement("div");
        gridElements.classList.add("grid-element")
        grid.append(gridElements);
        grid.setAttribute("style", "grid-template-columns: repeat(16, 1fr)")
        i++;
        rangeInput.value = 16;
    }
    i = 0;
}

setInitialGrid()



// Function to update grid template

function updateGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    while (i < (rangeInput.value * rangeInput.value)) {
        const gridElements = document.createElement("div");
        gridElements.classList.add("grid-element")
        grid.append(gridElements);
        grid.setAttribute("style", `grid-template-columns: repeat(${rangeInput.value}, 1fr)`)
        i++;
    }
    i = 0;
    blackGrids();
    showGrid.textContent = "Show Grid"
    rangeText.textContent = `${rangeInput.value} x ${rangeInput.value}`
}

rangeInput.addEventListener("input", updateGrid)

const blackDiv = (element) => {
    element.target.style.backgroundColor = "black";
}

function blackGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
            grid.childNodes[i].addEventListener("mousemove", blackDiv)
    }
}

function removeBlackGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
        grid.childNodes[i].removeEventListener("mousemove", blackDiv)
}
}

// Executing program

const gridSquare = document.querySelector(".grid-element");

function blackGrids() {
    grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mousedown", (event) => {
        event.preventDefault();
        blackGrid();
    })
})

grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mouseup", () => {
        removeBlackGrid();
    })
})
}

blackGrids()

// Creating function to clear grid

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    for (let i = 0; i < grid.childNodes.length; i++) {
        if (grid.childNodes[i].style != undefined) {
            grid.childNodes[i].style.backgroundColor = "white"
        }
    }
})

// Creating a function to show or hide black grid

const showGridFunction = () => {
    showGrid.addEventListener("click", (button) => {
    if (button.target.textContent.includes("Show")) {
        button.target.textContent = "Hide Grid";
        for (let i = 0; i < grid.childNodes.length; i++) {
            if (grid.childNodes[i].classList != undefined) {
                grid.childNodes[i].classList.add("black-grid") 
                }
            }
    } else if (button.target.textContent.includes("Hide")) {
        button.target.textContent = "Show Grid";
        for (let i = 0; i < grid.childNodes.length; i++) {
            if (grid.childNodes[i].classList != undefined) {
                grid.childNodes[i].classList.remove("black-grid")
                }   
            }
    }
})
}

showGridFunction();

// Creating a function to randomize the color of the trail

// Creating a function to use the eraser

// Creating a function to use the color









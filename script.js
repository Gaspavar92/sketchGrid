
// Setting up variables to interact with the DOM

const grid = document.querySelector(".grid");
const rangeInput = document.getElementById("range");

const rangeText = document.querySelector(".range");
const showGrid = document.querySelector(".show-grid");
const gridSquare = document.querySelector(".grid-element");
const rainbowButton = document.querySelector(".rainbow")


let currentMode;

const changeMode = () => {
    if (currentMode == blackGrids) {
        blackGrids();
    }
    if (currentMode == rainbowGrids) {
        rainbowGrids();
    }
}

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
    blackGrids();
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
    changeMode()
    showGrid.textContent = "Show Grid"
    rangeText.textContent = `${rangeInput.value} x ${rangeInput.value}`
}

rangeInput.addEventListener("input", updateGrid)

const blackDiv = (element) => {
    element.target.style.backgroundColor = "black";
}

function blackGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
            grid.childNodes[i].addEventListener("mouseover", blackDiv)
    }
}

function removeBlackGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
        grid.childNodes[i].removeEventListener("mouseover", blackDiv)
    }
}

// Executing program

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

const rainbowDiv = (element) => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    element.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function rainbowGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
            grid.childNodes[i].addEventListener("mouseover", rainbowDiv)
    }
}

function removeRainbowGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
        grid.childNodes[i].removeEventListener("mouseover", rainbowDiv)
    }
}

function rainbowGrids() {
    grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mousedown", (event) => {
        event.preventDefault();
        rainbowGrid();
    })
})

grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mouseup", () => {
        removeRainbowGrid();
    })
})
}

rainbowButton.addEventListener("click", (button) => {
    if (button.target.textContent == "Black Mode") {
        currentMode = blackGrids;
        console.log(currentMode)
        changeMode();
        button.target.textContent = "Rainbow Mode"
    } else if (button.target.textContent == "Rainbow Mode") {
        currentMode = rainbowGrids;
        console.log(currentMode)
        changeMode();
        button.target.textContent = "Black Mode"
    }
})

// Creating a function to use the eraser

// Creating a function to use the color

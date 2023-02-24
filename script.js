
// Setting up variables to interact with the DOM

const grid = document.querySelector(".grid");
const rangeInput = document.getElementById("range");

const rangeText = document.querySelector(".range");
const showGrid = document.querySelector(".show-grid");
const gridSquare = document.querySelector(".grid-element");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");
const colorButton = document.querySelector(".color");

let currentMode;

const changeMode = () => {
    if (currentMode == blackGrids) {
        blackGrids();
        removeRainbowGrids();
        //to complete for color mode
    } else if (currentMode == colorMode) {
        removeRainbowGrids();
        removeBlackGrids();
        // to complete for color mode
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
    blackGrids();
    rainbowButton.textContent = "Rainbow Mode"
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

function turnOnBlackGrid(event) {
    event.preventDefault();
    blackGrid();
}

function blackGrids() {
    grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mousedown", turnOnBlackGrid)
})

grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mouseup", removeBlackGrid)
})
}

function removeBlackGrids() {
    grid.childNodes.forEach((gridElements) => {
        gridElements.removeEventListener("mousedown", turnOnBlackGrid)
    })
    
    grid.childNodes.forEach((gridElements) => {
        gridElements.removeEventListener("mouseup", removeBlackGrid)
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

function turnOnRainbowGrid(event) {
    event.preventDefault();
    rainbowGrid();
}

function rainbowGrids() {
    grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mousedown", turnOnRainbowGrid)
})

grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mouseup", removeRainbowGrid)
})
}

function removeRainbowGrids() {
    grid.childNodes.forEach((gridElements) => {
    gridElements.removeEventListener("mousedown", turnOnRainbowGrid)
})

grid.childNodes.forEach((gridElements) => {
    gridElements.removeEventListener("mouseup", removeRainbowGrid)
})
}


rainbowButton.addEventListener("click", (button) => {
    if (button.target.textContent.includes("Rainbow")) {
        button.target.textContent = "Black Mode"
        removeBlackGrids();
        rainbowGrids()
    } else if (button.target.textContent.includes("Black")) {
        button.target.textContent = "Rainbow Mode"
        removeRainbowGrids();
        blackGrids();
    } 
})

// Creating a function to use the eraser

const whiteDiv = (element) => {
    element.target.style.backgroundColor = "white";
}

function whiteGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
            grid.childNodes[i].addEventListener("mouseover", whiteDiv)
    }
}

function removeWhiteGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
        grid.childNodes[i].removeEventListener("mouseover", whiteDiv)
    }
}

function turnOnWhiteGrid(event) {
    event.preventDefault();
    whiteGrid();
}

function whiteGrids() {
    grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mousedown", turnOnWhiteGrid)
})

grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mouseup", removeWhiteGrid)
})
}

function removeWhiteGrids() {
    grid.childNodes.forEach((gridElements) => {
        gridElements.removeEventListener("mousedown", turnOnWhiteGrid)
    })
    
    grid.childNodes.forEach((gridElements) => {
        gridElements.removeEventListener("mouseup", removeWhiteGrid)
    })
}

eraserButton.addEventListener("click", (button) => {
    if (button.target.textContent.includes("Eraser")) {
        button.target.textContent = "Black Mode"
        removeBlackGrids();
        removeRainbowGrids();
        whiteGrids()
    } else if (button.target.textContent.includes("Black")) {
        button.target.textContent = "Eraser"
        removeWhiteGrids();
        blackGrids();
    } 
})

// Creating a function to use the color

let color;

const getColor = () => {
    color = colorButton.value;
    removeBlackGrids();
    removeRainbowGrids();
    removeWhiteGrids();
}

colorButton.addEventListener("input", getColor)
colorButton.addEventListener("click", colorGrids)

const colorDiv = (element) => {
    element.target.style.backgroundColor = color;
}

function colorGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
            grid.childNodes[i].addEventListener("mouseover", colorDiv)
    }
}

function removeColorGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
        grid.childNodes[i].removeEventListener("mouseover", colorDiv)
    }
}

function turnOnColorGrid(event) {
    event.preventDefault();
    colorGrid();
}

function colorGrids() {
    grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mousedown", turnOnColorGrid)
})

grid.childNodes.forEach((gridElements) => {
    gridElements.addEventListener("mouseup", removeColorGrid)
})
}

function removeColorGrids() {
    grid.childNodes.forEach((gridElements) => {
        gridElements.removeEventListener("mousedown", turnOnColorGrid)
    })
    
    grid.childNodes.forEach((gridElements) => {
        gridElements.removeEventListener("mouseup", removeColorGrid)
    })
}

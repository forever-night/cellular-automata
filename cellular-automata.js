{
    cellWidth = 2;
    cellHeight = 2;


    canvasContext = initCanvasContext();
    paintUtil = new PaintUtil(canvasContext);

    maxGenerationCount = getMaxGenerationCount();
    generationSize = getGenerationSize();


    generations = [];
    rules = [];
    initialState = "";
}


function calculate() {
    paintUtil.clear();
    generations.length = 0;
    rules.length = 0;


    rules = getRuleArray();
    initialState = getInitialState();


    for (var i = 0; i < (maxGenerationCount); i++) {
        if (i == 0) {
            createFirstGeneration(initialState);
            paintUtil.paintGeneration(generations[i]);
        } else {
            createNextGeneration();
            calculateCellStatesInGeneration(i, rules);

            paintUtil.paintGeneration(generations[i]);
        }
    }
}


function calculateCellStatesInGeneration(generationIndex, rules) {
    var currentGeneration = generations[generationIndex].getCells();
    var previousGeneration = generations[generationIndex - 1].getCells();


    var currentCell;
    var leftState, currentState, rightState, pattern;

    for (var i = 0; i < generationSize; i++) {
        currentCell = currentGeneration[i];
        currentState = previousGeneration[i].state;


        if (i == 0) {
            leftState = previousGeneration[generationSize - 1].state;
            rightState = previousGeneration[i + 1].state;
        } else if (i == generationSize - 1) {
            leftState = previousGeneration[i - 1].state;
            rightState = previousGeneration[0].state;
        } else {
            leftState = previousGeneration[i - 1].state;
            rightState = previousGeneration[i + 1].state;
        }


        pattern = leftState + (currentState * 2) + (rightState * 4);

        currentCell.setState(rules[pattern]);
    }
}


// sets state of the cell in the middle to 1
function createFirstGeneration(initialState) {
    createNextGeneration();
    parseInitialState(initialState, generations[0]);
}


function createNextGeneration() {
    if (generations.length <= maxGenerationCount) {
        var generation;

        if (generations.length == 0) {
            generation = new Generation(0, generationSize);
        } else if (generations.length < maxGenerationCount) {
            generation = new Generation(generations.length, generationSize);
        }


        if (generation != null || generation != undefined)
            generations.push(generation);

        return generations.length - 1;
    } else {
        return null;
    }
}


function initCanvasContext() {
    var canvas = document.getElementById("canvas");
    var canvasContext = canvas.getContext("2d");

    canvasContext.fillStyle = "#006699";

    return canvasContext;
}


function getMaxGenerationCount() {
    var canvas = document.getElementById("canvas");
    var canvasHeight = canvas.getAttribute("height");

    return canvasHeight / cellHeight;
}


function getGenerationSize() {
    var canvas = document.getElementById("canvas");
    var canvasWidth = canvas.getAttribute("width");

    return canvasWidth / cellWidth;
}
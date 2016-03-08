function getInitialState() {
    var radio = document.getElementsByName("initialState");

    for (var i = 0; i < radio.length; i++)
        if (radio[i].checked) {
            return radio[i].value;
        }
}


function parseInitialState(initialState, generation) {
    var cellIndex;

    switch(initialState) {
        case "left":
            cellIndex = 0;
            break;
        case "center":
            cellIndex = Math.floor(generationSize / 2);
            break;
        case "right":
            cellIndex = generationSize - 1;
            break;
        case "random":
            cell;
            cellIndex = Math.floor((Math.random() * (generationSize - 1)) + 1);
    }

    generation.getCell(cellIndex).setState(1);
}
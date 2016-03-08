function Generation(index, size) {
    this.index = index;
    this.size = size;
    this.cells = [];

    for(var i = 0; i < size; i++) {
        cell = new Cell(i, this);

        this.cells.push(cell);
    }

    this.setIndex = function(index) {
        this.index = index;
    }

    this.getCell = function(index) {
        if (index < size)
            return this.cells[index];
    }

    this.getCells = function() {
        return this.cells;
    }
}
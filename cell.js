function Cell(index, generation) {
    this.index = index;
    this.generation = generation;
    this.state = 0;
    this.width = cellWidth;
    this.height = cellHeight;

    this.setIndex = function(index) {
        this.index = index;
    }

    this.getState = function() {
        return this.state;
    }

    this.setState = function(state) {
        if (state == 0 || state == 1)
            this.state = state;
    }

    this.getGeneration = function() {
        return this.generation;
    }

    this.setGenerationIndex = function(generation) {
        this.generation = generation;
    }
}
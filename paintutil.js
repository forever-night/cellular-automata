function PaintUtil(canvasContext) {
    this.canvasContext = canvasContext;

    this.paintCell = function(cell) {
        if (cell.state == 1)
            this.canvasContext.fillRect(
                cell.index * cell.width,
                cell.generation.index * cell.height,
                cell.width,
                cell.height
            );
    }

    this.paintGeneration = function(generation) {
        var cells = generation.getCells();

        for (var i = 0; i < cells.length; i++)
            paintUtil.paintCell(cells[i]);
    }

    this.clear = function() {
        canvasContext.clearRect(
            0, 0,
            canvasContext.canvas.width,
            canvasContext.canvas.height
        );
    }
}
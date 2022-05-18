export class TableHandler {
    #defaultConfig;
    #config;
    #greenCells;

    constructor(config) {
        this.#defaultConfig = {
            coordinateGrid: {},
        };

        this.#config = Object.assign({}, this.#defaultConfig, config || {});
        this.#greenCells = [];

        this.#init();
    }

    #init() {
        this.#setGreenCellsArray();
        this.#setListenerToEachCell();
    }

    #setGreenCellsArray() {
        let count = 0;
        for (let row in this.#config.coordinateGrid) {
            this.#greenCells[count++] = this.#config.coordinateGrid[row][this.#getRandomCellNumber(row)];
        }
        // console.log(this.#greenCells);
    }

    #setListenerToEachCell() {
        for (let row in this.#config.coordinateGrid) {
            for (let cellId of this.#config.coordinateGrid[row]) {
                // console.log(cellId);
                this.#setListenerToCell(cellId);
            }
        }
    }

    #setListenerToCell(cellId) {
        let cell = document.getElementById(cellId);

        let listener = (event) => {
            if (this.#greenCells.includes(cell.id)) {
                cell.classList.add('paint-green');
                this.#greenCells.splice(this.#greenCells.indexOf(cell.id), 1);
            } else {
                cell.classList.add('paint-red');
            }
        };

        cell.addEventListener('click', listener, {once: true});
    }

    #getRandomCellNumber(rowId) {
        return Math.floor(Math.random() * this.#config.coordinateGrid[rowId].length);
    }
}
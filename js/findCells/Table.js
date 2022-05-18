export class Table {
    #config;
    #defaultConfig;
    #table;
    #coordinateGrid;

    constructor(config) {
        this.#defaultConfig = {
            table: {
                tag: 'table',
                dimensions: {
                    x: 10,
                    y: 10,
                },
                options: {
                    className: 'table',
                },
            },
            row: {
                tag: 'tr',
                options: {
                    className: 'row',
                }
            },
            cell: {
                tag: 'td',
                options: {
                    className: 'cell',
                }
            },
        };

        this.#config = Object.assign({}, this.#defaultConfig, config || {});

        this.#init();
    }

    get coordinateGrid() {
        return {coordinateGrid: this.#coordinateGrid};
    }

    #init() {
        this.#generateCoordinateGrid();
        this.#buildTable();
        this.#renderTable();
    }

    #renderTable() {
        document.body.appendChild(this.#table);
    }

    #buildTable() {
        this.#table = this.#createTableTag();

        for (let row in this.#coordinateGrid) {
            let currentRow = Object.assign(this.#createRowTag(), {id: row});
            for (let cell of this.#coordinateGrid[row]) {
                let currentCell = Object.assign(this.#createCellTag(), {id: cell});
                currentRow.appendChild(currentCell);
            }
            this.#table.appendChild(currentRow);
        }
    }

    #generateCoordinateGrid() {
        this.#coordinateGrid = {};

        for (let row = 0; row < this.#config.table.dimensions.y; row++) {
            let currentRow = 'row-' + row;
            let cells = [];
            for (let cell = 0; cell < this.#config.table.dimensions.y; cell++) {
                let currentCell = '-cell-' + cell;
                cells[cell] = currentRow + currentCell;
            }
            this.#coordinateGrid[currentRow] = cells;
        }
    }

    #createTableTag() {
        return Object.assign(
            document.createElement(this.#config.table.tag),
            this.#config.table.options
        );
    }

    #createRowTag() {
        return Object.assign(
            document.createElement(this.#config.row.tag),
            this.#config.row.options
        );
    }

    #createCellTag() {
        return Object.assign(
            document.createElement(this.#config.cell.tag),
            this.#config.cell.options
        );
    }
}
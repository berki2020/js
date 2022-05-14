export class CreateTable {
    #config;
    #defaultConfig;
    #tableElement;
    #rowElement;
    #cellElement;
    #table;

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

    #init() {
        this.#createTableParts();
        this.#buildTable();
    }

    #buildTable() {
        this.#table = this.#tableElement;

        let count = 0;
        for (let row = 0; row < this.#config.table.dimensions.y; row++) {
            count++;
            let currentRow = Object.assign(this.#rowElement, {id: 'row-' + row});
            for (let cell = 0; cell < this.#config.table.dimensions.y; cell++) {

                let currentCell = Object.assign(this.#cellElement, {id: 'row-' + row + '-cell-' + cell});
                currentRow.appendChild(currentCell);
            }
            this.#table.appendChild(currentRow);
            console.log(this.#table);
            if (count === 4) break;
        }

        // console.log(this.#table);
        // console.log(this.#rowElement);
        // console.log(this.#cellElement);

    }

    #createTableParts() {
        this.#createTableTag();
        this.#createRowTag();
        this.#createCellTag();
    }

    #createTableTag() {
        this.#tableElement = Object.assign(
            document.createElement(this.#config.table.tag),
            this.#config.table.options
        );
    }

    #createRowTag() {
        this.#rowElement = Object.assign(
            document.createElement(this.#config.row.tag),
            this.#config.row.options
        );
    }

    #createCellTag() {
        this.#cellElement = Object.assign(
            document.createElement(this.#config.cell.tag),
            this.#config.cell.options
        );
    }
}
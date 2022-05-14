export class OutputDataClass {
    #defaultConfig;
    #config;
    #resultElement;
    #discriminantElement;
    #numberOfRootsElement;
    #clearInput;

    constructor(config) {
        this.#defaultConfig = {
            data: {
                roots: {x1: null, x2: null},
                numberOfRoots: null,
                discriminant: null,
            },
            divIds: {
                resultId: 'result',
                discriminantId: 'discriminant',
                numberOfRootsId: 'number_of_roots',
            },
            submitInputId: 'submit_input',
            clearInputId: 'clear_input',
        }

        this.#config = Object.assign({}, this.#defaultConfig, config || {});
        console.log(config);

        this.#init();
    }

    #init() {
        this.#setClearInput();

        this.#setFillableItems();
        this.#fillFillableItems();
        this.#clearFillableItems();
    }

    #setFillableItems() {
        this.#resultElement = document.getElementById(this.#config.divIds.resultId);
        this.#discriminantElement = document.getElementById(this.#config.divIds.discriminantId);
        this.#numberOfRootsElement = document.getElementById(this.#config.divIds.numberOfRootsId);
    }

    #setClearInput() {
        this.#clearInput = document.getElementById(this.#config.clearInputId);
        console.log(this.#clearInput);
    }

    #fillFillableItems() {
            this.#resultElement.innerText = `roots of equation: x1 = ${this.#config.data.roots.x1}; x2 = ${this.#config.data.roots.x2};`;
            this.#discriminantElement.innerText = `discriminant of equation: ${this.#config.data.discriminant};`;
            this.#numberOfRootsElement.innerText = `number of equation's roots: ${this.#config.data.numberOfRoots};`;

            this.#showFillableItems();
    }

    #showFillableItems() {
        this.#resultElement.classList.replace('hidden', 'square');
        this.#discriminantElement.classList.replace('hidden', 'square');
        this.#numberOfRootsElement.classList.replace('hidden', 'square');
    }

    #clearFillableItems() {
        this.#clearInput.addEventListener('click', () => {
            this.#resultElement.innerText = '';
            this.#discriminantElement.innerText = '';
            this.#numberOfRootsElement.innerText = '';

            this.#resultElement.classList.replace('square', 'hidden');
            this.#discriminantElement.classList.replace('square', 'hidden');
            this.#numberOfRootsElement.classList.replace('square', 'hidden');
        });
    }
}
export class DividersCalculator {
    #defaultConfig;
    #config;
    #number;
    #submit;
    #clear;
    #resultDiv;

    constructor(config) {
        this.#defaultConfig = {
            inputsId: {
                number: 'first_input',
                submit: 'submit_input',
                clear: 'clear_input',
                resultDiv: 'result',
            },
        };

        this.#config = Object.assign({}, this.#defaultConfig, config || {});

        this.#init();
    }

    #init() {
        this.#setInputs();
        this.#setCalculateResultListener();
        this.#setClearListener();
    }

    #setInputs() {
        this.#number = document.getElementById(this.#config.inputsId.number);
        this.#submit = document.getElementById(this.#config.inputsId.submit);
        this.#clear = document.getElementById(this.#config.inputsId.clear);
        this.#resultDiv = document.getElementById(this.#config.inputsId.resultDiv);
    }

    #calculateResult() {
        let result = [];
        for (let i = 1; i - 1 < this.#number.value; i++) {
            if (this.#number.value % i !== 0) continue;
            result.push(i);
        }

        return result.toString();
    }

    #setCalculateResultListener() {
        this.#submit.addEventListener('click', () => {
            this.#resultDiv.innerText = this.#calculateResult();
            this.#resultDiv.classList.replace('hidden', 'square');
        });
    }

    #setClearListener() {
        this.#clear.addEventListener('click', () => {
            this.#resultDiv.innerText = '';
            this.#resultDiv.classList.replace('square', 'hidden');
        });
    }


}
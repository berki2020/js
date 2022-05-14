export class PythagoreanCalculator {
    #defaultConfig;
    #config;
    #sideA;
    #sideB;
    #sideC;
    #submit;
    #clear;
    #result;

    constructor(config) {
        this.#defaultConfig = {
            inputIds: {
                'sideA': 'first_input',
                'sideB': 'second_input',
                'sideC': 'third_input',
                'submit': 'submit_input',
                'clear': 'clear_input',
                'result': 'result',
            }
        };

        this.#config = Object.assign({}, this.#defaultConfig, config || {});

        this.#init();
    }

    #init() {
        this.#setInputs();
        this.#setResultListener();
        this.#setClearListener();
    }

    #setInputs() {
        this.#sideA = document.getElementById(this.#config.inputIds.sideA);
        this.#sideB = document.getElementById(this.#config.inputIds.sideB);
        this.#sideC = document.getElementById(this.#config.inputIds.sideC);
        this.#submit = document.getElementById(this.#config.inputIds.submit);
        this.#clear = document.getElementById(this.#config.inputIds.clear);
        this.#result = document.getElementById(this.#config.inputIds.result);
    }

    #validateInputsData() {
        return true;
    }

    #setResultListener() {
        this.#submit.addEventListener('click', () => {
            if (this.#validateInputsData()) {
                this.#result.innerText = this.#calculateResult();
                this.#result.classList.replace('hidden', 'square')
            }
        });
    }

    #setClearListener() {
        this.#clear.addEventListener('click', () => {
            this.#result.innerText = '';
            this.#result.classList.replace('square', 'hidden')
        });
    }

    #calculateResult() {
        console.log(this.#sideA.value, this.#sideB.value, this.#sideC.value);
        console.log(Math.pow(this.#sideA.value, 2) + Math.pow(this.#sideB.value, 2), Math.pow(this.#sideC.value, 2));

        return Math.pow(this.#sideA.value, 2) + Math.pow(this.#sideB.value, 2) === Math.pow(this.#sideC.value, 2)
            ? 'is a Pythagorean triple'
            : 'is not a Pythagorean triple';
    }


}
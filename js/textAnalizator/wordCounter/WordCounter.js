export class WordCounter {
    #defaultConfig;
    #config;
    #textarea;
    #submit;
    #clear;
    #resultDiv;

    constructor(config) {
        this.#defaultConfig = {
            inputsId: {
                textarea: 'textarea',
                submit: 'submit_input',
                clear: 'clear_input',
                result: 'result',
            }
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
        this.#textarea = document.getElementById(this.#config.inputsId.textarea);
        this.#submit = document.getElementById(this.#config.inputsId.submit);
        this.#clear = document.getElementById(this.#config.inputsId.clear);
        this.#resultDiv = document.getElementById(this.#config.inputsId.result);
    }

    #calculateResult() {
        return {
            quantityWords: this.#textarea.value.split(' ').length,
            quantitySymbolsWithoutSpaces: this.#textarea.value.replaceAll(' ', '').length,
        };
    }

    #setCalculateResultListener() {
        this.#submit.addEventListener('click', () => {
            let quantityWords = this.#calculateResult();
            this.#resultDiv.innerText = 'In this text ' + quantityWords.quantityWords + ' words and ' + quantityWords.quantitySymbolsWithoutSpaces + ' symbols without spaces';
            this.#resultDiv.classList.replace('hidden', 'square');
            alert('In this text ' + quantityWords.quantityWords + ' words and ' + quantityWords.quantitySymbolsWithoutSpaces + ' symbols without spaces');
        });
    }

    #setClearListener() {
        this.#clear.addEventListener('click', () => {
            this.#resultDiv.innerText = '';
            this.#resultDiv.classList.replace('square', 'hidden');
        });
    }
}
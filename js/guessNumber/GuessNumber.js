export class GuessNumber {
    #defaultConfig;
    #config;
    #number;
    #submit;
    #clear;
    #result;
    #randomNumber;

    constructor(config) {
        this.#defaultConfig = {
            inputsId: {
                number: 'number_input',
                submit: 'submit_input',
                clear: 'clear_input',
                result: 'result',
            },
        };

        this.#config = Object.assign({}, this.#defaultConfig, config || {});

        this.#init();
    }

    #init() {
        this.#setInputs();
        this.#setRandomNumber();
        this.#setSubmitListener();
        this.#setRestartListener();
        console.log(this.#randomNumber);
    }

    #setInputs() {
        this.#number = document.getElementById(this.#config.inputsId.number);
        this.#submit = document.getElementById(this.#config.inputsId.submit);
        this.#clear = document.getElementById(this.#config.inputsId.clear);
        this.#result = document.getElementById(this.#config.inputsId.result);
    }

    #setRandomNumber() {
        this.#randomNumber = Math.round(Math.random() * 100);
    }

    #setSubmitListener() {
        this.#submit.addEventListener('click', () => {
            switch (true) {
                case (this.#randomNumber === +this.#number.value):
                    this.#result.innerText = 'You guessed the number right! Success!';

                    this.#result.classList.contains('hidden')
                        ? this.#result.classList.replace('hidden', 'green-square')
                        : this.#result.classList.replace('red-square', 'green-square');
                    break;
                case (this.#randomNumber < this.#number.value):
                    this.#result.innerText = 'You didn\'t guess the number. Please, enter a lower number. Failure!';

                    this.#result.classList.contains('hidden')
                        ? this.#result.classList.replace('hidden', 'red-square')
                        : this.#result.classList.replace('green-square', 'red-square');
                    break;
                case (this.#randomNumber > this.#number.value):
                    this.#result.innerText = 'You didn\'t guess the number. Please, enter a higher number. Failure!';

                    this.#result.classList.contains('hidden')
                        ? this.#result.classList.replace('hidden', 'red-square')
                        : this.#result.classList.replace('green-square', 'red-square');
                    break;
            }
        });
    }

    #setRestartListener() {
        this.#clear.addEventListener('click', () => {
            this.#result.innerText = '';
            this.#result.classList.remove('red-square');
            this.#result.classList.remove('green-square');
            this.#result.classList.add('hidden');
            this.#setRandomNumber();
            console.log(this.#randomNumber);
        });
    }
}
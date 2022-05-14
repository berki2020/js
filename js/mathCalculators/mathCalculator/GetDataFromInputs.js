export class GetDataFromInputs {
    #defaultConfig;
    #config;
    #submit;
    #result;

    constructor(config) {
        this.#defaultConfig = {
            inputIds: {
                'a': 'first_input',
                'b': 'second_input',
                'c': 'third_input',
                'submit': 'submit_input',
            }
        };

        this.#config = Object.assign({}, this.#defaultConfig, config || {});

        this.#setResultData();
    }

    #setResultData() {
        this.#result = {
            'a': document.getElementById(this.#config.inputIds.a).value,
            'b': document.getElementById(this.#config.inputIds.b).value,
            'c': document.getElementById(this.#config.inputIds.c).value,
        };
    }

    getResult() {
        return this.#result;
    }
}
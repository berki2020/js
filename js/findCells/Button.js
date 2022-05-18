export class Button {
    #defaultConfig;

    constructor(config) {
        this.#defaultConfig = {

        };

        this.#config = Object.assign({}, this.#defaultConfig, config || {});

        this.#init();
    }

    #init() {
    }
}
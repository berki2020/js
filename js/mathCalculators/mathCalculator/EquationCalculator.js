export class EquationCalculator {
    #defaultConfig;
    #config;
    #discriminant;
    #numberOfRoots;
    #result;

    constructor(config) {
        this.#defaultConfig = {'a': 0, 'b': 0, 'c': 0};
        this.#config = Object.assign({}, this.defaultConfig, config || {});
        this.#result = {};

        this.#setDiscriminant();
        this.#setNumberOfRoots();
        this.#determineRootsEquation();
    }

    getResult() {
        return this.#result;
    }

    getDiscriminant() {
        return this.#discriminant;
    }

    getNumberOfRoots() {
        return this.#numberOfRoots;
    }

    getComplexResult() {
        return {
            data: {
                roots: this.#result,
                numberOfRoots: this.#numberOfRoots,
                discriminant: this.#discriminant,
            },
        };
    }

    #determineRootsEquation() {
        // this.#result = this.#numberOfRoots === 0
        //     ? this.#discriminantEqualZero()
        //         ? this.#discriminant > 0
        //         : this.#discriminantGreaterZero()
        //     : this.#discriminantLessZero();


        switch (true) {
            case (this.#discriminant === 0):
                this.#result = this.#discriminantEqualZero();
                break;
            case (this.#discriminant > 0):
                this.#result = this.#discriminantGreaterZero();
                break;
            case (this.#discriminant < 0):
                this.#result = this.#discriminantLessZero();
                break
            default:
                break;
        }
    }

    #discriminantEqualZero() {
        return {
            'x1': -this.#config.b / (2 * this.#config.a),
            'x2': -this.#config.b / (2 * this.#config.a),
        };
    }

    #discriminantGreaterZero() {
        let x1 = (-this.#config.b - Math.pow(this.#discriminant, 0.5)) / (2 * this.#config.a);
        let x2 = (-this.#config.b + Math.pow(this.#discriminant, 0.5)) / (2 * this.#config.a);

        return {
            'x1': x1,
            'x2': x2,
        };
    }

    #discriminantLessZero() {
        return {
            'x1': 'root not exits',
            'x2': 'root not exits',
        };
    }

    #setNumberOfRoots() {
        this.#numberOfRoots = this.#discriminant < 0
            ? this.#discriminant === 0
                ? 1
                : 0
            : 2;
    }

    #setDiscriminant() {
        this.#discriminant = Math.pow(this.#config.b, 2) - 4 * this.#config.a * this.#config.c;
    }
}
export class ConfigGenerator {
    constructor(config) {
        this.defaultConfig = {
            square: 3, rectangle: 2, triangle: 1,
        };

        this.config = Object.assign({}, this.defaultConfig, config || {});
        this.square = this.generateSquare();
        this.rectangle = this.generateRectangle();
        this.triangle = this.generateTriangle();
    }

    * generateSquare() {
        for (let i = 0; i < this.config.square; i++) {
            yield {
                figureType: 'square',
                sideA: Math.floor(Math.random() * 100)
            };
        }
    }

    * generateRectangle() {
        for (let i = 0; i < this.config.square; i++) {
            yield {
                figureType: 'rectangle',
                sideA: Math.floor(Math.random() * 100),
                sideB: Math.floor(Math.random() * 100),
            };
        }
    }

    * generateTriangle() {
        for (let i = 0; i < this.config.square; i++) {
            yield {
                figureType: 'triangle',
                sideA: Math.floor(Math.random() * 100),
                sideB: Math.floor(Math.random() * 100),
                sideC: Math.floor(Math.random() * 100),
            };
        }
    }

    // init() {
    //     let returnObject = {
            // square: this.generateSquare(),
            // rectangle: this.generateRectangle(),
            // triangle: this.generateTriangle(),
    //     };

    //     return returnObject;
    // }
}

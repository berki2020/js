export class FigureCalculator {
    constructor(configGenerator) {
        this.configGenerator = configGenerator;
    }

    init() {
        return {
            square: this.calculateSquare(),
            rectangle: this.calculateRectangle(),
            triangle: this.calculateTriangle()
        };
    }

    calculateSquare() {
        let result = {};
        let i = 0;
        for (let square of this.configGenerator.square) {
            result[++i - 1] = {
                source: square,
                perimeter: 4 * square.sideA,
                square: square.sideA * square.sideA,
            }
        }

        return result;
    }

    calculateRectangle() {
        let result = {};
        let i = 0;
        for (let rectangle of this.configGenerator.rectangle) {
            result[++i - 1] = {
                source: rectangle,
                perimeter: 2 * (rectangle.sideA + rectangle.sideB),
                square: rectangle.sideA * rectangle.sideB,
            }
        }

        return result;
    }

    calculateTriangle() {
        let result = {};
        let i = 0;
        for (let triangle of this.configGenerator.triangle) {
            let perimeter = triangle.sideA + triangle.sideB + triangle.sideC;
            result[++i - 1] = {
                source: triangle,
                perimeter: perimeter,
                square: Math.sqrt(perimeter * (perimeter - triangle.sideA) * (perimeter - triangle.sideB) * (perimeter - triangle.sideC)),
            }
        }

        return result;
    }
}

import {FigureCalculator} from "./FigureCalculator.js";
import {ConfigGenerator} from "./ConfigGenerator.js";

// let config = (new ConfigGenerator()).init();
let configForGenerator = {
    square: 3,
    rectangle: 5,
    triangle: 7,
};
let configGenerator = new ConfigGenerator(configForGenerator);
let figureCalculator = new FigureCalculator(configGenerator);

let result = figureCalculator.init();
console.log(result);

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    deep: {
        first: 1,
        second: 2,
    },
};


//
// let objects = {};
// let i = 0;
// for (let item  of figureCalculator.config.rectangle) {
//     objects[++i - 1] = item;
// }
//
// console.log(objects);

// console.log(figureCalculator.config.rectangle);
// console.log(config);
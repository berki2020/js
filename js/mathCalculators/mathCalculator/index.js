'use strict';

import {GetDataFromInputs} from "./GetDataFromInputs.js";
import {EquationCalculator} from "./EquationCalculator.js";
import {OutputDataClass} from "./OutputDataClass.js";

let submit = document.getElementById('submit_input');
// console.log(submit);


submit.addEventListener('click', () => {
    let calculatorConfig = (new GetDataFromInputs).getResult();
    let outputConfig = (new EquationCalculator(calculatorConfig)).getComplexResult();

    let output = new OutputDataClass(outputConfig);
});
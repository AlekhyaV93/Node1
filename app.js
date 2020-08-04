const rect = require('./rectangle');

const doCalculation = (l, w) => {
    if (l <= 0 || w <= 0) {
        console.log(`The dimensions of the rectangle are invalid and u passed in ${l} and ${w} as inputs`);
    }
    else {
        console.log(`The Perimater is ${rect.rectangle.perimeter(l, w)} and area is ${rect.rectangle.area(l, w)}`);
    }
}

doCalculation(2,3);
doCalculation(5,7);
doCalculation(3,0);
doCalculation(-2,3);
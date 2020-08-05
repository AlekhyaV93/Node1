const rect = require('./rectangle');

const doCalculation = (l, w) => {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);
    rect(l,w,(error,rectangle) => {
        if(error){
            console.log('Error:',error.message);
        }
        else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    })
    console.log('This statement is logged after the call to rect()');
}


doCalculation(2,3);


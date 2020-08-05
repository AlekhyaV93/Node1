module.exports = (x, y, callback) => {
    //error handling
    if (x <= 0 || y <= 0) {
        //the first argument for the callback fn should always be a error object as per node standards
        callback(new Error(`The dimensions that you have entered ${x} , ${y} are invalid`))
    }
    else {
        setTimeout(() =>
            callback(null, {
                area: () => x * y,
                perimeter: () => 2 * (x + y)
            }),
            2000
        );
    }
}

function addNumbers(num1, num2) {
    // console.log(arguments);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}

var result = addNumbers(10, 30, 40);
console.log(result);
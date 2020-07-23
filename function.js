/** 
function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, 'is even number');
    } else {
        console.log(num * 2, 'multiplied by 2');
    }
}
*/
function evenify(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    } else {
        result = num * 2;
    }
    return result;
}
/** 
function evenifyAll(num) {
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        evenify(element);
    }
}
*/
function evenifyAll(numAry) {
    var evenArray = [];
    for (let i = 0; i < numAry.length; i++) {
        const element = numAry[i];
        var result = evenify(element);
        evenArray.push(result);
    }
    return evenArray;
}

var result = evenify(10);
var square = result * result;
console.log('square: ', square);

numbers = [10, 13, 16, 18, 25, 37];
var numbersAry = evenifyAll(numbers);
console.log(numbersAry);

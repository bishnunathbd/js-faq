function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, 'is even number');
    } else {
        console.log(num * 2, 'multiplied by 2');
    }
}

function evenifyAll(num) {
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        evenify(element);
    }
}

numbers = [10, 13, 16, 18, 25, 37];
evenifyAll(numbers);

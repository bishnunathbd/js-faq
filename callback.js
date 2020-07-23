function washHand() {
    console.log('wash hand with soap');
}

function takeShower() {
    console.log('take shower');
}

function explainCallback(name, age, task) {
    // console.log(task);
    console.log('Hello ', name);
    console.log('Your Age: ', age);
    task();
}

explainCallback('Mukul', 13, washHand);
explainCallback('Shaquib', 15, takeShower);

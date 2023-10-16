'use strict';

let calculate = new Calculator(100);

calculate.add('ad');
calculate.add('afg');
calculate.sub('asd');
calculate.add(12);
calculate.sub(2);
calculate.add(25);

console.log(calculate.get(), `the result should be 135`);


function isNumber(number) {
    return (number !== '' && !isNaN(number));
}

function Calculator(base) {
    this.base = base;

    if (!isNumber(base)) {
        throw new Error('It\'s not a number');
    }

    this.add = function (number) {
        if (isNumber(number)) {
            this.base += number;
        }
    }

    this.sub = function (number) {
        if(isNumber(number)) {
            this.base -= number;
        }
    }

    this.set = function (number) {
        if(isNumber(number)) {
            this.base = number;
        }
    }

    this.get = function () {
        return this.base;
    }
}

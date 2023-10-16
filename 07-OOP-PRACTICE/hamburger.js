"use strict";


function Hamburger(size) {
    this.price = size.price;
    this.callories = size.callories;
}

Hamburger.prototype.addTopping = function (topping) {
    this.price += topping.price;
    this.callories += topping.callories;
}

Hamburger.prototype.getPrice = function () {
    return this.price;
}

Hamburger.prototype.getCallories = function () {
    return this.callories;
}

Hamburger.SIZE_SMALL = {
    price: 100,
    callories: 8888,
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 42,
}

Hamburger.TOPPING_POTATO = {
    price: 30,
    callories: 60,
}


const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());
"use strict";
var greet = function () {
    console.log("Hello");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log("C is: " + c);
};
add(1, 2);
var substract = function (a, b) {
    return a - b;
};
console.log(substract(10, 15));

"use strict";
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
calc = function (x, y, operator) {
    if (operator === "+") {
        return x + y;
    }
    else {
        return x - y;
    }
};
var showInfo;
showInfo = function (person) {
    console.log(person.name + " is " + person.age + " years old.");
};

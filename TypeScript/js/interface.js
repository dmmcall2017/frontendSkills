"use strict";
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'hahhaha' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare({ color: 'red' });
var p = { x: { name: 'ddd' } };
// p.x.name = 'dddsd'
var a1 = [1, 2, 3];
var ro = a1;
a1 = ro;

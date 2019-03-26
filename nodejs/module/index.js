const circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

console.log(`半径为4的圆的面积是${circle.area(4)}`)

const mySquare = new Square(3);
console.log(`mySquare 的面积是 ${mySquare.area()}`)

// Triangle.print();

// console.log(module)
module.children.map((item) => {
    console.log(item.exports)
    
})
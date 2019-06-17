// 'use strict'
function Vertical(){
    this.engines = 1;
}
Vertical.prototype.ignition = function(){
    console.log("Turning on my engine.")
}

Vertical.prototype.drive = function(){
    this.ignition();
    console.log("Steering and moving forward.")
}
/**寄生继承 */
function Car(){
    let car = new Vertical();

    car.wheels = 4;

    let vehDrive = car.drive;
    car.drive = function() {
        vehDrive.call(this);
        console.log("Rolling on all " + this.wheels + " wheels!");
    }

    return car;
}

let myCar = Car();
console.log(new Car(),new Vertical())
myCar.drive();
/**原型继承 */
function Super(){
    this.age = 10;
}
Super.prototype.cry = function(){
    console.log("cry...")
}

function Child() {
    this.name = "child";
}

Child.prototype = Object.create(Super.prototype)
let child = new Child();
child.cry();
console.log(child)
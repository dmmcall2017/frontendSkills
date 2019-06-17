//1.创建对象
/**
 * 1.1.工厂模式
 * 1.2.构造函数模式
 * 1.3.原型模式
 * 1.4.构造函数+原型
 * 1.5.动态原型模式
 * 1.6.寄生
 * 1.7.稳妥
 */
//工厂模式
function createObjFactory(name,) {
    let o = new Object();
    o.name = name;
    o.sayName = function() {
        console.log("my name is "+name)
    }
    return o;
}

let person1 = createObjFactory("person1")
console.log(person1)
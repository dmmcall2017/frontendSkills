/**js面试题准备 */
//1.数组去重
//对象键值法
function uniq1(arr) {
    let obj = {};
    let uniqArr = [];
    arr.forEach((item)=>{
        if(!obj[item]){
            uniqArr.push(item);
            obj[item] = 1;
        }
    })
    return uniqArr;
}
//es6新类型Set
function uniq2(arr) {
    let arr1 = new Set(arr);
    return [...arr1];
}
//普通循环法
function uniq3(arr) {
    let uniqArr = [];
    arr = arr.sort();
    arr.forEach( item => {
        if(item !== uniqArr[uniqArr.length-1]){
            uniqArr.push(item)
        }
    })
    return uniqArr;
}
//数组下标法
function uniq4(arr) {
    let uniqArr = [];
    arr.forEach( (item,index) => {
        if(arr.indexOf(item) === index) {
            uniqArr.push(item)
        }
    }) 
    return uniqArr;
}
//2.对象拷贝
//深拷贝
//浅拷贝
//Object.assign
function copy1(obj) {
    return Object.assign({},obj)
}
//3.实现bind方法
//测试
// console.log(uniq4([1,2,3,42,3,'a','sd',2,6,'sd',7,1]));
let obj = {
    name:'dmm',
    age:10
}
let newObj = copy1(obj);
newObj.age = 100;
let newObj1 = Object.create(obj)
newObj1.age = 200;
console.log(obj,newObj,newObj1)

//继承
function Animal(){
    this.name = 'Animal';
    this.showName = function() {
        console.log(this.name)
    }
}
function Cat() {
    this.name = "Cat";
    this._super = Cat.prototype;

    this.showName1 = function() {
        console.log(this.name);
    };
 
    this.showName2 = function() {
        console.log(this.name);
    };
 
    this.showName3 = function() {
        console.log(this._super.name + "=>" + this.name);
    };
}
Cat.prototype = new Animal();


var cat = new Cat();
console.log(cat instanceof Animal ); // 得到：true
cat.showName1();     // 得到："Cat" (需要读到Cat中的name属性) 
cat.showName2.call(Cat.prototype);    //  得到：”Animal" (需要读到Animal中的name属性) 
cat.showName3();

var arr = [[1,2,2],[3, 4, 5, 5],[6, 7, 8, 9,[11,12,[12,13,[14]]]],10];
let newArr = arr.flat(4);
console.log(newArr)
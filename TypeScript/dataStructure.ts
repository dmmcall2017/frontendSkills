/**
 * ts中的数据类型（11种）：
 * boolean
 * number
 * string
 * array
 * tuple（元组）
 * enum
 * any
 * null和undefined
 * void
 * never
 */
let bool:boolean = true;
let num : string = '123';
let str:number = 123;
let arr:Array<any> = [1,2,'234'];

//解构赋值
let [first, second]:[number, string] = [111,'qqqq'];
console.log(first);
let o = {
    a: "foo",
    b:12,
    c:"bar"
};
let { a, b } = o;





















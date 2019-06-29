"use strict";
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
var bool = true;
var num = '123';
var str = 123;
var arr = [1, 2, '234'];
//解构赋值
var _a = [111, 'qqqq'], first = _a[0], second = _a[1];
console.log(first);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;

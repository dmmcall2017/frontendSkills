/**
 * javascript知识要点（MDN）
 */
//defineProperty
let obj = {};
let descriptor = Object.create(null);
descriptor.value = 'static';
// Object.defineProperty(obj, 'key', descriptor);

// // 显式
// Object.defineProperty(obj, "key", {
//     enumerable: false,
//     configurable: false,
//     writable: false,
//     value: "static"
// });
// 循环使用同一对象
// function withValue(value) {
//     let d = withValue.d || (
//         withValue.d = {
//             enumerable: false,
//             writable: false,
//             configurable: false,
//             value: null
//         }
//     );
//     d.value = value;
//     return d;
// }
// ... 并且 ...
// Object.defineProperty(obj, "key", withValue("static"));
console.log(obj);

/**
 * getPrototypeOf
 */
console.log("Object.getPrototypeOf(Object): \n",Object.getPrototypeOf(Object));
console.log(Object.prototype);
console.log(Object.getPrototypeOf(Object) === Object.prototype);
let obj11 = {
    name:"dmm",
    age:18
}
console.log("Object.getPrototypeOf(obj11)\n",Object.getPrototypeOf(obj11));
console.log(obj11.__proto__);
console.log(Object.getPrototypeOf(obj11) === obj11.__proto__)//true
function Obj22(){
    this.name = "构造函数";
    this.age = 22;
}
let ins = new Obj22();
console.log("Object.getPrototypeOf(Obj22)\n",Object.getPrototypeOf(Obj22));
console.log(Obj22.prototype);
console.log(Object.getPrototypeOf(Obj22) === Obj22.prototype)//false
console.log("Object.getPrototypeOf(ins)\n",Object.getPrototypeOf(ins));
console.log(ins.__proto__);
console.log(Object.getPrototypeOf(ins) === ins.__proto__)//true


let bValue,o = {};
Object.defineProperty(o, "b", {
    // get: function() {
    //     console.log("get function:   ",bValue);
    //     return bValue;
    // },
    // set: function(newValue) {
    //     console.log("set function:   ",newValue);
    //     bValue = newValue;
    // },
    enumerable: true,
    configurable: true,
    writable : true,
    value: "testqq"
});
o.b = "hello world";
Object.defineProperty(o, 'b', {
    value: 1
})
console.log(o.b);
delete o.b;
console.log(o.b);

//Object.defineProperties的實現
function defineProperties(obj, properties) {
    function convertToDescriptor(desc) {
        function hasProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }

        function isCallable(v) {
            // NB: modify as necessary if other values than functions are callable.
            return typeof v === 'function';
        }

        if (typeof desc !== 'object' || desc === null)
            throw new TypeError('bad desc');

        let d = {};

        if (hasProperty(desc, 'enumerable'))
            d.enumerable = !!desc.enumerable;
        if (hasProperty(desc, 'configurable'))
            d.configurable = !!desc.configurable;
        if (hasProperty(desc, 'value'))
            d.value = desc.value;
        if (hasProperty(desc, 'writable'))
            d.writable = !!desc.writable;
        if (hasProperty(desc, 'get')) {
            let g = desc.get;

            if (!isCallable(g) && typeof g !== 'undefined')
                throw new TypeError('bad get');
            d.get = g;
        }
        if (hasProperty(desc, 'set')) {
            let s = desc.set;
            if (!isCallable(s) && typeof s !== 'undefined')
                throw new TypeError('bad set');
            d.set = s;
        }

        if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d))
            throw new TypeError('identity-confused descriptor');

        return d;
    }

    if (typeof obj !== 'object' || obj === null)
        throw new TypeError('bad obj');

    properties = Object(properties);

    let keys = Object.keys(properties);
    let descs = [];

    for (let i = 0; i < keys.length; i++)
        descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

    for (let i = 0; i < descs.length; i++)
        Object.defineProperty(obj, descs[i][0], descs[i][1]);

    return obj;
}

//Object.values()
if (!Object.values) Object.values = function(obj) {
    if (obj !== Object(obj))
        throw new TypeError('Object.values called on a non-object');
    var val=[],key;
    for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj,key)) {
            val.push(obj[key]);
        }
    }
    return val;
}
person = {
    name: "张三"
}

proxy = new Proxy(person, {
    get: (EventTarget, property) => {
        if(property in EventTarget) {
            return EventTarget[property];
        }else {
            throw new ReferenceError("Property \"" + prpperty + "\" does not exist.");
        }
    }
})
console.log(proxy.name);
// console.log(proxy.age);

//数组负数索引
function createArray(...args) {
    let handler = {
        get(target, propKey, reciever) {
            let index = Number(propKey)
            if(index < 0) {
                propKey = target.length + index;
            }
            return Reflect.get(target,propKey,reciever)
        }
    }
    let target = [];
    target.push(...args);
    return new Proxy(target, handler);
}
let arr = createArray(1,2,3,4,5);
console.log(arr[-2],arr[2]);

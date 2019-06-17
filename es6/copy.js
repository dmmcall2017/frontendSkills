let obj = {
    name:'111',
    date: new Date(),
    fn:function(){
        console.log(this)
    },
    children:{
        age: 10
    }
}
let obj1 = {}
//浅拷贝：函数，值类型拷贝，引用类型只拷贝引用
Object.assign(obj1,obj);
//深拷贝实现：
//1.递归实现：
function deepCopy(source) {
    //判断是数组还是对象
    let target = Array.isArray(source)?[]:{};
    //遍历源目标属性
    for(let key in source) {
        if(source.hasOwnProperty(key)) {
            if(source[key] && typeof source[key] === "object") {
                target[key] = deepCopy(source[key]);
            }else {
                target[key] = source[key];
            }
        }
    }
    return target;
}
let obj2 = deepCopy(obj);
obj2.children.age = 30;
// console.log(obj,obj1,obj2)
let obj4 = JSON.parse(JSON.stringify(obj));
obj4.children.age = 40;
console.log("============JSON============");
console.log(typeof obj4.date)
console.log(typeof obj.date)
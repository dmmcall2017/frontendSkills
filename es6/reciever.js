// let myObj = {
//     foo: 1,
//     bar: 2,
//     get baz() {
//         return this.foo + this.bar;
//     }
// }
// let myReciever = {
//     foo: 3,
//     bar: 4,
//     baz: 10
// }
// console.log(Reflect.get(myObj, 'baz'));
// console.log(Reflect.set(myObj, 'foo1', 20))
// console.log(myObj);
// console.log(myObj.foo = 333);
let p = {
    a: 'a'
  };
  
  let handler = {
    set(target, key, value, receiver) {
      console.log(receiver);
      Reflect.set(target, key, value, receiver)
    },
    defineProperty(target, key, attribute) {
      console.log('defineProperty');
      Reflect.defineProperty(target, key, attribute);
    }
  };
  
  let obj = new Proxy(p, handler);
  obj.a = 'A';
  console.log(obj)
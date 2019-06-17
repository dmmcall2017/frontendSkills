//map实现
function myMap(fn,context) {
    let arr = Array.prototype.slice.call(this);
    let newArr = [];
    for(let i=0,len=arr.length;i<len;i++){
        if(fn&&arr.hasOwnProperty(i)){
            newArr.push(fn.call(context,arr[i],i,this));
        }
    }
    return newArr;
}
let arr = [1,2,3,4,5];
let arr1 = myMap.call(arr,function(item,index){
    return item*2;
});
console.log(arr1);
//reduce实现map
function myMap2(fn,context){
    let arr = Array.prototype.slice.call(this);
    return arr.reduce((prev, cur, index) => {
        return [...prev, fn.call(context, cur, index, this)]
    },[])
}
arr1 = myMap2.call(arr1,function(item,index){
    return item*2;
});
console.log(arr1);
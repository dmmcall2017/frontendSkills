/**
 * 二分查找（有序数列）
 * @param:arr(要查找的数组)
 * @param:el(要定位的元素)
 */
function binarySearch(arr, start, end, el) {
    let len = end - start;
    let  mid = Math.ceil(len/2)+start;
    console.log(arr[mid])
    if(arr[mid]>el) {
        console.log("111111111")
        binarySearch(arr, 0, mid, el)
    } else if(arr[mid]<el) {
        console.log("222222222")
        console.log(len, mid, arr[mid])
        binarySearch(arr, mid, arr.length, el)
    } else if(arr[mid] === el){
        return mid;
    } else {
        return null;
    }
}

let arr = [1,2,3,4,5,6,7,8,9,10,11];
console.log(binarySearch(arr, 0, arr.length-1, 10));
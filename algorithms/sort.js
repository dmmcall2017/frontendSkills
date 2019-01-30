//工具类
const utils = {
    //排序类型对应的name
    sortTypeName:{
        "insertSort":"插入排序",
        "selectionSort":"选择排序",
        "shellSort":"希尔排序",
        "mergeSort":"归并排序",
        "quickSort":"快速排序",
        "quickSort1":"快速排序2",
        "sortTest":"测试"
    },
    //交换位置的函数
    swap(arr,index1,index2){
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    },
    //生成测试数组
    getRandArr:function(n,rangL,rangR){
        let arr = [];
        for(let i=0;i<n;i++){
            arr[i] = parseInt(Math.random()*(rangR-rangL)+rangL);
        }
        return arr;
    },
    //测试函数
    test:function(sortType){
        let start = new Date().getTime();
        //测试排序算法是否正确
        // console.log(sortType(utils.getRandArr(10,1,1000),0,10));//
        //测试排序所用时间
        sortType(utils.getRandArr(30000,1,1000),0,30000);
        let end = new Date().getTime();
        console.log(utils.sortTypeName[sortType.name]+"-用时：",end-start,"ms");
    }
}

//选择排序
function selectionSort(arr){
    const len = arr.length;
    for(let i=0;i<len;i++){
        let min = i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
            utils.swap(arr,i,min);
        }
    }
    return arr;
}

//插入排序
function insertSort(arr){
    const len = arr.length;
    let j;
    for(let i=0;i<len;i++){
        let min = arr[i];
        let j;
        for(j=i+1;j>0&&arr[j-1]>min;j--){
            arr[j] = arr[j-1];
        }
        arr[j] = min;
    }
    return arr;
}

//希尔排序
/**
 * 先分组，再插入排序  O(N^2)
 * @param {*} arr 
 */
function shellSort(arr){
    const len = arr.length;
    let i,j,gap,k;
    for(gap = parseInt(len/2);gap>0;gap= parseInt(gap/2)){
        for(i=gap;i<len;i++){
            for(j=i-gap;j>=0&&arr[j]>arr[j+gap];j-=gap){
                utils.swap(arr,arr[j],arr[gap+j]);
            }
        }
    }
    return arr;
}

//归并排序
/**
 * 临时空间  O(nlogn)
 * @param {*} arr[l...r](默认[0...len])
 */
function merge(leftArr,rightArr){
    //声明一个临时数组
    let res = [];
    //左右子数组都不为空
    while (leftArr.length > 0 && rightArr.length > 0){
        //比较左右元素值然后取出较小的值，往前平移
        if (leftArr[0] < rightArr[0])
            //把最小的最先取出，放到结果集中     
            res.push(leftArr.shift()); 
        else
            res.push(rightArr.shift());  
    }
    //剩下的合并到res
    return res.concat(leftArr).concat(rightArr);
}
//归并排序的分组函数
function mergeSort(arr){
    if(arr.length===1)return arr;
    let mid,leftArr,rightArr;
    mid = Math.floor(arr.length/2);
    leftArr = arr.slice(0,mid);
    rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr),mergeSort(rightArr));
}

//简单的快速排序
//遍历数组找到元素在排序之后的索引
/**
 * 原来出自阮一峰
 * @param {} arr 
 */
function quickSort(arr){
    if (arr.length <= 1) { return arr; }
    let len = arr.length;
　　var pivotIndex = Math.floor(Math.random()*(len-1));
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
}

//自己写的快速排序
function quickSort1(arr,low,high){
    if(low>=high)return arr;
    //切分值的索引
    let j = partition(arr,low,high);
    //递归，j之前的都比arr[j]小，之后的都比arr[j]大
    quickSort1(arr,low,j);
    quickSort1(arr,j+1,high);
    return arr;
}
//获取切分值
function partition(arr,low,high){
    let pviot = arr[low];
    let len = high-low+1;
    let i=low,j=high,k;
    while(true){
        while(arr[++i]<pviot)if(i==high)break;
        while(arr[--j]>pviot)if(j==low)break;
        if(i>=j)break;
        utils.swap(arr,i,j);
    }
    utils.swap(arr,low,j);
    return j;
}



utils.test(selectionSort);//选择排序
utils.test(insertSort);//插入排序
utils.test(shellSort);//希尔排序
utils.test(mergeSort);//合并排序
utils.test(quickSort);//快速排序
utils.test(quickSort1);//新快速排序
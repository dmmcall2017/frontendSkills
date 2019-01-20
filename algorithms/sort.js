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
}
//希尔排序
/**
 * 先分组，再插入排序
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
}
//归并排序



//工具类
const utils = {
    //排序类型对应的name
    sortTypeName:{
        "insertSort":"插入排序",
        "selectionSort":"选择排序",
        "shellSort":"希尔排序",
        "shellSort2":"希尔排序2"
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
        sortType(utils.getRandArr(10000,1,1000));
        let end = new Date().getTime();
        console.log(utils.sortTypeName[sortType.name]+"-用时：",end-start,"ms");
    }
}


utils.test(selectionSort);
utils.test(insertSort);
utils.test(shellSort);
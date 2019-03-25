let sort = require('./sort.js')
let binarySort1 = require('./binaryTree')
//测试类
const utils = {
    //排序类型对应的name
    sortTypeName:{
        "insertSort":"插入排序",
        "selectionSort":"选择排序",
        "shellSort":"希尔排序",
        "mergeSort":"归并排序",
        "quickSort":"快速排序",
        "quickSort1":"快速排序2",
        "sortTest":"测试",
        
    },
    
    /**
     * 生成测试函数
     * @param:n(数组长度)
     * @param:rangL(数组元素值的左边界)
     * @param:rangR(数组元素值的右边界)
     **/
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
        console.log(sortType(utils.getRandArr(10,1,1000),0,10));
        //测试排序所用时间
        // sortType(utils.getRandArr(10000,1,10000),0,30000);
        let end = new Date().getTime();
        console.log(utils.sortTypeName[sortType.name]+"-用时",end-start,"ms");
    }
}

let fnObj = sort.sortFns;
utils.test(fnObj.selectionSort);//选择排序
utils.test(fnObj.insertSort);//插入排序
utils.test(fnObj.shellSort);//希尔排序
utils.test(fnObj.mergeSort);//合并排序
utils.test(fnObj.quickSort);//快速排序

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let res = [];
    while(nums1.length>0 && nums2.length>0){
        if(nums1[0] < nums2[0]){
            res.push(nums1.shift())
        }else{
            res.push(nums2.shift())
        }
    }
    res = res.concat(nums1).concat(nums2);
    let loc = Math.floor(res.length/2);
    console.log(loc)
    return res.length%2===0?(res[loc]+res[loc-1])/2:res[loc]
};
var findMedianSortedArrays2 = function(nums1, nums2) {
    let len1 = nums1.length,len2 = nums2.length;
    let len = len1+len2;
    let mid = len%2===0?len/2-1:Math.floor(len/2);
    while(nums1.length>0 && nums2.length>0){
        if(mid===0)break;
        if(nums1[0] < nums2[0]){
            nums1.shift()
        }else{
            nums2.shift()
        }
        mid--;
    }
    console.log(nums1,nums2)
    // console.log(i,j,nums1[i],nums2[j]);
    // return 
}



//测试函数
function test(){
    let nums1 = [1,3,7];
    let nums2 = [2,4,5,6,7,8];
    let start = new Date().getTime();
    findMedianSortedArrays2(nums1, nums2);
    let end = new Date().getTime();
    console.log("用时：",end-start,"ms");
}
test()
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let arr = Array.from({ length: n+1 }, (_, i) => i );
    for(let i = 0;i<=nums.length;i++){
        let index = arr.indexOf(nums[i])
       if(index!=-1){
arr.splice(index,1)
       } 

    }
    console.log(arr)

return arr[0]
    
};
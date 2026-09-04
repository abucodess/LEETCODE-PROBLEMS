/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    arr = []
    sum = 0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        arr.push(sum)
    }
    return arr
    
};
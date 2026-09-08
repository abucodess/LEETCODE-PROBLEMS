/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let rightarray = Array(nums.length).fill(1)
    let leftarray = Array(nums.length).fill(1)
    let start = 1
    let end = 1
    for(let i = 0;i<rightarray.length;i++){
        
        rightarray[i]=start
        start *=nums[i] 
    }
    for(let i = leftarray.length-1;i>=0;i--){
        leftarray[i] =end
        end *= nums[i] 
    }
    console.log(leftarray)
    for (let i =0;i<nums.length;i++){
        let num = leftarray[i]*rightarray[i]
        nums[i] = num
    }
    return nums
};
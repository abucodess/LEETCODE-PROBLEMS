/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let bucket  = []
    let result = []
    for(let i = 0 ;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)

        }else{
            map.set(nums[i],1)
        }
    }
   for(let [key,value] of map){
    if(!bucket[value]){
        bucket[value] = new Set().add(key)
    }else{
        bucket[value] = bucket[value].add(key)
    }
   }
   for(let i = bucket.length;i>=0;i--){
    if(bucket[i]){
        result.push(...bucket[i])
    }
    if(result.length==k)break;
   }
    
    return result
    
};
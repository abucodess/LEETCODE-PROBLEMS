/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
let map = new Map()
 for(let i = 0;i<numbers.length;i++){
    let num = target - numbers[i]
    if(map.has(num)){
        return [map.get(num) +1 , i+1]
    } 
    map.set(numbers[i],i)
 }
    

};
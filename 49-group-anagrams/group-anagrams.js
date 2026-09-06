/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    let grp = []
    for(let i = 0 ; i<strs.length;i++){
        key = strs[i].split("").sort().join("")
       if(map.has(key)){
        
        map.get(key).push(strs[i])
       }else{
        map.set(key,[strs[i]])
       }
    }
    // console.log(map)
    for(let [key,value] of map){
        grp.push(value)
    }
    return grp
};


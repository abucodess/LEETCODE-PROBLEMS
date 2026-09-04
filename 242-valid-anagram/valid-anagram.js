/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("").sort()
    t = t.split("").sort()
    if(s.length!==t.length){
        return false
    }
    let j =0
    for(let i=0;i<s.length;i++){
        if(s[i]!==t[j]){
            return false
        }
        j++
    
    }
    return true

};
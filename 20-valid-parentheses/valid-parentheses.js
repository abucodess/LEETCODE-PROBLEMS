/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     let open = []
     let obj = {
        ")" : "(",
        "}" : "{",
     "]" : "["
     }

    for(let i=0;i<s.length;i++){
       
        if(s[i]=="("||s[i]=="{"||s[i]=="["){
            open.push(s[i])
            console.log(s[i])
        }else{
            let x =open.pop()
            console.log(obj[s[i]])
            if(!(x==obj[s[i]])){
                return false
            }
           
        }
    }
    return open.length==0
    
};
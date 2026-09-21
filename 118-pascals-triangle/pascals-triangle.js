/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pascal = []
    let rows = 0
   for(let i =0;i<numRows;i++){
    rows++
    let arr = []
    for(let j = 0;j<rows;j++){
        if(j==0 ||j==rows-1){
            arr.push(1)
        }else{
            let num = pascal[i-1][j-1] + pascal[i-1][j]
             arr.push(num)
        }

    }
    pascal.push(arr)
   }
    return pascal
    
    
};
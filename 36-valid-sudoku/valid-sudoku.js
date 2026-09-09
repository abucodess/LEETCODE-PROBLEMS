/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
for(let i = 0 ;i<board.length;i++){
        let set =  new Set()
        for(let j =0;j<board.length;j++){
            if(board[i][j] == "."){
                continue
           }
            if(set.has(board[i][j])){
                return false
            }else{
                set.add(board[i][j])
            }

        }
    }
for(let i = 0 ;i<board.length;i++){
        let set =  new Set()
        for(let j =0;j<board.length;j++){
            if(board[j][i] == "."){
                continue
           }
            if(set.has(board[j][i])){
                return false
            }else{
                set.add(board[j][i])
            }

        }
    }
for(let row = 0 ;row<board.length;row+=3){
        
        for(let col =0;col<board.length;col+=3){
            let set =  new Set()
             for(let i = 0 ; i<=2;i++){
                
                for(let j = 0 ; j<=2;j++){
                    if(board[i+row][j+col]=="."){
                        continue

                    }
                    if(set.has(board[i+row][j+col])){
                        return false
                    }else{
                        set.add(board[i+row][j+col])
                    }

                }
             }
           

        }
    }

    return true
    
};
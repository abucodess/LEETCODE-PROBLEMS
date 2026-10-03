/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let maxprofit = 0
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min){
             min =prices[i] 
              continue ;
        }
       
       if(prices[i]-min > maxprofit){
        maxprofit =  prices[i] - min
       }
      


    }

    return maxprofit
};
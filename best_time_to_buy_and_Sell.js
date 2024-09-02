function bestTimeToBuyAndSellStock(prices){
    let minPrice = prices[0];
    let maxProfit = 0;
    for(let i=1;i<prices.length;i++){
            minPrice = Math.min(prices[i], minPrice);
            maxProfit = Math.max(prices[i] - minPrice, maxProfit);
    }
    return maxProfit;
}
console.log(bestTimeToBuyAndSellStock([7,1,5,3,6,4])); // 5

// TC = O(N)
// SC = O(1)
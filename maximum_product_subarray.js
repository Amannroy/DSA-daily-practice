let maxProduct = function(nums) {
    let ans = 0;

    if(nums.length === 1){
        return nums[0];
    }
     
     // From left to right
     let currProduct = 1;
     for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            currProduct *= nums[i];
            ans = Math.max(currProduct, ans);
        }else{
            currProduct = 1;
        }
     }

        // From right to left
        currProduct = 1;
        for(let i=nums.length-1;i>=0;i--){
            if(nums[i] !== 0){
                currProduct *= nums[i];
                ans = Math.max(currProduct, ans);
            }else{
            currProduct = 1;
        }

     }
     return ans;
};
console.log(maxProduct([2,3,-2,4])); // 6

// TC = O(n) -> O(n) + O(n) = O(2n) where 2 is constant
// SC = O(1)

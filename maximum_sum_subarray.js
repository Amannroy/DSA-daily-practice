let maxSubArray = function(nums) {
    let ans = nums[0];
    let currSum = nums[0];
    for(let i=1;i<nums.length;i++){
        if(currSum < 0){
            currSum = 0;
        }
        currSum += nums[i];
        if(currSum > ans){
            ans = currSum;
        }
    }
    return ans;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6

// TC = O(N)
// SC = O(1)


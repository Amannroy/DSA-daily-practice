let findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let ans = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            count++;
            ans = Math.max(count, ans);
        }else{
            count = 0;
        }
    }
    return ans;
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3

// TC = O(n)
// SC = O(1)

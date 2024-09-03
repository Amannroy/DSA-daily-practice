function productExceptSelf(nums){
    let n = nums.length;
    let left = new Array(n);
    let right = new Array(n);

    // For left part
    left[0] = 1;
    for(let i=1;i<nums.length;i++){
         left[i] = left[i-1] * nums[i-1];
    }

    // For right part
    right[n-1] = 1;
    for(let i=n-2;i>=0;i--){
        right[i] = right[i+1] * nums[i+1];
    }

    // putting left and right in ans array
    let ans = new Array(n);
    for(let i=0;i<nums.length;i++){
        ans[i] = left[i] * right[i];
    }
    return ans;
}
console.log(productExceptSelf([1,2,3,4]));  // [24, 12, 8, 6]

// TC = O(n) -> O(n + n + n) = O(3n) -> 3 is constant so it will be O(n)
// SC = O(n)


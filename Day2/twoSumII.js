function twoSumII(nums, target){
    let n = nums.length;
    let left = 0;
    let right = n-1;
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum === target){
            return [left+1, right+1];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
    return [];

}
console.log(twoSumII([2,7,11,15], 9)); // [1, 2]

// TC = O(n)
// SC = O(1)

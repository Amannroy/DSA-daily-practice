// Using Hash Table
function twoSum(nums, target){
    let ans = [-1,-1];
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];
        if(map.has(complement)){
            ans[0] = map.get(complement);
            ans[i] = i;
            break;
        }
        map.set(nums[i], i);
    }
    return ans;
}
console.log(twoSum([2,7,11,15], 9)); // [0,1] , TC=O(n), SC=O(n)

// Using Two pointer
function twoSumTwoPointer(nums,target){
    let left = 0;
    let right = nums.length-1;
    while(left < right){
        let sum = nums[left]  + nums[right];

        if(sum === target){
            return [left, right];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
    return [];
}
console.log(twoSumTwoPointer([2,7,11,15], 9)); // [0, 1]

// TC = O(n)
// SC = O(1)

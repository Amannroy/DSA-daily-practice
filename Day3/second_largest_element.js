function secondLargest(nums){
    let largest = nums[0];
    let secondLargest = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i] > largest){
            secondLargest = largest;
            largest = nums[i];
        }else if(nums[i] < largest && nums[i] > secondLargest){
            secondLargest = nums[i]
        }
    }
    return secondLargest;
}
console.log(secondLargest([2,4,5,6,8,9])); // 8

// TC = O(n)
// SC = O(1)

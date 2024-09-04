function removeDuplicates(nums){
    let unique = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[i-1]){
          nums[unique] = nums[i];
          unique++; 
        }
    }
    return unique;
}
console.log(removeDuplicates([1,1,2,2,3,3,3,3,5])); // 4

// TC = O(n)
// SC = O(1)
function rotateArray(nums, k){
    let n = nums.length;
     k = k % n;
     
     reverse(nums, 0, n-1);
     reverse(nums, 0, k-1);
     reverse(nums, k, n-1);
     return nums;
}
    function reverse(nums, start, end){
        while(start < end){
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    console.log(rotateArray([1,2,3,4,5,6,7], 3)); // [ 5, 6, 7, 1, 2, 3, 4]
    
    // TC = O(n)
    // SC = O(1)
let missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actuallSum = nums.reduce((sum,num) => sum+num,0);
    return expectedSum - actuallSum;
 };
 console.log(missingNumber([3,0,1])); // 2

 // TC = O(n)
 // SC = O(1)
 
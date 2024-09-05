function findMedianSortedArrays(nums1, nums2){
    let m = nums1.length;
    let n = nums2.length;
    let i=0, j=0;
    let result = [];
    while(i < m && j < n){
        if(nums1[i] <= nums2[j]){
           result.push(nums1[i]);
           i++;
        }else{
            result.push(nums2[j]);
            j++;
        }
    }
    while(i < m){
        result.push(nums1[i]);
        i++;
    }
    while(j < n){
        result.push(nums2[j]);
        j++;
    }

    let len = result.length;
    if(len % 2 === 0){
        return (result[len/2 - 1 ]  + result[len / 2]) / 2; // For  Even
    }else{
        return result[Math.floor(len / 2)]; // For Odd
    }
}

console.log(findMedianSortedArrays([1,3],[2])); // 2

// TC = O(n)
// SC = O(1)



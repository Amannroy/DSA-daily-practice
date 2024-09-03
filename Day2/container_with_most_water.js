function maxArea(height){
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;
 
    while(left < right){
        let length = Math.min(height[left], height[right]);
        let width = right - left;
        let currArea = length * width;
        maxArea = Math.max(currArea, maxArea);

        if(height[left] < height[right]){
            left++;
         }else{
             right--;
         }
        
    }
   
    return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));  // 49

// TC = O(n)
// SC = O(1)

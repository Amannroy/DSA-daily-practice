function trapWater(height) {
    let n = height.length;  // Get the length of the height array (number of bars)
    let left = new Array(n).fill(0);  // Create an array to store the maximum height to the left of each bar, initialized with 0
    let right = new Array(n).fill(0); // Create an array to store the maximum height to the right of each bar, also initialized with 0
   
    left[0] = height[0];  // The first element of left[] is the height of the first bar
    right[n-1] = height[n-1]; // The last element of right[] is the height of the last bar

    // Fill the left array with the maximum height to the left of each bar
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i-1], height[i]); // The current element is the max of the previous left max and the current height
    }

    // Fill the right array with the maximum height to the right of each bar
    for (let i = n-2; i >= 0; i--) {
        right[i] = Math.max(right[i+1], height[i]); // The current element is the max of the next right max and the current height
    }

    let ans = 0;  // Initialize the variable to store the total trapped water
    for (let i = 0; i < n; i++) {
        // Water trapped on top of each bar is the minimum of the max heights to the left and right minus the height of the bar
        ans += Math.min(left[i], right[i]) - height[i];
    }
    
    return ans;  // Return the total amount of trapped water
}

console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1])); //  6

// TC = O(n)
// SC = O(n)

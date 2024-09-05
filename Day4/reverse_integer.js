function reverse(x){
    // Converting a number to string and split into array of characters
      let s = x.toString().split('');

      let left = 0;
      let right = s.length-1;
      while(left < right){
        [s[left],s[right]] = [s[right],s[left]];
        left++;
        right--;
      }

      // Join the reversed array into a string and convert back to a number
      let result = parseInt(s.join(''));

      // If the number was negative, multiply the result * -1
      if(x < 0){
        result *= -1;
      }

      // Handle overflow(32-bit i=signed integer range)
      if(result < -(2**31) || result > 2**31 - 1){
        return 0;
      }

      return result;
}
console.log(reverse(123));// 321
console.log(reverse(-123));//-321
console.log(reverse(15345567777543)); // 0 bz it overflows 32-bit integer range


// TC = O(n) 
// SC = O(n)
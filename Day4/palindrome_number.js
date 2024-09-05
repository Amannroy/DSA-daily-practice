
let isPalindrome = function(x) {
    let s = x.toString().split('');

    if(s.length === 1){
        return true;
    }

       let left = 0;
        let right = s.length-1;

    while(left < right){
     
        while(left < right){
            if(s[left] === s[right]){
                left++;
                right--;
            }else{
                return false;
            }
        }
        
        return true;
    }
};
console.log(isPalindrome(121)); // true


// TC = O(n)
// SC = O(n)
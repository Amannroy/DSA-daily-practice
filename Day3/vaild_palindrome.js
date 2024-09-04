function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) { 
        let leftChar = s[left].toLowerCase();
        let rightChar = s[right].toLowerCase();
        
        if (!isAlphanumeric(leftChar)) {
            left++;
        } else if (!isAlphanumeric(rightChar)) {
            right--;
        } else if (leftChar !== rightChar) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}

function isAlphanumeric(ch) {
    return /^[0-9a-zA-Z]+$/.test(ch);
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false


// TC = O(n)
// SC = O(1)
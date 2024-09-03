
let spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    
    let top=0,bottom=m-1,left=0,right=n-1,direction=0;
    let output = [];
     while(top <= bottom && left <= right){
        if(direction === 0){
            for(let j=left;j<=right;j++){
               output.push(matrix[top][j]);
               
            }
            top++;
            direction = 1;
        }else if(direction === 1){
            for(let i=top;i<=bottom;i++){
                output.push(matrix[i][right]);
                
            }
            right--;
            direction = 2;
        }else if(direction === 2){
            for(let j=right; j>=left;j--){
                output.push(matrix[bottom][j]);
                
            }
            bottom--;
            direction = 3;
         }
         else{
            for(let i=bottom;i>=top;i--){
                output.push(matrix[i][left]);
                
            }
            left++;
            direction = 0;
         }
     }
     return output;
};
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); //[1,2,3,4,8,12,11,10,9,5,6,7]

// TC = O(m * n)
// SC = O(m * n)

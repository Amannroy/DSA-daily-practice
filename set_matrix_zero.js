let setZeroes = function(matrix) {
    // Initialize variables to track if the first row or first column has any zeros
    let firstRow = false;
    let firstCol = false;

    // Get the number of rows (m) and columns (n) in the matrix
    let m = matrix.length;
    let n = matrix[0].length;

    // Check if the first row contains any zeros
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRow = true; // Mark that the first row should be zeroed
            break;
        }
    }

    // Check if the first column contains any zeros
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstCol = true; // Mark that the first column should be zeroed
            break;
        }
    }

    // Iterate through the rest of the matrix (excluding the first row and column)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // If a zero is found, mark the corresponding first row and first column cell as zero
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0; // Mark the top of the current column
                matrix[i][0] = 0; // Mark the start of the current row
            }
        }
    }

    // Iterate through the matrix again to set zeros based on the first row and column markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // If either the row marker or column marker is zero, set the cell to zero
            if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // If the first row originally had a zero, set the entire first row to zero
    if (firstRow) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // If the first column originally had a zero, set the entire first column to zero
    if (firstCol) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
};
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])); // [ [ 1, 0, 1 ], [ 0, 0, 0 ], [ 1, 0, 1 ] ]

// TC = O(m * n) -> m = no of rows, n = no of columns
// SC = O(1)

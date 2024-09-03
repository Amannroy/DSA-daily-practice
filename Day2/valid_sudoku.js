let isValidSudoku = function(board) {
    // Initialize arrays to hold sets for each row, column, and 3x3 grid
    let rowSet = new Array();
    let colSet = new Array();
    let gridSet = new Array();
    
    // Create a set for each row, column, and grid to track unique values
    for(let i = 0; i < 9; i++) {
        rowSet[i] = new Set();  // Initialize a set for row i
        colSet[i] = new Set();  // Initialize a set for column i
        gridSet[i] = new Set(); // Initialize a set for grid i
    }

    // Loop through each cell in the 9x9 board
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let value = board[i][j]; // Get the current cell's value
            if(value === '.') {
                continue; // Skip empty cells
            }

            // Calculate the grid number based on the row and column indices
            let gridNo = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Check if the value is already present in the row, column, or grid
            let isPresentInRow = rowSet[i].has(value);
            let isPresentInCol = colSet[j].has(value);
            let isPresentInGrid = gridSet[gridNo].has(value);

            // If the value is present in any set, the board is invalid
            if(isPresentInRow || isPresentInCol || isPresentInGrid) {
                return false;
            }

            // Add the value to the respective row, column, and grid sets
            rowSet[i].add(value);
            colSet[j].add(value);
            gridSet[gridNo].add(value);
        }
    }
    
    // If no duplicates are found, the board is valid
    return true;
};
console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    ));
// true

// TC = O(1)
// SC = O(1)
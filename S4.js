// S3

// Q1
function pascal(row, position) {
    if (row === 0 || position === 0 || row === position) {
        return 1;
    } else {
        return pascal(row - 1, position - 1) + pascal(row - 1, position);
    }
}
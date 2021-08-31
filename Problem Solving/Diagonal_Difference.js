function diagonalDifference(arr) {
    const size  = arr[0].length
    let first = 0;
    let second = 0;
    let sum = 0;
   
    for ( let i = 0 , j = (size - 1); i < size , j > -1 ; i++ , j--) {
    first += arr[i][i]
    second += arr[i][j]
    }
sum = first - second;

if (sum > 0) {
    return sum
}else if ( sum < 0) {
    return Math.abs(sum)
} else {
    return 0
}
}
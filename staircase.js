/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let stair = "#";
    let space = " ";
    for (let i = 1; i <= n ; i++) {
       
        console.log(space.repeat(n - i) + stair.repeat(i))
    
    }
    
}
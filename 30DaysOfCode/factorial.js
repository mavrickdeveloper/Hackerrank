*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function factorial(n){
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
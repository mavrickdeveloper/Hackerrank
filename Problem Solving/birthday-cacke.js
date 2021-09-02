/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    let maxValue = Math.max(...candles);
    let Ocurences = 0;
 
    for ( let i = 0; i < candles.length; i++) {
        if (candles[i] === maxValue ) {
            Ocurences += 1
            console.log(Ocurences)
        }
    }
    return Ocurences;
    

}

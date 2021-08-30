
// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    let PositiveCount = 0;
    let NegativeCount = 0;
    let ZeroCount = 0;
    let LengthArr = arr.length;
    let positiveratio = 0;
    let negativeratio = 0;
    let zeroRatio = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) == 1) {
            PositiveCount += 1
        } else if (Math.sign(arr[i]) == -1) {
            NegativeCount += 1
        } else if (Math.sign(arr[i]) == 0) {
            ZeroCount += 1
        }
    }
    
    positiveratio = PositiveCount / LengthArr;
    negativeratio = NegativeCount / LengthArr;
    zeroRatio = ZeroCount / LengthArr;
    
    console.log(positiveratio.toPrecision(6))
console.log(negativeratio.toPrecision(6))
console.log(zeroRatio.toPrecision(6))
}
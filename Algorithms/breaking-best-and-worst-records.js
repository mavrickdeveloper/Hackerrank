// breaking best and worst records
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let maxCount = 0;
    let minCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }
    return [maxCount, minCount];
}
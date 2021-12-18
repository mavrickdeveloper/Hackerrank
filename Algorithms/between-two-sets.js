// Between two sets
// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    let count = 0;
    let max = Math.max(...b);
    let min = Math.min(...a);
    for (let i = min; i <= max; i++) {
        let flag = true;
        for (let j = 0; j < a.length; j++) {
            if (i % a[j] !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            for (let j = 0; j < b.length; j++) {
                if (b[j] % i !== 0) {
                    flag = false;
                    break;
                }
            }
        }
        if (flag) {
            count++;
        }
    }
    return count;
}
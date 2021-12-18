
// Apples and oranges 

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApples = 0;
    let countOranges = 0;
    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            countApples++;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        if (b + oranges[i] >= s && b + oranges[i] <= t) {
            countOranges++;
        }
    }
    console.log(countApples);
    console.log(countOranges);
}
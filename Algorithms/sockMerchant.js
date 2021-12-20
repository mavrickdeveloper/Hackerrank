
function sockMerchant(n, ar) {
    let pairs = 0;
    let colors = {};
    for (let i = 0; i < n; i++) {
        if (colors[ar[i]]) {
            colors[ar[i]]++;
        } else {
            colors[ar[i]] = 1;
        }
    }
    for (let key in colors) {
        pairs += Math.floor(colors[key] / 2);
    }
    return pairs;
}
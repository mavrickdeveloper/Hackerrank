

function migratoryBirds(arr) {
    var birdCount = [0, 0, 0, 0, 0];
    for (var i = 0; i < arr.length; i++) {
        birdCount[arr[i] - 1]++;
    }
    var max = 0;
    var maxIndex = 0;
    for (var i = 0; i < birdCount.length; i++) {
        if (birdCount[i] > max) {
            max = birdCount[i];
            maxIndex = i + 1;
        }
    }
    return maxIndex;
}


function catAndMouse(x, y, z) {
    let a = Math.abs(x - z);
    let b = Math.abs(y - z);
    if (a < b) {
        return "Cat A";
    } else if (a > b) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
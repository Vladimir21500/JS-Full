function sortAsc (array) {
    if (!Array.isArray(array)) return null;
    let value;
    let n = array.length;
    do {
    for ( let i = 0; i < array.length; i++) {
        if(array[i+1] < array[i]) {
            value = array[i];
            array[i] = array[i + 1];
            array[i + 1] = value;
        }
    }
    n--;
} while (n > 0);
    return array;
}
function sortDesc (array) {
    if (!Array.isArray(array)) return null;
    let value;
    let n = array.length;
    do {
    for ( let i = 0; i < array.length; i++) {
        if(array[i+1] > array[i]) {
            value = array[i];
            array[i] = array[i + 1];
            array[i + 1] = value;
        }
    }
    n--;
} while (n > 0);
    return array;
}
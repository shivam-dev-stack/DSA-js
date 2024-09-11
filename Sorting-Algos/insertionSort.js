function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
            // console.log(arr)
        }
        arr[j + 1] = current;
    }
    return arr;
}
const arr = [12, 37, 104, 63, 22, 71, 55, 62, 75];
console.log(insertionSort(arr));
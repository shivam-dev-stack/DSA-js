function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = 
                    [arr[min], arr[i]];
        }
    }
    console.log(`final sorted array: ${arr}`);
}

const arr = [12, 37, 104, 63, 22, 71, 55, 62, 75];
selectionSort(arr)
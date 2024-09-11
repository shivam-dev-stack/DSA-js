function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                console.log(arr)

            }
            
        }
    }
    console.log(`final sorted array: ${arr}`);
}


const arr = [12, 37, 104, 63, 22, 71, 55, 62, 75];
bubbleSort(arr);
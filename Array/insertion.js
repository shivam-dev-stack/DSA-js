let arr = [10,16,9,8,15,12,4];

let pos = 3;
let newVal = 19;

for (let i = arr.length-1; i>=0; i--){
    if (i >= pos) {
        arr[i+1]=arr[i]
        if(i==pos){
            arr[i] = newVal
        }
    }
}

console.log(arr);
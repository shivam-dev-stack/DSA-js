let arr = [10,16,9,19,8,15,12,4];

let pos = 6;

for(let i = pos; i<arr.length-1;i++){
    arr[i] = arr[i+1];
    break;
}

arr.length= arr.length-1

console.log(arr)
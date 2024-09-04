let arr = [10,16,9,19,8,15,12,4];

for(i=0;i<arr.length-2;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr)
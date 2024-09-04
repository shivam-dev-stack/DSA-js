let arr = [10,30,50];
let arr1 = [20,40,60,80]

let mergedArr = []

for(i=0;i<arr.length;i++){
    mergedArr[i] = arr[i]
}
for(i=0;i<arr1.length;i++){
    mergedArr[mergedArr.length] = arr1[i]
}

console.log(mergedArr)
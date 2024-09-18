function mergeSort(arr){
    if (arr.length<=1) {
        return arr
    }
    let mid = Math.floor(arr.length/2)

    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}


function merge(left,right){
    let result = []

    while(left.length && right.length){
        if(left[0] < right[0]){
                result.push(left.shift())
            }
            else{
                result.push(right.shift())

            }
    }
    return [...result, ...left, ...right]
}

console.log(mergeSort([81,5,90,84,12,11,72,9]))
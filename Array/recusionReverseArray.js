let array = [10,16,9,19,8,15,12,4];

const reverse = (arr) =>{
    if( arr?.length==1){
        return arr[0];
    }
    return `${arr.pop()},${reverse(arr)}`;
}

//or

const reverseArray = (arr,start,end) =>{
    console.log(arr)
    let temp = undefined
    if( start<end){
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        reverseArray(arr,start+1,end-1)
    }
}

console.log(reverse(array).split(",").map((i)=>parseInt(i)))
//or
// reverseArray(array,0,array.length-1);
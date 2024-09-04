let arr = [10,16,9,8,15,12,8,4];

let val = 8; // multiple occurences
let index = [];

for (i = 0; i<arr.length;i++){
    if (arr[i] == val) {
        if(!index.length){
            index[0] = i;
        }else{
            index[index.length]=i;
        }
    }
    
}
console.log((index.length>0)?`${index}`:"Not Found")
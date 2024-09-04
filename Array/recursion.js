
let hello = (numOfPersons)=>{
    if(numOfPersons==0){
        return
    }
    console.log(`Hello Mr. Ben ${numOfPersons}`);
    hello(numOfPersons-1)
}



let factorial = (n)=>{
    if(n==0) return 1

    return n*factorial(n-1)
}

// hello(10)

console.log(factorial(5))
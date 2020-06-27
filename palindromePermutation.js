/*
    Given a string, write a function to check if it is a permutation of a palindrome. 
    A palindrome is a word or phrase that is the same forwards and backwards.
    A permutation is a rearrangement of letters. 
    The palindrome does not need to be limited to just a dictionary words. You can ignore casing and non-letter characters
*/
// 10m


const palindromePermutation = (string) =>{

    const array = string.toLowerCase().split("")
    const hash = {}
    const repeated = 0
    for(let i=0;i<array.length;i++){ 
        if(array[i]==" ") continue
        if(hash[array[i]]=== undefined){
            hash[array[i]] = 0
        }else{
            repeated 
        }
        hash[array[i]] = hash[array[i]]+1

    }
    const singleElement = 0
    const result = []
    Object.keys(hash).map(key=>{
        if (hash[key] % 2 !== 0)result.push (hash[key])
    })
    return (result.length <2)


}


console.log("should be ",palindromePermutation("Tact Coa"))
console.log("should be ",palindromePermutation("ab casj fskla hf"))
console.log("should be ",palindromePermutation("ab casj fskla hf"))
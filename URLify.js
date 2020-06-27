// URLify: Write a method to replace all spaces in a string with %20. 
// You may asume that the string has sufficient space at the end to hold the additional characters, 
// and that you are given the "true" length of the string.

const URLify = (string,realLength)=>{

    if(string.lengh < realLength) return false
    const array = string.split("")
    let newArray = []

    for(let i =0;i<realLength;i++){

        if(array[i]== " "){
            newArray = [...newArray,"%","2","0"]
        }else{
            newArray.push(array[i])
        }

    }

    return newArray.join("")
}



console.log(URLify("Mr John Smith    ",13))
console.log(URLify("    ",13))
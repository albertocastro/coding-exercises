/* 
    There are three types of edits that can be performed on string: Insert a character, remove a character, or replace a characters. Given two strings, write a function to check if they are one edit(or zero edits) aways
    15m
*/

const oneAway = (word1,word2)=>{

    if(word1 == word2) return true

    let result = false
    // They might be one replace away
    if(word1.length == word2.length){
        let edits =0
        for(let i=0;i<word1.length;i++){
            if(word1[i] != word2[i]) edits++
            if(edits >1) continue
        }
        return (edits <2)
    }
    // If the length diff is two or more, it would need two edits
    if( Math.abs( word1.length - word2.length) >1) return false
    // They might need one insert
    let longestWord,shortestWord ;
    if(word1.length> word2.length){
        longestWord = word1.split("")
        shortestWord = word2.split("")
    }else{
        longestWord = word2.split("")
        shortestWord = word1.split("")
    }
    for(let i=0;i<longestWord.length;i++){
        
        if(word1[i] != word2[i]){
             longestWord[i] = ""
             return longestWord.join("") == shortestWord.join("")
        }
    }
    return false
}

console.log("Result",oneAway("pale","ple"), "Expected",true)
console.log("Result",oneAway("pales","pale"), "Expected",true)
console.log("Result",oneAway("pale","bale"), "Expected",true)
console.log("Result",oneAway("pale","bake"), "Expected",false)


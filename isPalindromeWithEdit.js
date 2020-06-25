const isPalindrome = (word)=>{
    let newWord = []
    for(let i=0;i<word.length;i++){
        newWord[word.length-1-i] = word[i]
    }
    return (newWord.join("") == word)
}

const isPalindromeWithEdit = (word) =>{

    if(isPalindrome(word)) return true

    for(let i=0;i<Math.ceil(word.length /2);i++){
        const firstLetter = word[i]
        const lastLetter = word[word.length-1-i]
        console.log(firstLetter,lastLetter)
        if(firstLetter!=lastLetter){
            const firstSubString = word.substring(i+1,word.length-i)
            const lastSubString = word.substring(i,word.length-1-i)
            console.log(firstSubString,lastSubString)
            return (isPalindrome(firstSubString) || isPalindrome(lastSubString))

        }
    }
    return


}

console.log(isPalindromeWithEdit("abcdcaasasdsds"))


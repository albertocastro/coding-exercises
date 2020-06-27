export const description = `Implement a method to perform basic string compression using the counts of repeated characters. For example, 
the string 'aabcccccaaa' would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method
should return the original string. You can assume the string has only uppercase and lowercase letters (a-z) `

export default (string) =>{
    const array = string.split("")
    const newArray = []
    let counter = 0
    let currentLetter = null
    for(let i = 0;i<array.length;i++){
        if(currentLetter === null) currentLetter = array[i]

        if(currentLetter != array[i] || i == array.length-1){
            newArray.push(currentLetter)
            newArray.push(counter)
            counter = 1
            currentLetter = array[i]

        }else{
            counter ++
        }
    }
    if(newArray.length < string.length) return newArray.join("")
    return string

}

export const tests = [

    {input:"aabcccccaaa",result:"a2b1c5a3"},
    {input:"mysupertest", result:"mysupertest"},
    {input:"aaaaajjjjjjjjjjjjd", result:"a5j12"},
]
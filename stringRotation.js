export const description = `
Assume you have a method isStubstring which checks if one word is a substring of another.
 Given two string, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to
  isSubstring(e.g.,"waterbottle" is a rotation of "erbottlewat")
`
//10m
export default ([s1,s2])=>{
    const result = false

    const array1 = s1.split("")
    for(let i=0;i<array1.length;i++){
        array1.push(array1[0])
        array1.splice(0,1)
        let myString =array1.join("")
        if(myString == s2){
            return true
        }
        
    }
    return false
}   


export const tests = [

    {
        input :[
            "waterbottle",
            "erbottlewat"
    ],
    result:true
    },
    {
        input :[
            "anita",
            "itaan"
    ],
    result:true
    },
    {
        input :[
            "started to snowing harder ",
            "to snowing harder started "
    ],
    result:true
    },
    {
        input :[
            "started to snowing harder",
            "to snowing harder started "
    ],
    result:false
    },

]
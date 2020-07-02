export const description = `
Palindrome: Implement a function to check if a linked list is a palindrome.

15m
`

const traverse = (pointer,callback)=>{
    let current = pointer

    while(current!=null){
        const response  = callback(current)
        current= (response===undefined)?current.next:response
    }
  
}
const arrayToList = (array)=>{
    const list = {}
    array.reduce((prev,current,i)=>{

        const elem = {value:current}
        if(i>0){
            prev.next = elem
        }else{
            list.root = elem
        }
        return elem

    },{})
    return list
}
export default (list)=>{
   
    const invertList = (node)=>{

        let result 
        let headPointer = null
        if(node.next){
            result = invertList(node.next) 
        }else{
            let headPointer = {root:{value:node.value}}
            return [headPointer,headPointer.root,]
        }
        
        result[1].next = {value:node.value}
        return [result[0],result[1].next]
        
    }
    let current = 0
    let result = true
    const [invertedList] = invertList(list.root)
    let pointer = invertedList.root
    traverse(list.root,node=>{
        if(node.value != pointer.value){
            result = false
            return null
        }
        if(node == pointer) return null
        pointer = pointer.next
    })

    return result
}   

export const tests = [

    {
        input :arrayToList(["a","b","c",'b','a']),
        result:true
    },
    {
        input :arrayToList(['a','n','i','t','a','l','a','v','a','l','a','t','i','n','a']),
        result:true
    },

]
 
 
 
 
 
 
 
 
 
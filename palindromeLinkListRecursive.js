export const description = `
Palindrome: Implement a function to check if a linked list is a palindrome.

27m
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
   
    const getLast = (node,i,acc=null)=>{

        let result 
        if(!node.next){
            result= -1
        }
        if(node.next){
            result = getLast(node.next,i,acc) 
        }
        
        if(result.value == undefined) {
            result ++
        }else{
            return result 

        }
        if(result==i) result = node
        
        return result 
    }
    let current = 0
    let result = true
    traverse(list.root,node=>{

        const lastNode = getLast(node,current)
        if(node.value == lastNode.value){
            result = true
        }else{
            result = false 
            return null
        }
        current++
        if(node == lastNode) return null
    })

    return result
}   



export const tests = [

    {
        input :arrayToList(["a","b","c",'b','a']),
        result:true
    },
  

]
 
 
 
 
 
 
 
 
 
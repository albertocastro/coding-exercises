export const description = `
Sum Lists: You have two numbers represented by a linked list, where each node contains a single difgit. The digits are stored in revese order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to "cheat" and just convert the linked list to an integer.)

EXAMPLE 
Input:  (7->1->6) + (5->9->2). That is 617+295
Output: 2->1->9

Follow Up suppose the digits are stored in forward order. Repeat the above problem
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
export default ([num1,num2])=>{
   
    const result = {root:{}}
    let acc = 0
    let pointer = num2.root
    let resultPointer = result.root
    traverse(num1.root,(current)=>{
        
        const sum = current.value + pointer.value + acc
        acc = Math.floor(sum/10)
        resultPointer.value = sum % 10
        if(current.next){

            resultPointer.next = {}
            resultPointer = resultPointer.next
            pointer = pointer.next
        }
    })
    const response = []
    traverse(result.root,n=>{
        response.push(n.value)
    })
    return response
}   



export const tests = [

    {
        input :[arrayToList([7,1,6]),arrayToList([5,9,2])],
        result:[2,1,9]
    },
    {
        input :[arrayToList([2,0]),arrayToList([4,5])],
        result:[6,5]
    },

]
 
 
 
 
 
 
 
 
 
export const description = `
Sum Lists: You have two numbers represented by a linked list, where each node contains a single difgit. The digits are stored in revese order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to "cheat" and just convert the linked list to an integer.)

EXAMPLE 
Input:  (7->1->6) + (5->9->2). That is 617+295
Output: 2->1->9

Follow Up suppose the digits are stored in forward order. Repeat the above problem.

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
export default ([num1,num2])=>{
    const getSum = (node1,node2)=>{
        let newNode = {}
        if(!node1.next || !node2.next){
            const sum = node1.value + node2.value
            const value = sum % 10
            const acc = Math.floor(sum/10)
            return [{value},acc]
        }
        const resultingNode = getSum(node1.next,node2.next)
        const sum = node1.value + node2.value + resultingNode[1]
        const acc = Math.floor(sum/10)
        const value = sum % 10
        return [{value,next:resultingNode[0]} ,acc]
    }
    const result = {root:{}}
    let sumNode = getSum(num1.root,num2.root)
    let response = []
    if(sumNode[1]>0){
        result.root = {
            value:sumNode[1],
            next:sumNode[0]
        }
    }else{
        result.root = sumNode[0]
    }
    traverse(result.root,n=>{
        response.push(n.value)
    })

    return response
}   



export const tests = [

    {
        input :[arrayToList([7,1,6]),arrayToList([5,9,2])],
        result:[1,3,0,8]
    },
    {
        input :[arrayToList([2,0]),arrayToList([4,5])],
        result:[6,5]
    },
    {
        input :[arrayToList([6,1,7]),arrayToList([2,9,5])],
        result:[9,1,2]
    },

]
 
 
 
 
 
 
 
 
 
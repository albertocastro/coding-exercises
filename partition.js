export const description = `
Partition: Write code to partition a linked list around a calue 'x'
 such that all nodes less than X come before all nodes greater than or equl to 'x'. (IMPORTAN: The partition element x can appear anywhere in the "right partition"; it does not need to appear netweem the left and right partitions. The additional spacing the example below indicates the patition.)

 EXAMPLE
 Input  3->5->8->5->10->2->1 [partition=5]
 Output  3->1->2   ->   10->5->5->8
30m
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
export default ([l,partition])=>{
   
    let firstPartition = {root:{}}
    let secondPartition = {root:{}}
    let firstPointer = firstPartition.root
    let secondPointer = secondPartition.root
    traverse(l.root,(node)=>{
        if(node.value < partition){
            firstPointer.value = node.value
            firstPointer.next = {}
            firstPointer = firstPointer.next
        }else{
            secondPointer.value = node.value
            secondPointer.next = {}
            secondPointer = secondPointer.next
        }
    })
    firstPointer.value = secondPartition.root.value
    firstPointer.next = secondPartition.root.next
    secondPointer.value = null

    // firstPointer.next = secondPartition.root
    const result = []
    traverse(firstPartition.root,node=>{
        if(node.value!=null)result.push(node.value)
    })
    return result
}   



export const tests = [

    {
        input :[arrayToList([3,5,8,5,10,2,1]),5],
        result:[3,2,1,5,8,5,10]
    },


]
 
 
 
 
 
 
 
 
 
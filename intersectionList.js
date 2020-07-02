export const description = `
Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. 
That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting
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

const invertList = (node)=>{

    let result 
    if(node.next){
        result = invertList(node.next) 
    }else{
        let headPointer = {root:{value:node.value}}
        return [headPointer,headPointer.root,]
    }
    
    result[1].next = {value:node.value}
    return [result[0],result[1].next]
    
}
export default ([list1,list2])=>{
    
    let firstPointer;
    let secondPointer
    traverse(list1.root,node=>{
        firstPointer = node
    })
    traverse(list2.root,node=>{
        secondPointer= node
    })
    return (firstPointer === secondPointer)
    // if(firstPointer,secondPointer){
     
    //     let invertedList1 = invertList(list1.root)[0]
    //     let invertedList2 = invertList(list2.root)[0]
    //     firstPointer = invertedList1.root
    //     secondPointer = invertedList2.root
    //     let result = true
    //     while(result){
    //         console.log(firstPointer.value,secondPointer.value)
    //         if(firstPointer.value!==secondPointer.value){
    //             console.log("here")
    //             result = false
    //         }else{
    //             console.log("next")
    //             firstPointer = firstPointer.next
    //             secondPointer = secondPointer.next

    //         }
    //     }

    // }
    // return result
}   
const list1 = arrayToList([1,3,4,5,6,8,9,32,99,100])
const list2 = {
    root:{
        value:9,
        next:{
            value:10,
            next:{
                value:9,
                next:list1.root.next.next.next.next
            
            }
        }
    }

}
export const tests = [

    {
        input :[list1,list2],
        result:true
    },
 

]
 
 
 
 
 
 
 
 
 
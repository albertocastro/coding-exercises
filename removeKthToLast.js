export const description = `
Return Kth to last: Implement an algorithm to find the kth to last element of a singly linked list
`

const traverse = (pointer,callback)=>{
    let current = pointer

    while(current!=null){
        const response  = callback(current)
        current= (response===undefined)?current.next:response
    }
  
}
const remove = (node)=>{
    
    if(!node.next)return null
    const prev = node
    node.next = node.next.next
    return prev
}
export default ([l,k])=>{
    let list = l
    let firstPointer = list.root
    let secondPointer = list.root
  
    let i=0
    
    traverse(firstPointer,(current)=>{
        if(i==k) {
            secondPointer = current
            return null
        }
        i++
    });
    console.log(secondPointer.value)
    traverse(secondPointer,(current)=>{
        if(!current.next ) return null
        if(current.next.next!=null) firstPointer =firstPointer.next
        
    })
    
    // remove(firstPointer)
    // const result = []
    // traverse(list.root,(current)=>{
    //    result.push(current.value)
        
    // })
   return result
}   

const list = {
    root:{
        value:9,
        next:{
            value:10,
            next:{
                value:9,
                next:{
                    value:1,
                    next:{
                        value:9,
                        next:{
                            value:22,
                            next:{
                                value:35,
                                next:{
                                    value:100,
                                    next:{
                                        value:9,
                                        next:null
                                    }
                                }
                            }
                        }
                    }
                }
            
            }
        }
    }

}
const list2 = {
    root:{
        value:9,
        next:{
            value:9,
            next:{
                value:9,
                next:{
                    value:9,
                    next:{
                        value:9,
                        next:{
                            value:9,
                            next:{
                                value:9,
                                next:{
                                    value:9,
                                    next:{
                                        value:9,
                                        next:null
                                    }
                                }
                            }
                        }
                    }
                }
            
            }
        }
    }

}
const list3 = {
    root:{
        value:1,
        next:{
            value:2,
            next:{
                value:3,
                next:{
                    value:4,
                    next:{
                        value:5,
                        next:{
                            value:6,
                            next:{
                                value:7,
                                next:{
                                    value:8,
                                    next:{
                                        value:9,
                                        next:null
                                    }
                                }
                            }
                        }
                    }
                }
            
            }
        }
    }

}
export const tests = [

    {
        input :[list,8],
        result:[9,1,9,22,35,100,9]
    },
    // {
    //     input :[list2,1],
    //     result:[9,9,9,9,9,9,9,9]
    // },
    // {
    //     input :[list3,1],
    //     result:[1,2,3,4,5,6,7,9]
    // },


]
 
 
 
 
 
 
 
 
 
export const description = `
Remove Dups: Write code to remove duplicates from an unsorted linked list

FOLLOW UP
How would you solve this problem is a temporary buffer is not allowed?
`
//10m
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
export default (l)=>{
    let list = l
    let firstPointer = list.root
    let secondPointer = list.root
    let i=0
    traverse(firstPointer,(current)=>{
        if(!current.next) return null
        const valueToCompare = current.next.value

        traverse(secondPointer,(second)=>{
            if(second === current.next){
                secondPointer = list.root
                return null
            }else{
                
                if(second.value == valueToCompare){
                    // console.log("repeated",valueToCompare)
                    // console.log("parent",current)
                    return remove(current)
                }
            }
        })
    })
    const response = []
    traverse(l.root,current=>{
        response.push(current.value)
    })
   return response
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
                                        value:9
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
        input :list,
        result:[9,10,1,22,35,100]
    },
    {
        input :list2,
        result:[9]
    },
    {
        input :list3,
        result:[1,2,3,4,5,6,7,8,9]
    },


]
 
 
 
 
 
 
 
 
 
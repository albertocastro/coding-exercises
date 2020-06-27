export const description = `Delete Middle node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node)


`

const traverse = (pointer,callback)=>{
    let current = pointer

    while(current!=null){
        const response  = callback(current)
        current= (response===undefined)?current.next:response
    }
  
}

export default ([l,node])=>{
   
    if(node.next.value){
        console.log("next",node.next.value)
        node.value = node.next.value
        node.next = node.next.next
    }
    const response = []
    traverse(l.root,(c)=>{response.push(c.value)})
    return response
}   

const list = {
    root:{
        value:"a",
        next:{
            value:"b",
            next:{
                value:"c",
                next:{
                    value:"d",
                    next:{
                        value:"e",
                        next:{
                            value:"f",
                            next:null
                            }
                    }
                }
            
            }
        }
    }

}

export const tests = [

    {
        input :[list,list.root.next.next],
        result:["a",'b','d','e','f']
    },


]
 
 
 
 
 
 
 
 
 
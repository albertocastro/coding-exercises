const calculateHeight =  (tree,root,currentNode=null)=>{
    
    currentNode = currentNode || root

    if(!currentNode) return 0

   if(!tree[currentNode]) tree[currentNode]= [null,null]

    const leftHeight = calculateHeight(tree,tree[currentNode][0])
    const rightHeight = calculateHeight(tree,tree[currentNode][1])
    

    const maxHeight = (leftHeight> rightHeight)?leftHeight:rightHeight
   
    return maxHeight+1
    
        
}

const inOrderTravers = (tree, node,visit=null,height=0) =>{
    const currentNode = tree[node]
    
    if(node){
        if(currentNode && currentNode [0]) inOrderTravers(tree,currentNode[0])
        if(visit){
            visit(node)
        }else{
            console.log(node)
            } 
        if(currentNode && currentNode [1]) inOrderTravers(tree,currentNode[1])

    }
}
const postOrderTraversal = (tree, node,visit=null) =>{
    const currentNode = tree[node]
    if(node){
        if(currentNode && currentNode [0]) inOrderTravers(tree,currentNode[0])
        if(currentNode && currentNode [1]) inOrderTravers(tree,currentNode[1])
        if(visit){
            visit(node)
        }else{
            console.log(node)
            } 

    }
}
const myTree = {
    // root:4,
    // 4:[2,7],
    // 2:[1,3],
    // 1:null,
    // 3:null,

    root:31,
    31:[16,52],
    16:[7,24],
    24:[19,29]
   
}

console.log(calculateHeight(myTree,myTree["root"]))


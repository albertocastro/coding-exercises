const insert =  (tree,toInsert,currentNode)=>{
    
    currentNode = currentNode || tree["root"]
    
    let direction = null
    direction = (currentNode < toInsert)?1:0

    if(tree[currentNode] && tree[currentNode][direction]) {
        insert(tree,toInsert,tree[currentNode][direction])
    }else{
        if(!myTree[currentNode]) {
            myTree[currentNode]= [null,null]
        }
        myTree[currentNode][direction] = toInsert
    }
    
    
}

const inOrderTravers = (tree, node,visit=null) =>{
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

const myTree = {
    // root:4,
    // 4:[2,7],
    // 2:[1,3],
    // 1:null,
    // 3:null,

    root:15,
    15:[10,20],
    10:[8,12],
    20:[16,25]
}
insert(myTree,9)
insert(myTree,99)
insert(myTree,13)
inOrderTravers(myTree,myTree["root"])
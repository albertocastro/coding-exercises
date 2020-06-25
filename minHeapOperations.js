const insertElement = (tree,element)=>{

    let lastNode = null
    inOrderTravers(tree,tree["root"],(node)=>{lastNode= node})

    if(tree[lastNode][0] && tree[lastNode][1] ){
        console.log("need to insert a new level")
    }
    if(!tree[lastNode][1]){
        tree[lastNode][1] = element
    }else if(!tree[lastNode][0]){
        tree[lastNode][0] = element

    }
    inOrderTravers(tree,tree["root"] )
    
}
const inOrderTravers = (tree, node,visit=null) =>{
    const currentNode = tree[node]
    if(node){
        if(currentNode && currentNode [0]) inOrderTravers(tree,currentNode[0],visit)
        if(visit){
            visit(node)
        }else{
            console.log(node)
          
            } 
        if(currentNode && currentNode [1]) inOrderTravers(tree,currentNode[1],visit)

    }
}
const myTree = {
    // root:4,
    // 4:[2,7],
    // 2:[1,3],
    // 1:null,
    // 3:null,

    root:4,
    4:[50,7],
    50:[55,90],
    7:[87],
}

insertElement(myTree,2)
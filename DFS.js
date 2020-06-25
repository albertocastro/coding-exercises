const DFS =  (tree,currentNode)=>{
    if(tree.visited===undefined)tree.visited = {}
    if(!tree[currentNode]) tree[currentNode] = [null,null]

    if(currentNode===null) return 0
    //Visit
    console.log(currentNode)
    tree.visited[currentNode] = true
    //Visit their neighboards
    for(let node of tree[currentNode]){
        if(!tree.visited[node]){

            DFS(tree,node)
        }
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

    root:0,
    0:[1,4,5,],
    1:[3,4],
    2:[1],
    5:[null],
    4:[null],
    3:[2,4],
}

DFS(myTree,myTree["root"])
const BFS =  (tree,root)=>{
    if(tree.marked===undefined)tree.marked = {}
    
    let queue = [root]
    tree.marked[root] = true

    while(queue.length){

        const node = queue.shift()
        console.log(node)
        if(tree[node]){
            for(let current of tree[node]){
                if(!tree.marked[current]){
                    tree.marked[current] = true

                    queue.push(current)
                }
            }
        }
    
    }
    
}
export default BFS
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
    3:[2,4],
}

BFS(myTree,myTree["root"])
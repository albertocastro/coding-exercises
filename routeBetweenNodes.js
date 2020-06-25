const BFS =  (map,startingPoint,visited)=>{
    if(map.marked===undefined)map.marked = {}
    let queue = [startingPoint.join(",")]
    map.marked[startingPoint] = true
  
    while(queue.length){

        let node = queue.shift()
        let [y,x] = node.split(",")
     
        if(visited){
            visited(node)
        }
        else{
            console.log(node)
        }
       
        for(let j=y-1;j<y+2;j++){
           for(let i=x-1;i<x+2;i++){
                const value = [i,j].join(",")
               if(map[j] && map[j][i] &&  value!=node  ) {
                    if(map.marked[value]===undefined) {
                        map.marked[value] = true
                        queue.push(value)
                    }

               }
           }
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
    3:[2,4],
}

/*
    [ 1, 1, 1],
    [ 1, 0, 1],
    [ 1, x, 1],

*/

const route = ()=>{
    const map = [
        [ 1, 1, 1],
        [ 1, 0, 1],
        [ 1, "x", 1],
    ]
    
    BFS(map,[0,0],(node)=>{
        const [x,y ] = node.split(",")
        
        if(map[y][x] === "x")console.log("suup")
    })
    
}
route()
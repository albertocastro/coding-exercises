const graph = {
    value:4,
    left:{
        value:7,
        left:{
            value:10
        },
        right:{
            value:2,
            right:{
                value:6,
                right:{
                    value:2
                }
            }
        }
    },
    right:{
        value:9,
        right:{
            value:6
        }
    }
}
const BFS = (graph,visit) =>{
    const startingPoing = graph
    let queue = [startingPoing,{value:null}]
    startingPoing.marked= true

    while(queue.length){
        
        const node = queue.shift()
        visit(node)

        if(node.value ===null) {
            queue.push({value:null})
            if(queue.length===1&& queue[queue.length-1].value === null ){
                queue = []
            }
        }
       
        const ways = ["left","right"]
        for(let i in ways){
            way = ways[i]
            if(node[way] && !node[way].marked){
                node[way].marked = true
                queue.push(node[way])
        
              
            }
        }
   
    }

}
const start = () =>{
    let result = []
    let currentLevel = []
    BFS(graph,(node)=>{
        console.log(node.value)
        if(node.value!=null)currentLevel.push(node.value)
        if(node.value === null){
            // console.log(currentLevel)
            const average = (currentLevel.reduce((acc,current)=>acc+current,0))/currentLevel.length
            currentLevel= []
            result.push(average)
        }
    })
    console.log(result)
}
start()

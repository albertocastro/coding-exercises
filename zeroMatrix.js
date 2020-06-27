export const description = "Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0"
//15m
export default (matrix)=>{
    console.table(matrix)

    const newMatrix = []
    for(let y=0;y<matrix.length;y++){
        newMatrix[y] = []
    }
    for(let y=0;y<matrix.length;y++){
       
        for(let x=0;x<matrix[y].length;x++){

            if(matrix[y][x] ==0){
                for(let i=0;i<matrix[y].length;i++){
                    newMatrix[y][i] = 0
                }
                for(let i=0;i<matrix.length;i++){

                    newMatrix[i][x] = 0
                }
            }else{
                if(newMatrix[y][x]!= 0) newMatrix[y][x] = matrix[y][x]
            }
        }
    }
    console.table(newMatrix)
    return newMatrix

}



export const tests = [

    {input :[
        [1,2,3],
        [4,0,6],
        [7,8,9],
        [10,11,12]], 
    result:[
        [1,0,3],
        [0,0,0],
        [7,0,9],
        [10,0,12], 
    ]
    },
    {input :[
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,0,7,8,9,10],
       ], 
    result:[
        [1,2,3,4,5,0,7,8,9,10],
        [1,2,3,4,5,0,7,8,9,10],
        [0,0,0,0,0,0,0,0,0,0],
    ]
    },

]
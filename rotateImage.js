export const description = "Given an image represented by an N X N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees."

export default (matrix)=>{

    const length = matrix.length
    let newArray = []
    let i=0;
    let deep =0;
    for(let i=0;i<length;i++){
        newArray[i]= []
    }
    while(deep <2){

        console.log(deep)
        console.log("=====")
        for(let i=0;i<length - deep*2 ;i++){
            newArray[i+deep][length-1-deep] = matrix[deep][deep+i]
        }
         for(let i=0;i<length- deep*2 ;i++){
            newArray[length-1-deep][length-1-i-deep] =matrix[i+deep][length -1-deep]

        }
         for(let i=0;i<length- deep*2;i++){
            newArray[length-1-i-deep][deep] = matrix[length-1-deep][length-1-i-deep]

        }
         for(let i=0;i<length- deep*2;i++){
            newArray[deep][deep+i] = matrix[length-1-i-deep][deep]
            
        }
        deep++
        console.table(newArray)
    }
    return newArray
}



export const tests = [

    {input :[[1,2,3],[4,5,6],[7,8,9]], result:[[7,4,1],[8,5,2],[9,6,3]]},
    {input :[
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
    ], result:[
        [13,9,5,1],
        [14,10,6,2],
        [15,11,7,3],
        [16,12,8,4],

    ]}

]
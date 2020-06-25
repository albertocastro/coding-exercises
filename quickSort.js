
const quickSort = (array,left,right)=>{
    if(left === undefined) left =0
    if(right === undefined) right = array.length-1

    const partition = (array,left,right) =>{
        const pivot = array[right ]
        // const pivot = array[0]
       // [4 ,3 ,20 ,5 ,2 ,1 ]
        let index=left

        for( let i = left;i<right;i++){
            if(array[i] < pivot){
                const temp = array[i]
                array[i] = array[index]
                array[index] = temp
                index++
            }
        }
        const temp = array[right]
        array[right] = array[index]
        array[index ] = temp
     
        return [array,index]


    }
    
    if(left<right){
        const [newArray,newLeft] = partition(array,left,right)
        quickSort(newArray,left,newLeft-1)
        quickSort(newArray,newLeft+1,right)
        console.log(newArray)
    }
    // console.log(newArray,newLeft,newRight)

    // let left = [array[pivot]]
    // let right = []
    // for(let i=0;i<array.length;i++){

    //     if(array[i] < array[pivot]){
    //         left.push(array[i])
    //     }else{
    //         right.push(array[i])
    //     }
    // }
    // const temp = left[left.length-1]
    // left[left.length-1] = left[pivot]
    // left[pivot] = temp
    // newArray = [...left,...right]
    // console.log(left,right)
    return array
}

// Test Case
const test = 
[
    // {input : [4,3,20,5,2,1], expected : [1,2,3,4,5,20 ]},

    // {input : [6 ,1,9,12 ], expected : [1,6,9,12]},
    {input : [12,11,5,1], expected : [1,5,11,12]},
    // {input : [3,4,6,8,2], expected : [2,3,4,6,8]},
    // {input : [9,8,7,6,5,4,3,2,1], expected : [2,3,4,6,8]},


    
]
test.map(test=>{

    const result =quickSort(test.input)
    const color = (result ) ? "\x1b[32m":"\x1b[31m" 
    console.info(color,`Input: ${test.input} Result : ${result}`);
})

const sortBubble = (array)=>{

    for(let j=0;j<array.length-1;j++){

        for(let i=0;i<array.length;i++){

            if(array[i] > array[i+1]){
                const temp = array[i+1]
                array[i+1] = array[i]
                array[i] = temp
            }
        }
    }

    return array
}

export default {code:sortBubble
}

// export const execution
// Test Case
// const test = 
// [
//     {input : [6 ,1,9,12 ], expected : [1,6,9,12]},
//     {input : [12,11,5,1], expected : [1,5,11,12]},
//     {input : [3,4,6,8,2], expected : [2,3,4,6,8]},


    
// ]
// test.map(test=>{

//     const result =( JSON.stringify(sortBubble(test.input)) === JSON.stringify(test.expected))
//     const color = (result ) ? "\x1b[32m":"\x1b[31m" 
//     console.info(color,`Input: ${test.input} Result : ${result}`);
// })
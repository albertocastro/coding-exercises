
const isColorfulNumber = (num)=>{

    const allNumbers = {}
    const array = num.toString().split("")
    let result = true
    for(let i =0 ;i< array.length;i++){
        
        const lengthToTake = i+1

        array.map((elem,index)=>{

            let numberToTake = []

            for(let j=0;j<lengthToTake;j++){
                if(array[index+j]){
                    numberToTake.push(array[index+j])
                }
            }
            if(numberToTake.length === lengthToTake){

                const product = numberToTake.reduce((acc,current)=>(current*acc),1)
                
                if(allNumbers[product] ===undefined ){
                    allNumbers[product] = true
                }else{
                    result = false;
                }
                
            }

        })
        
    }
    return result
}


const input = 3245
// Test Case
const test = 
[
    {input : 3245, expected : true},
    {input : 326, expected : false}
]
test.map(test=>{

    const result = isColorfulNumber(test.input)
    const color = (result === test.expected) ? "":"\x1b[31m" 
    console.info(color,`Input: ${test.input} Result : ${result}`);
})
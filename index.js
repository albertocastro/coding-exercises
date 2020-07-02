import exercise,{description,tests} from "./minimalTree.js"


console.log(description)

tests.map(test =>{
    const result = exercise(test.input)
    console.log("==============================")
    console.log("Input:",test.input)
    console.log(`Output:     ${result}`)
    console.log(`Expected:   ${test.result}`)
    if(JSON.stringify(result) == JSON.stringify(test.result)){
        console.log(`Result: `,"\x1b[32m","Passed")
    }else{
        console.log(`Result: `,"\x1b[31m","Failed")
    }
    console.log("\x1b[0m")
})
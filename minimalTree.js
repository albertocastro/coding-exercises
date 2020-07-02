export const description = `
Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

`
let tree = {}
const getNode = (min,max,root)=>{

    let left = Math.floor((max -min)/2)
    let right = Math.floor((max -min)/2)
    
    console.log(left)
    console.log(right)

    
}

export default (array)=>{
   
    let middle = Math.ceil(array.length/2)+1
   
    getNode(0,middle,middle)
    
    
    
}   

/**
 *  [ 1, 2, 3, 4, 5, 6]
1) Get the Middle of the array and make it root.
2) Recursively do same for left half and right half.
      a) Get the middle of left half and make it left child of the root
          created in step 1.
      b) Get the middle of right half and make it right child of the
          root created in step 1.
 */
export const tests = [

    {
        input :[1,2,3,4,5,6],
        result:["a",'b','d','e','f']
    },


]
 
 
 
 
 
 
 
 
 
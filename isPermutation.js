// Given two strings, write a method to decide if one is a permutation of the other.
//4m

const isPermutation = (string1,string2) => {

    const array1 = string1.split("").sort()
    const array2 = string2.split("").sort()

    return (array1.join("") === array2.join(""))


}



console.log(isPermutation("mystring","strnigmy"))
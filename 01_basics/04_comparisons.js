// comparison of data types

//imp: comaprison < > >= <= and == eqaility check both are different 

//imp: dont use these types of comparison in your code , disturbs readability and create confusion , remember always use same data types for comparison

console.log("2" < 2 )
console.log("2" == 2 )

//comparison < > <= >= converts null into 0 , eqaulity == checks not convert it 0 it converts into NaN 

console.log(null < 0 )
console.log(null > 0 )
console.log(null == 0)
console.log(null >= 0 )
console.log(null <= 0 )

//always return false in comparison cases
// console.log(undefined < 0 ) 
// console.log(undefined == 0 )
// console.log(undefined >= 0)

//strict check === (not support conversion)

console.log("2" == 2 )
console.log("2" === 2 )


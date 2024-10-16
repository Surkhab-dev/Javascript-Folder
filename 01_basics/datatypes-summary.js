// Primitive (call by value means in which we perform operation on copy data not reference data)

// 7 types 
// String ,
// Number, 
// Boolean, 
// Null: (var is intialize but not empty) , 
// undefined: (var is not intialize and empty) , 
// symbol(use to make any value unique) , 
// bigInt (used for big numbers)


// Non-Primitive ( Reference ) means 

//arrays
//objects
//functions


// imp ques : javascript is dynamically type or static type?

// In js we dont need to define the type of any variable 

const score = 100 // int
const scoreValue = 100.3 // decimal

const isLoggedIN = false // boolean
const outsideTemp = null //null

let userEmail = undefined // let userEmail; are same

const id = Symbol('123')  //return type will be symbol
const anotherId = Symbol('123');

//console.log(id === anotherId); // false

//imp always use names that makes sense

const bigNumber = 232632735625672565622753625365262n

const heros = ["shaktiman", "naagraj"]

//objects (values inside curly braces are object)
//any data type can be store as object eg: string, number, boolean , function , array or other object)

// {
//     name: "surkhab",
//     age : 22,
// }

// to store this object you can use varaiable
let myObj = {
   name: "surkhab",
   age : 22,
}

//functions :

//default method
function myfun(){
    console.log("hello world");
}

// how to treat functions as variables

const myFunction = function (){
    console.log("hello world");
}

//how to know type of any variable or value:

// typeof is used

//all non-primitive return types are objects

console.log(typeof bigNumber);
console.log(typeof myFunction); // function returns function but specially this is called object function
console.log(typeof null);

//assignment : return types summary of all data types
//ans:JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack and heap memory
//datatypes are based on memory allocation

// call by value OR Primitive data types (string,number,boolean,null,undefined,BigInt,symbol) uses => [stack memory]
// call by reference OR Non-primitive data types ( array,object, function) uses => [heap memory]

let myYoutubeNameIs = "SurkhabChannel"


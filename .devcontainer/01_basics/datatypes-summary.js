// Primitive

// 7 types A: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100                                        //typeof  = number
const scoreValue = 100.3                                 //typeof  = number

const isLoggeIn = false                                  //typeof  = boolean
const outsideTemp = null                                 //typeof  = object
let userEmail;
const id = Symbol('123')                                 //typeof  = symbol
const anotherId = Symbol('123')                          
console.log(id === anotherId);


// Reference (Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];          //typeof  = object
let myObj = {                                            //typeof  = object
       name: "hitesh",
       age: 22,
}

const myFunction = function(){                           //typeof  = function
    console.log("Hello world");
}

console.log(typeof myObj);




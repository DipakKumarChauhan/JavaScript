// Singleton
//Object.create -> way to make using constructor

//object Literals

//symbol
const mySym = Symbol("key1")


const JsUser = {
    name : "Dipak",
    "full name": "Dipak Chauhan", // this cant be accessed using dot way JsUser.email
   // mySym : "mykey1", // this will though print mykay1 but its data type is not symbol
   [mySym]: "mykey1" , // this is used as a symbol 
   age : 22,
    location: "Kolkata",
    email : "dipak@gmail.com",
    lastLoginDays: ["Monday","Saturday"]

}

// to access this we do

// console.log(JsUser.email) // One old and mostly used
// //other ways to do it
// console.log(JsUser["email"])

// console.log(JsUser["full name"])

// console.log(JsUser[mySym]) // Way to print symbol.

// to changevalues
JsUser.email = "dipak@gpt.com"

// console.log(JsUser["email"])


// to lock object we do freeze

//Object.freeze(JsUser) // we cant change the values
JsUser.email = "dipak@freeeze.com"

//console.log(JsUser["email"]) // this will print gpt wala

JsUser.greeting = function(){
    console.log("hello Js user")
}

//console.log(JsUser.greeting)
//console.log(JsUser.greeting()) 

// to reference the same object in the function we use " this.KeyName "
JsUser.greeting2 = function(){
    console.log(`hello Js user, ${this.name}`)
}
// console.log(JsUser.greeting2())

/////////////////////////////////////////////////////////////////////////////////////////


const TinderUser2 = new Object(); //Singleton object
const TinderUser = {} ; // Non Singleton object

TinderUser.id = "123abc"
TinderUser.name = "Sam"
TinderUser.isLoggedIn = false

//console.log(TinderUser) 

// we can do as much nesting as we want

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Dipak",
            lastname: "choudhary"

        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname)
// here question mark protects us if fullname doesnt exist then dont go

//Combine two object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1,obj2} // this will give object ke andar object

const obj4 = Object.assign({},obj1,obj2) // this merges both object to single object
// console.log(obj3)
// console.log(obj4)

    // mostly used way is spread
const obj5 = {...obj1,...obj2}
//console.log(obj5)

// to recive values from data base 
// we recive them as an array of object in csv format so we do

//Let Users be data from db

const Users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "b@gmail.com"
    },
    {
        id: 4,
        email: "c@gmail.com"
    },
    {
        id: 5,
        email: "e@gmail.com"
    },
    
]

// to access email of 1st object we do Users[object number].email

//console.log(Users[1].email)

// To access the keys and values of an object into a form of array we do 

//console.log(Object.keys(TinderUser)) // will help in a lot of ways while accessing db

//console.log(Object.values(TinderUser))

// console.log(Object.entries(TinderUser))

//console.log(TinderUser.hasOwnProperty("isLoggedIn"))


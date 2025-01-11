const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // "this." is used to use variables from current context
        console.log(this); // this displays current context in o/p
    }

}

// user.welcomeMessage()
// user.username = "sam" // this code changes the context
// user.welcomeMessage()

// console.log(this); // this will give o/p as "{} " coz we r in node enviornment and its an empty object but if we do this in inspect console then o/p will be window global object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
    // console.log(this) // this will give all the context ibject of function
//     console.log(this.username); // this will give undefined so generally we can't use this inside functions
// }

// //Arrow Function.

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

    // // Different Types of Arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // if we use ' {} ' then we have to return something

// const addTwo = (num1, num2) => ({username: "hitesh"}) // even for object we need to wrap it in ' () '


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
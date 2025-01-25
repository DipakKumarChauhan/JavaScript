// Advance Topic
// Here we Learn How to define Properties of Key's of an Object

const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // this line gets us all the properties of Object's key value PI

console.log(descripter); // this will print all the properties stored in descripter valiable

// below is the value we can see 
// {
//     value: 3.141592653589793,
//     writable: false, // this line is so hardcoded in c++ that we can not change it
//     enumerable: false,
//     configurable: false
// }


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// If we want to add our own properties or change some properties below is how we do

// Object.defineProperty(objectName, 'Key we want to change properties of', {
//     //writable: false, // properties we want to change
//     enumerable: true,
    
// })

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Note motsly objects are not iterable so we can use for loop on chai so we use Object.entries(chai)
for (let [key, value] of Object.entries(chai)) {
    // below line says ki tabhi print karo jab function na ho
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//How to know an object is empty or not
const emptyObj = {}

    // Here Object.keys will convert all the keys of emptyObj into an array then we check the length of the array we made
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/*
    false == 0 -> gives true
    false == '' -> gives true
    0 == '' -> gives true
*/



// Nullish Coalescing Operator (??): null undefined

let val1;
let val2;
let val3;
let val4;

val1 = 5 ?? 10
val2 = null ?? 10 // here genereally we assign a complex function(used to fetch data from DB) in place of 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20 // here 10 will be assigned not 20



console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// for of Loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps -> Store Unique key value pair and it stores in the order we stored them

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) // This use of [key,value ] de-structures the map array and helps us get only the value of key
    {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// we can not iterate objects using for of loop
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


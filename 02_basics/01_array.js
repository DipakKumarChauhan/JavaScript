// array
const myArr = [0,1,2,3,4] // we can store mixed data in array i.e int,bool,string etc

// Array in js makes shallow copies (instead of deep copies)
// a shsllow copy of an object is a copy whoes properties share the same reference (pointto same underlying values)
//as those of the source object from which the copy was made

// Deep copy doesnt share the same reference point.

// another way to declare array
const myArr2 = new Array(1,5,3,6,7,8)

// Array methods
myArr.push(6)
// console.log(myArr)

myArr.pop();
//console.log(myArr)

myArr.unshift(9) // this adds a 9 at 1st place. 
//console.log(myArr)

myArr.shift()
//console.log(myArr)

// console.log(myArr.includes(10));
// console.log(myyarr.indexof(3));

const newArr = myArr.join()
//console.log(myArr)
//console.log(newArr) // its type is string now

//slice and splice

// console.log("A" , myArr)
// const myn1 = myArr.slice(1,3)
// console.log(myn1)
// console.log("B" , myArr)

// const myn2 = myArr.splice(1,3)
// console.log(myn2)
// console.log("C" , myArr)

// splice not just include the 3rd indexed element but it also changes value of myArr to (0,4) 
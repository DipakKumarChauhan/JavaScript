// we can use temporals for dates see docs in wdma
let myDate  = new Date() // this is object type

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())

let mycreatedDate = new Date(2023,0,23) // in js months start from zero
console.log(mycreatedDate.toDateString());
let mycreatedDate2 = new Date(2023,0,23, 5,3)
console.log(mycreatedDate2.toLocaleString());

//For YY/MM/DD format and other we doo
let mycreatedDate3 = new Date("2023-1-25") //here month start from 1
console.log(mycreatedDate3.toLocaleString())

let mycreatedDate4 = new Date("01-12-2023") // cant give space
console.log(mycreatedDate4.toLocaleString())

// Time Stamps

let mytimestamps = Date.now()
// console.log(mytimestamps);
// console.log(mycreatedDate4.getTime()); // this gices exact time

// to get in seconds

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay()); 

// Locale String is an object
// here default is internationalization ,  use ctrl + space to accesssall parameters
newDate.toLocaleString('default', 
    {
        weekday: "long",
        
    }
)

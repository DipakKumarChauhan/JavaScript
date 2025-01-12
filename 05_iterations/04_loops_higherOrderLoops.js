// For in Loop -> this gets the keys of thing we iterate through
// Itereating through object
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) // here agar sirf key ko print karenge to js,cpp wala section hi print hoga coz wahi key hai
{
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// For in loop is not iteratable for Maps
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


////////////////////////////\/\For Each Loop/\/\////////////////////////////

const coding = ["js", "ruby", "java", "python", "cpp"]

// for Eaxh Loop uses callback Function and callback Function doesnt have a name
// coding.forEach( function (val){
//     console.log(val);
// } )

// Using arrow Function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// // As Function kahin aur defined hai so humko uska naam dena hoga as a callback Function

// coding.forEach(printMe)

// Note For Each sirf Item nahi balki index and pura array bhi leke ata hai
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// Here we have an array of object
// THis is how we iterate objects in array form
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
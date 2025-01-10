const name ="Dipak"
const repoCount = 10

// to concatenate
// console.log(name + repoConut + " Value"); // --- on name is typescript function in js

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

//here we can use methods on variables

const gameName = new String('GodDipak')

// console.log(gameName[0])

// console.log(gameName.__proto__)

// console.log(gameName.length)

// console.log(gameName.toUpperCase()); // this doesnt change original string
// console.log(gameName.charAt(2))

// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4);
console.log(newString)

const string2 = gameName.slice(-9 ,5)
console.log(string2)

//to trim string
const name2 = "    Dipak  "
console.log(name2)
console.log(name2.trim())

//replace function

const url = "https://dipak.com/dipak%20chauhan"

// console.log(url.replace('%20', '-'))
// console.log(url.includes('dipak'))
// console.log(url.includes('sundar'))

console.log(gameName.split('-'));

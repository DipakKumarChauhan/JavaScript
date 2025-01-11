const marvel_heros = ["thor" , " Ironeman" , "spiderman"]
const dc = ["superman" , " flash" , "batman"] 

//marvel_heros.push(dc)

// console.log(marvel_heros) // this will push array inside an array

// o/p
// [
//     'thor',
//     ' Ironeman',
//     'spiderman',
//     [ 'superman', ' flash', 'batman' ]
// ]

// to acccess flash we do

// console.log(marvel_heros[3][1])

// Concat
//const allHero = marvel_heros.concat(dc) // concat creates a new array 
//console.log(allHero); // [ 'thor', ' Ironeman', 'spiderman', 'superman', ' flash', 'batman' ]

// spread Operator

// const allHero2 = [...marvel_heros,...dc] // this is spread operator and it spreads all the element of both array.

// console.log(allHero2) //[ 'thor', ' Ironeman', 'spiderman', 'superman', ' flash', 'batman' ]



// Flat operator -> used if one array has morethan one array inside them and we need to flatten them then we use that.

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realArray = anotherArray.flat(Infinity) // here inifinity is the depth till which we want it to flatten

// console.log(realArray)


// to check and convert an array
console.log(Array.isArray("Dipak")) // checks if its an array
console.log(Array.from("Dipak")) // converts into an array

console.log(Array.from({name : "Dipak"})) // this will give empty array coz "from" operator won't be able to identify ki kisko array banana hai



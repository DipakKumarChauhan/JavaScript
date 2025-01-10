// to guarantee a variable is number data type we use
const balance  = new Number(100);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // this gives decimal of 2 digit

 const num2 = 23.8966; // 123.89; //1123.4; 

// console.log(num2.toPrecision(3)); //sirf 1st 3 digits (decimal ke pehle) tak ka hi round off karega uske baad exponential me le jayega

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) // this adds comma by default it adds in Us standarads

// To generate a random number between 0-1
console.log(Math.random());

console.log((Math.random()*10) +1); // to get values b/w 1-10 
console.log((Math.floor(Math.random()*10) +1)); // to get values rounded off we can use round / ceil /floor
const min =10
const max =20
console.log(Math.floor( Math.random() * (max-min + 1)) +min)


// Immediately Invoked Function Expressions (IIFE)
//this is a function that is executed immidiately.
// a lot if time problem occurs from global scope polution and to remove that we use IIFE

//(Function_definatio)(Execution_Call) -> syntax meaning

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // note here semicolon is very important coz js doesnt know ki rokna kahan hai 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

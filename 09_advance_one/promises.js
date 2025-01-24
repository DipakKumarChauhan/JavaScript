// Using Promise stored in one variable
const PromiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise one runned")
        resolve() // if we dont do this then we wont be able to connect to .then of promise 
    }, 1500)
    // resolve() // if we write resolve here then we will see "Promise one completed" first
}) 

PromiseOne.then(function(){
    console.log("Promise one completed");
})

//Using Promise directly
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise 2 async runned");
        resolve()
    },1500)
}).then(function(){
    console.log("async 2 completed")
})

const PromiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        // In resolve whatever data we pass it is epected to be object(we can use array or map even) , and this passed data can be accessed in .then function coz 
        // in .then function it is expected that resolve data is passed as a parameter into the function 
        resolve({username: "Dipak", email: "dipak@gmail.com"})
    },1500);
}) ;

PromiseThree.then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"DipakChauhan" , pass: "123"});
        } 
        else{
            reject('Error: Something went Wrong')
        }
    },1500)
})

// Chaining .then()

// Note we cannot return username in different varibale like Username = PromiseFour.then(function(user){.. this will give error
PromiseFour.then(function(user){
console.log(user);
return user.username;
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(function(){console.log('Finally the promise is resolved or rejected')})

//.finally() hamesha run karega agar promise sahi likha hai

// Using Async Await in Promise

const promiseFive = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        let error = true
    if(!error)[
        resolve({username:"JavaScript", password: "1234"})
    ]
    else{
        reject('Error: JS Went Wrong')
    }
    },1500)
    
});

async function consumePromiseFive() {
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive()


async function getAllUsers(){
   try {
    const response = await  fetch('https://jsonplaceholder.typicode.com/users')
    // const data = response.json(); // this line also takes time to run so we need await here too
    const data =  await response.json();
    console.log(data);
   } catch (error) {
    console.log("Error: " , error);
   }
}

getAllUsers();

// Doint this same thing using .then 

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
console.log(data);
})
.catch(function(error){
    console.log(error)
})



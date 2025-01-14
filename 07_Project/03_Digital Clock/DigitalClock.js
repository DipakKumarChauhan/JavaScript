const clock = document.getElementById('clock')

// we can use document.querySelector('#clock') too
// let date  =   new Date()
// console.log(date.toLocaleTimeString()); // this will give local time everytime we refresh

// But we need a method that runs everytime and without refreshing 

// We will use set interval method this is used to tell in what interval we want a event to run on web page

//setInterval(function(){} , time in mili sec)

setInterval(function () {
    let date  =   new Date() // this line gives us time an date object
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

docuument.addEventListener(()=>{

})
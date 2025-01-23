// generate a random color

const randomColor =  function () {
    const hex = "0123456789ABCDEF";
    let color  = '#';
    for(let i = 0 ; i < 6 ; i++)
    {
        color += hex[Math.floor(Math.random() * 16)]; 
    }
    return color;
};

let IntervalId;
const startChangingcolor= function(){
   function changeBGC() {
    document.body.style.backgroundColor =randomColor();
   };
   if(!IntervalId){
    IntervalId = setInterval(changeBGC , 1000)
    
   }
   
};
const stopChangingcolor= function(){
    // function stopchangeBGC() {
    //  document.body.style.backgroundColor =randomColor();
    // };
     clearInterval(IntervalId);
     // here everytime we call clear Interval we overwrite IntervalId so we need to flush out it
     IntervalId = null; // now the edgee case is solved.

     
 };


const startButton = document.querySelector('#start').addEventListener('click', startChangingcolor)

const stopButton = document.querySelector('#stop').addEventListener('click', stopChangingcolor)



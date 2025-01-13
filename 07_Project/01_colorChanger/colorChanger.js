// Importing the JSDOM class from jsdom
// const { JSDOM } = require("jsdom");
// const fs = require("fs");

// // Load the HTML file (assuming it's in the same directory as the script)
// fs.readFile("07_Project/01_colorChanger/index.html", "utf8", (err, htmlContent) => {
//   if (err) {
//     console.error("Error reading the HTML file:", err);
//     return;
//   }

//   // Create a new DOM environment with the HTML content
//   const dom = new JSDOM(htmlContent);

//   // Access the 'document' object from the created virtual DOM
//   const document = dom.window.document;

  // Example: Querying the DOM to get all elements with class 'button'
  const buttons = document.querySelectorAll('.button');
  //console.log(buttons);  
  const body = document.querySelector('body')

  buttons.forEach(function (button) {
    //console.log(button.id)
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        
        if(e.target.id ==='grey')
            {
                body.style.backgroundColor = e.target.id;
            }
        else if(e.target.id ==='white')
            {
                body.style.backgroundColor = e.target.id;
            }
        else if(e.target.id ==='blue')
            {
                body.style.backgroundColor = e.target.id;
            }
        else if(e.target.id ==='yellow')
            {
                body.style.backgroundColor = e.target.id;
            }
    })


  })

//});

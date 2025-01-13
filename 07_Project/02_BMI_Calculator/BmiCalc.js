// Here We have form in html code so we need to get complete form in  document coz everyhting including submit button is in the form

const form =document.querySelector('form')

//THIS use case will give empty value
// const height = parseInt((document.querySelector('#height')).value) // here we use #height coz its an id of form
    
// whenever we submit a form its url is sent to server but coz we are not using any serve we have to stop it
form.addEventListener('submit', function(e)
{
    e.preventDefault() // this stops from sending the url of form to server

    /* We write these selector statements in the form Event Listener coz we want to store the values in height and weight
        after user clicks but if we write it above then emepty values will be stored in height coz script runs as soon as it 
        loads the web page.
    */
    const height = parseInt((document.querySelector('#height')).value) // here we use #height coz its an id of form
    const weight = parseInt((document.querySelector('#weight')).value)
    const results = (document.querySelector('#results'))
    
    // "isNaN(height) " -> this line is simply height != NaN
 
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Enter valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Enter valid weight ${weight}`
    }
    else
    {
        const BMI = (weight/((height * height) / 10000)).toFixed(2)
        // Show BMI in result
        // results.innerHTML = `<span>${BMI}</span>`;
        if(BMI < 18.6)
        {
            results.innerHTML = `Your BMI is : <span>${BMI}</span>  Your height: ${height} and your weight ${weight} after calculating BMI says you are under weight`;
        }
        else if(BMI >= 18.6 && BMI <= 24.9)
            {
                results.innerHTML = `Your BMI is : <span>${BMI}</span> Your height: ${height} and your weight ${weight} after calculating BMI says you are normal weight`;
            }
        else 
        {
            results.innerHTML = `Your BMI is : <span>${BMI}</span> Your height: ${height} and your weight ${weight} after calculating BMI says you are over weight Motka Sala`;
        }
    }
    

})




const User = {
    _email: 'h@hc.com',
    _password: "abc",

// in _email -> " _ " means a private property is defined
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// Though this method is weird but  here we can use factory function and access them directly
const tea = Object.create(User)
console.log(tea.email);

// So get generally overwrites the property of the object so even if we use tea.email we can see value printed coz
// get and set simply overwrites the property 

//For user Get and set methods are actually a propety only
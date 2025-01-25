// Old way of using getter setter

function User(email, password){
    this._email = email;
    this._password = password

 // Syntax  //  Object.defineProperty(this, property_key , object we want to define {})
    
  Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);

// To see object based defination of same thing see object_get_set.js file.
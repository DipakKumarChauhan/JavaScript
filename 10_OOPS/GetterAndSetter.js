class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //Get bahar se object se value agar koi mangta hai(get karta hai) tho kya bhejna hai vo getter me define hota hai
    // Set ka kaam hota hai ki bahar se andaar koi value ayi tho object ya object ke instance me konsi value store karni hai ye define karta hai

    // note getter setter bana ne ke liye name must be same as the name of property
    
    get email(){
        return this._email.toUpperCase() // always return getter
    }
    set email(value){
        this._email = value // we never return setter
    }

    // Note below in place of password we used " _password " which is a new variable name coz if we used same variable name then both (setter,getter) and constructor  will try to use password causing error 
    // So using _password for both set and get helps us to use them
   
    // set email(value){
    //     this.email = value // this starts a race condition in between setter and constructor defined above
    // }

   
    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

// To see Old method see properties_get_set.js file
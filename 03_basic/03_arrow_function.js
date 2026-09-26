const user=
{
    username:"hitesh",
    price:900,
    welcomeMessage:function()
    {
        console.log(`Welcome ${this.username} your price is ${this.price}`);
        console.log(this)
    },
    
    // this keyword is used to refer to the current context of the object. In this case, it refers to the user object itself.
    
}
user.welcomeMessage();
user.username="sam";
user.welcomeMessage();

console.log(this);

//in browser this will refer to the window object and in node.js it will refer to the global object.
function chai()
{
    let username="hitesh";
    console.log(this);//this will refer to the global object in node.js and window object in browser.it has so many properties and methods.
    console.log(this.username);//this will be undefined because username is not a property of the global object.
}

//arrow function
const chai=()=>
{
    let uername="hitesh";
    console.log(this);//this will print {} because arrow function does not have its own this context, it takes the this value from the enclosing lexical context.
}
chai();
const addTwo=(num1,num2)=>
{
    return num1+num2;
}
console.log(addTwo(5,10));

//this can also be written using excpict return
const addThree=(num1,num2,num3)=>num1+num2+num3;
const addFour=(num1,num2,num3,num4)=>(num1+num2+num3+num4);//if we will { } then have to return if ( we will not use { } then it will return automatically) 
console.log(addThree(5,10,15));
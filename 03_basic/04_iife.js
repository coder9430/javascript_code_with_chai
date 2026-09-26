//immediately invoked functions expression(IIFE)
//IIFE is a function that runs as soon as it is defined and also use to avoid global scope pollution and also used to create a private scope for variables and functions.
(function chai()
{
    //named IIFE
    console.log("DB CONNECTED");
})();// here ; is required to end the scope of the function if we will not use ; then it will give error because it will consider the next line as a function call and it will give error because the next line is not a function call.
//(defined function)(this for the inmidiate function call)
((name)=>
{
    console.log(`Welcome ${name} to the world of IIFE`);
})("hitesh");

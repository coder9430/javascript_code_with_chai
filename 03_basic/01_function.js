function sayMyName()
{
    console.log("John Doe");
}
sayMyName();//function call

function addTwoNumbers(num1, num2)
{
    return num1 + num2;
}
const result=addTwoNumbers(5, 10);//function call with arguments
//argument and parameter are different, parameter is a variable in the declaration of function and argument is the actual value passed to the function.
console.log(result);

function loginUserMessage(username="Guest")
{
    // we can also set the default value ,if no argument is passed then the default value will be used otherwise the passed argumnet will be printed.
    // if(username === undefined)
    // {
    //     console.log("Please provide a username");
    //     return;
    // }
    // can also be written as below
    if(!username)
    {
        console.log("Please provide a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Alice"));
// the angument is not paseed and if we will try to print the user name it will return undefined because the parameter is not passed any value.
function calculateCartPrice(val1,val2,...num1)
{
    //... it is called rest operator, it will take all the arguments passed to the function and store them in an array.  
    // using this we can pass any number of anguments to the function.

    return num1;
}
console.log(calculateCartPrice(10,20,30,40,50,60));//[30, 40, 50, 60]
// how to can an object in a function
const user={
    username:"John",
    price:100,
}
function handleObject(anyObject)
{
    console.log(`${anyObject.username} has a cart price of ${anyObject.price}`);
}
handleObject(user);
// how to can an array in a function
const myNewArry=[1,2,3,4,5];
function handleArray(anyArray)
{
    console.log(`The array is ${anyArray}`);
}
handleArray(myNewArry);

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

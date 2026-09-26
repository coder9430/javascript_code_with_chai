
//{} this is called block scope, the variable declared inside the block will not be accessible outside the block.
if(true)
{
    let a=10;
    const b=20
    var c=30;
}
// console.log(a)-can't be accessed outside the block scope
// console.log(b)-can't be accessed outside the block scope
// console.log(c)-can be accessed outside the block scope because var is function scoped.
function one()
{
    const usrname="hitesh";
    function two()
    {
        const website="u tube"
        console.log(usrname)
    }
    //console.log(website) //can't be accessed outside the block scope
    two()
}
one();

if(true)
{
    const username="hitesh";
    if(username==="hitesh")
    {
        const website="u tube";
        console.log(username+" "+website);

    }
   // console.log(website) //can't be accessed outside the block scope
}
//console.log(username);//can't be accessed outside the block scope
//++++++++++++++intresting+++++++++++++++
//hosting 
addone(5);
function addone(num)
{
    return num+1;
}

//addTwo(5); //this will give error because function expression is not hoisted
const addTwo=function(num)
{
    return num+2;
}
addTwo(5);
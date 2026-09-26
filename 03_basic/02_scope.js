
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
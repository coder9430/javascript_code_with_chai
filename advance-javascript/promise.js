const promisOne=new Promise(function(resolve,reject)
{
    //do an async task
    //DBcalls,network
    setTimeout(function()
    {
        console.log('Async task is completed')
        resolve()
    }, 1000)
})
promisOne.then(function()
{
    console.log('Promis consumned')
})
new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        console.log("Async task2 completed");
        resolve()
    },1000);

}).then(function(){
    console.log("Promise2 consumed");
})

//data consumption

const promiseThree=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        resolve({userName:"sapna",email:"sapna@godigit.com"})
    },1000);
})
promiseThree.then(function(user)
{
    console.log(user);
})

// reolve or reject

const promiseFour=new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        const error=true;
        if(!error)
        {
            resolve({userName:"sapna",email:"sapna@godigit.com"})
        }
        else{
            reject('Error:something went wrong');
        }
    },1000)
    
})
promiseFour
.then((user)=>
{
    console.log(user);
    return user.userName
})
.then((userName)=>
{
    console.log(userName);
})
.catch(function(error)
{
    console.log(error);
}).finally(()=>
{
    console.log("this run either promise get resolved or reject");
})


//using async and await

const promiseFive=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        const error=true;
        if(!error)
        {
            resolve({userName:"javascript",password:"123"});
        }
        else{
            reject("Error:something get wrong");
        }
    },1000)
})
async function consumePromiseFive()
{
    try{

        const response=await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
//async and await can not handel the error itself.
consumePromiseFive();
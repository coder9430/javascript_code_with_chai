const myNums=[1,2,3];
const myTotal=myNums.reduce(function (accumulator,currentValue)
{
    console.log(`ass:${accumulator},currVal:${currentValue}`)
    return accumulator+currentValue;
},3)
// we have to provide a inital value to the accumulator here it is zero
//using arrow function
const myTotal2=myNums.reduce((accumulator,currentVal)=>{
console.log(`ass:${accumulator},currVal:${currentVal}`);
return accumulator+currentVal
}
,3)
const courses=[
    {name:"js",price:2999},
    {name:"java",price:3999},
    {name:"python",price:4999},
]
const Total=courses.reduce((accumulator,item)=>{
   
    return accumulator+item.price
},0)
console.log(Total)

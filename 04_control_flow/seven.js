const myNumbers=[1,2,3,4,5,6,7]
const newNumbers=myNumbers.map((num)=>num*2);
console.log(newNumbers);

//chaining
const newNums=myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40);
console.log(newNums);
//we can use multiple method at a time which is called chaining
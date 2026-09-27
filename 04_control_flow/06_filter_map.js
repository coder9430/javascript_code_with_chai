const coding =['js','java','python',"cpp"];
const values=coding.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values)

// for each do not return anything 
const myNum=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNum.filter((num)=>{
if(num>4)
{
    return num
}
})
console.log(newNums)
//filter function also except call back functin as argumnets
// and it return an array
const books=[
    {title:"Book one",genre:"Non-Fiction",publish:1981,edition:1989},
    {title:"Book two",genre:"history",publish:1981,edition:1989},
    {title:"Book three",genre:"science",publish:1981,edition:1989},
    {title:"Book four",genre:"Non-Fiction",publish:1981,edition:1989},
    {title:"Book five",genre:"science",publish:1981,edition:1989},
    {title:"Book six",genre:"history",publish:1981,edition:1989},
    {title:"Book seven",genre:"Fiction",publish:1981,edition:1989},
    {title:"Book eight",genre:"Fiction",publish:1981,edition:1989},

]
const userBooks=books.filter((bk)=>
{
  if(bk.genre==="history")
  {
    return bk;
  }
})
const userBook2=books.filter((bk)=>bk.genre==="history");
console.log(userBook2);
console.log(userBooks);

//for of

const arr=[1,2,3,4,5,6];
for(const element of arr)
{
    console.log(element);
}
//maps
const map=new Map();
map.set("name","sapna");
map.set("age",22);
console.log(map);
for(const[key,value]of map)
{
    console.log(`key is ${key} and value is ${value}`);

}

// in case of object there is a special way to iterate over the object using for in loop
const myObject={
    game1:"NFS",
    game2:"FIFA",
    game3:"PUBG"
}
// we can use for in loop to iterate over the object 

for(const key in myObject)
{
    console.log(`key is ${key} and value is ${myObject[key]}`);
}

// can we use for in for array? yes we can use for in loop for array but it is not recommended because it will give the index of the array not the value of the array
const myArray=[1,2,3,4,5];
for(const key in myArray)
{
    console.log(`key is ${key} and value is ${myArray[key]}`);
}

// map is not iterable but we can use for of loop to iterate over the map because map is an iterable object but we can't use for in loop


//for each loop
const coding=["html","css","javascript","react"];

//here are using call back function 
coding.forEach(function (lan){
    console.log(`language is ${lan}`);
})

// arrow function can also be use
coding.forEach((lan)=>{
    console.log(`language is ${lan}`);
})

//in forEach we can have item ,index and the array
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>
{
    console.log(item.languageName);
})
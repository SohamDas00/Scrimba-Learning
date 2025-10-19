//function
const function1=(name)=>{
    console.log("Hello "+name);
}
function1("Soham")//arrow function

const sum=(a,b)=>{
    return a+b;
}
console.log(sum(2,3));//name function

const wish=function(){
    return ("Hello word");
}
console.log(wish());//aonymous function

//async function | High order function**

//Objects
const obj={
    name:"Soham Das",
    age:21,
    role:"Developer"
}
console.log(obj);
console.log("Name: "+obj.name);

obj.role="Full stack Dev"
console.log(obj);

obj.gender="M"

console.log(obj);
console.log("After deleting..");

delete(obj.gender)
console.log(obj);

console.log("Hello world");

//variable
let num=100;
num=200;//redeclear the variable
console.log(num);
const num1=300//can't be redeclear
console.log(num1);

//datatype
//Primitive
let num2=3.14//number
let str="Hey"//string
let bool=false//boolean
console.log(num2);
console.log(str);
console.log(bool);

//non-Primitive
const obj1={
    name:"Soham",
    age:21,
    gender:'M'
}
console.log(obj1);
console.log(obj1.gender);

const array=['Apple','Watermelon','grapes']
console.log(array);
console.log(array[2]);

const fun=(a,b)=>{
    console.log(a+b);
}
fun(4,5);

operator
let number1=4
let number2=3
//arethmetic
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log((number1/number2).toFixed(2));
//assignment
console.log(number1+=10);
console.log(number2*=2);
//comparison
console.log(number1>=number2);
console.log(number1==number2);
//logical
const a=true;
const b=false;
console.log(a && b);//and
console.log(a || b);//or
//ternary
let age1=34
console.log(age1>18? "adult":"child");
//string
let x="10"
let y="010"
console.log(x+y);

//control statement
const prompt = require('prompt-sync')();
let marks=prompt("Enter marks: ")
if(marks>0 && marks<=50) console.log("Fail");
else if(marks>50 && marks<=70) console.log("Average");
else if(marks>70 && marks<=90) console.log("Good");
else if(marks>90 && marks<=100) console.log("Excellent");
else console.log("Invlalid marks");
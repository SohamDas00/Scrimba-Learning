let myAge=5;
let humanDogRatio=4;
let ans=myAge*humanDogRatio;

console.log(ans);

let name="Soham";
let greating="Good morning.."
console.log(name+", "+greating);

const number=10;
const str="400"
console.log(number+str);

let firstName="Soham"
let lastName=" Das"
let fullName=firstName+lastName
console.log(fullName);

hey=()=>{
    console.log("Hello world");
}

hey();

//if elseif else
let age=14;
if(age>21) console.log("allow to enter the night club");
else console.log("not allow to enter the night club");

//allow to get invition from king when age is 100
let age2=100;
if(age2<100) console.log("Not eligible to get ivititation from king");
else if(age2==100) console.log("Eligible to get ivititation from king");
else console.log("Already got invition from king");

//boolean
let isAlpha=false;
function check(){
    if(!isAlpha){
        console.log("he is not segma");
        isAlpha=true;
    } 
    else console.log("he is sigma");
}
check();
check();

for(let i=10;i<=15;i++){
    console.log(i);
}


arrow=()=>{
    console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`);
}//arrow function
function normal(){
    console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`);
}//normal function

const person={
    name:"Soham",
    age:"21",
    country:"India"
}
arrow()
normal()
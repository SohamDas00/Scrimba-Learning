// document.querySelector(".count").innerHTML=5

// let myAge=5;
// let humanDogRatio=4;
// let ans=myAge*humanDogRatio;

// console.log(ans);
let countDigit=0;
const plus=document.querySelector(".plus");
const minus=document.querySelector(".minus");
const reset=document.querySelector(".reset");

const count=document.querySelector(".count");


plus.addEventListener('click', ()=>{
    count.innerHTML=countDigit+=1;
})
minus.addEventListener('click',()=>{
    count.innerHTML=countDigit-=1   ;
})
reset.addEventListener('click',()=>{
    countDigit=0;
    count.innerHTML=countDigit;
})

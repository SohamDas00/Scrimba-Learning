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


error=document.querySelector(".error");
shoesButton=document.querySelector(".shoes-button")

shoesButton.addEventListener("click",()=>{
    error.innerHTML="Something went wrong, please try again."
    error.style.color="red";
})


let co1=0;
let co2=0;
let cou1=document.querySelector(".count1")
let cou2=document.querySelector(".count2")
let one=document.querySelector('#one')
let two=document.querySelector("#two")
let three=document.querySelector('#three')
let four=document.querySelector('#four')
let five=document.querySelector("#five")
let six=document.querySelector('#six')

one.addEventListener('click',()=>{
    cou1.innerHTML=co1+=1;
})
two.addEventListener('click',()=>{
    cou1.innerHTML=co1+=2;
})
three.addEventListener('click',()=>{
    cou1.innerHTML=co1+=3;
})

four.addEventListener('click',()=>{
    cou2.innerHTML=co1+=1;
})
five.addEventListener('click',()=>{
    cou2.innerHTML=co1+=2;
})
six.addEventListener('click',()=>{
    cou2.innerHTML=co1+=3;
})


const emojies=["🐒","🦋","🐘","🦒","🐶","🐱","🦁","🐻","🐸","🐢"]


const randomEmojie1=Math.floor(Math.random()*emojies.length)
const dataEmojie1=emojies[randomEmojie1];
const randomEmojie2=Math.floor(Math.random()*emojies.length)
const dataEmojie2=emojies[randomEmojie2];

const fightButton=document.querySelector(".fightButton")
const emojie1=document.querySelector(".emojie1")
const emojie2=document.querySelector(".emojie2")

fightButton.addEventListener('click',()=>{
    emojie1.innerHTML=dataEmojie1;
    emojie2.innerHTML=dataEmojie2;
})

const reload=document.querySelector(".reload")
reload.addEventListener('click',()=>{
    window.location.reload();
})
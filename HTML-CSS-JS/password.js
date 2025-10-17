const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ":", ";", "<", ">", ".", "?", "/", "~"
];

let len = document.getElementById('number')

const sugg1 = document.querySelector(".sugg1")
const sugg2 = document.querySelector(".sugg2")
const button = document.querySelector(".button")

button.addEventListener('click', () => {
    let password1 = '';
    let password2 = '';

    let length = parseInt(len.value);
    for (let i = 0; i < length; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomIndex1]
    }

    for (let i = 0; i < length; i++) {
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        password2 += characters[randomIndex2]
    }

    sugg1.innerHTML = password1;
    sugg2.innerHTML = password2;
})

sugg1.addEventListener('click', () => {
    navigator.clipboard.writeText(sugg1.innerText)
        .then(() => {
            let original = sugg1.innerText;
            sugg1.innerText = "Copied!";
            setTimeout(() => {
                sugg1.innerText = original;
            }, 1000);
        });
})
sugg2.addEventListener('click', () => {
    navigator.clipboard.writeText(sugg2.innerText)
        .then(() => {
            let original = sugg2.innerText;
            sugg2.innerText = "Copied!";
            setTimeout(() => {
                sugg2.innerText = original;
            }, 1000);
        });
})


const input1 = document.querySelector(".place1")
const input2 = document.querySelector(".place2")
const but = document.querySelector(".add")
const adding = document.querySelector(".adding")

but.addEventListener("click", () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    adding.innerHTML = `${value1} + ${value2} = ${value1 + value2}`;
})

const welcome=document.querySelector(".myName")
// welcome.innerHTML="Soham Das"
const funWel=(name)=>{
    welcome.innerHTML=`${name}`
}
funWel("Soham Das")
//functional parameter
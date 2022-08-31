// initialize count as 0
// listen for clicks
//increment the count when button is clicked
//change the count-el in HTML

let btn = document.getElementById('increment-btn');
let reset = document.getElementById('reset');
let count = document.getElementById('count-el');
let save = document.getElementById('save')



btn.addEventListener('click', () =>{
    count.innerHTML++;
});

reset.addEventListener('click', () =>{
    count.innerHTML = 0;
});

save.addEventListener('click', () => {
    console.log(count.innerHTML);
})


const greeting = 'Hello! My name is '
const myName = 'Łukasz Cena.'
const myGreeting = greeting + myName;

console.log(myGreeting)


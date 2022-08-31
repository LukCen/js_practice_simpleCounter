// initialize count as 0
// listen for clicks
//increment the count when button is clicked
//change the count-el in HTML

let btn = document.getElementById('increment-btn');
let reset = document.getElementById('reset');
let count = document.getElementById('count-el');



btn.addEventListener('click', () =>{
    count.innerHTML++;
});

reset.addEventListener('click', () =>{
    count.innerHTML = 0;
});



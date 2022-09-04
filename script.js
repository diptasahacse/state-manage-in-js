// Select Dom Element
const counterElement = document.getElementById('counter');
const incrementElement = document.getElementById('increment');
const decrementElement = document.getElementById('decrement');


const counter2Element = document.getElementById('counter2');
const increment2Element = document.getElementById('increment2');
const decrement2Element = document.getElementById('decrement2');

// Initial State
let counter = 0;
let counter2 = 0;

// Event Listener
incrementElement.addEventListener('click',()=>{
    counter++;
    counterElement.innerText = counter;
    
})

decrementElement.addEventListener('click',()=>{
    counter--;
    counterElement.innerText = counter;
    
})


increment2Element.addEventListener('click',()=>{
    counter2++;
    counter2Element.innerText = counter2;
    
})

decrement2Element.addEventListener('click',()=>{
    counter2--;
    counter2Element.innerText = counter2;
    
})

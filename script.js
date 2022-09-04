// Select Dom Element
const counterElement = document.getElementById('counter');
const incrementElement = document.getElementById('increment');
const decrementElement = document.getElementById('decrement');

// Initial State
let counter = 0;

// Event Listener
incrementElement.addEventListener('click',()=>{
    counter++;
    counterElement.innerText = counter;
    
})

decrementElement.addEventListener('click',()=>{
    counter--;
    counterElement.innerText = counter;
    
})

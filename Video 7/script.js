const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");

let count = 0;
increment.onclick = function(){
    count++;
    counter.innerText = count;
}
decrement.onclick = function(){
    count--;
    counter.innerText = count;
    if(count < 0){
        count = 0
        counter.innerText = count;
    }
}
reset.onclick = function(){
    count = 0;
    counter.innerText = count;
}

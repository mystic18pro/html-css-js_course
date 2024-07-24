// const min = 50
// const max = 100
// randomNum = Math.floor(Math.random() * (max-min)) + min; // 50 to 100

// console.log(randomNum)


const maxNumInput = document.getElementById("maxNum");
const minNumInput = document.getElementById("minNum");
const generateBtn = document.getElementById("generate");
const randomNumH1 = document.getElementById("randomNum");
let maxNum;
let minNum;
let randomNum;
generateBtn.addEventListener("click", function(){
    maxNum = Number(maxNumInput.value);
    minNum = Number(minNumInput.value);
    randomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum);
    randomNumH1.textContent = randomNum;
});
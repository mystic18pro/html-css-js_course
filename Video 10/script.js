// let agePrompt = window.prompt("Enter your age");
// let age = Number(agePrompt);
// if (age >= 18) {
//     window.alert("You are an adult");
// } else {
//     window.alert("You are not an adult");
// }

// let time = 18;

// if (time <= 9){
//    console.log("Good Morning!")
// }
// else if (time >= 9 && time < 17){
//     console.log("Good Afternoon!")
// }
// else if (time >= 17 ){
//     console.log("Good Evening!")
// }

let ageInput = document.getElementById("ageInput");
let licenseInput = document.getElementById("licenseCheck");
let eligibilityH1 = document.getElementById("eligibility");
ageInput.addEventListener("input", checkEligibility);
licenseInput.addEventListener("input", checkEligibility);
    

function checkEligibility() {
    let age = Number(ageInput.value);
    let license = licenseInput.value.toLowerCase();

    if (age >= 18) {
        if (license == "yes") {
            eligibilityH1.textContent = "You are eligible";
        } else if (license == "no") {
            eligibilityH1.textContent = "You are not eligible, you need a license";
        }
        else {
            eligibilityH1.textContent = "Invalid input";
        }
    }
    else if (age < 18) {
        eligibilityH1.textContent = "You are not eligible, you are too young";
    }
    else {
        eligibilityH1.textContent = "Invalid input";
    }
}

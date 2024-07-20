let userName;
// easy way
// userName = window.prompt("Enter a username: ")
// document.getElementById("userNameH1").innerHTML = `${userName}`

// pro way

document.getElementById("submit").onclick = function(){
    userName = document.getElementById("username").value;
    document.getElementById("userNameH1").textContent = `Your username is ${userName}`
}
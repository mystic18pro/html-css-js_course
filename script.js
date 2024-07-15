var a = 'Hello';

console.log(`Variable a is ${a}`);

document.getElementById(`myH1`).textContent = "Hello";

let videos = ["Introduction", "Variables", "Arithmetic Operators"];
let list = document.getElementById("videoList");
for (let i = 0; i < videos.length; ++i) {
    let li = document.createElement('li');
    if (i === 0) {
        // For the first item, just set the text
        li.innerText = videos[i];
    } else {
        // For the other items, create an anchor tag
        let a = document.createElement('a');
        a.href = videos[i] + '/index.html';
        a.innerText = videos[i];
        li.appendChild(a);
    }
    list.appendChild(li);
}

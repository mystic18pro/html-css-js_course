document.getElementById("myH1").textContent = "Hello";

// Generate video names from "Video 2" to "Video 80"
let videos = [];
for (let i = 2; i <= 80; ++i) {
  videos.push(`Video ${i}`);
}

let list = document.getElementById("videoList");
for (let i = 0; i < videos.length; ++i) {
  let li = document.createElement("li");

  // Create an anchor tag for every video
  let a = document.createElement("a");
  a.href = videos[i] + "/index.html";
  a.innerText = videos[i];
  li.appendChild(a);

  list.appendChild(li);
}

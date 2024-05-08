let counter = 0 ;
let count = document.getElementById("Count");
document.getElementById("resetBtn").style.userSelect = "none";
count.style.userSelect = "none";
let add = () => count.innerHTML = (counter = (counter + 1));
let remove = () => count.innerHTML = (counter = (counter - 1));
let reset = () => count.innerHTML = (counter = 0);
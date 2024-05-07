let counter = 0 ;
let count = document.getElementById("Count");
let add = () => count.innerHTML = (counter = (counter + 1));
let reset = () => count.innerHTML = (counter = 0);
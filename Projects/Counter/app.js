let count = document.getElementById('Count');
let resetBtn = document.getElementById('resetBtn');
count.style.userSelect = "none";
resetBtn.style.userSelect = "none";
let counter = 0;
let add = () => {
    count.classList.toggle("flip");
    setTimeout(()=>{
        count.innerHTML = counter = counter + 1;
    }, 450)
}
let remove = () => count.innerHTML = counter = counter - 1;
let reset = () => {
    counter = 0;
    count.innerHTML = counter;
}